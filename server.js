'use strict';

const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const HapiSwagger = require('hapi-swagger');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const mongodb = require('mongodb');
const { method } = require('./Routes/Profile_route/add_profile_route');
const { version } = require('joi');
const pack = require('./package.json');
const Jwt = require('@hapi/jwt');
const jwt_privte_key =  require('./util/config');
const { verify } = require('jsonwebtoken');
const { validate } = require('./Schema/Profile');
const User = require('./Schema/User');
const redis = require('./util/redis');
const profile = require('./Schema/Profile');


mongoose.connect("mongodb://localhost/Task_Manager");

const init = async () => {
    const server = Hapi.Server({
        port: 3000,
        host: 'localhost'
    });

    const validate = async (artifacts, request, h, callback) => {
        try {
            const payload = artifacts.decoded.payload;
            // console.log(payload);
            const redis_reply = await redis.get(artifacts.decoded.payload.id)
            if(!redis_reply){
                return {isValid: false}
            }
            const session = JSON.parse(redis_reply);
            // console.log(session);
            if(session && session.valid){
                const profileModel = await profile.findOne({_id: session.user.Profile_id})
                // console.log(profileModel);
                return {
                    isValid: true,
                    credentials: {profile: profileModel, user: session.user, role: session.user.role}
                }
            }else {
                return {isValid: false}
            }
        } catch (error) {
            console.log(error);
        }
    }

    await server.register(Jwt);
    server.auth.strategy('jwt', 'jwt', {
        keys: jwt_privte_key,
        verify: false,
        validate
    });

    server.auth.default('jwt');

    server.route  ({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return "Welcome"
        }
    });

    const swaggerOptions = {
        info: {
            title:'Task Manager',
            version: pack.version,
        },
        securityDefinitions: {
            Bearer: {
                type: 'apiKey',
                name: 'Authorization',
                in: 'header',
                'x-keyPrefix': 'Bearer'
            }
        },
        security: [{ Bearer: [] }],
        schemes: ['http', 'https']
    }

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    let plugins = [
        {
            plugin: require('hapi-authorization'),
            options: {
                roles: ['ADMIN', 'USER']
            }
        }
    ]

    await server.register(plugins);




    server.route(require('./Routes/Profile_route/add_profile_route'));
    server.route(require('./Routes/Profile_route/delete_profile_route'));
    server.route(require('./Routes/Profile_route/update_profile_route'));
    server.route(require('./Routes/Profile_route/read_profile_route'));
    server.route(require('./Routes/Profile_route/readone_profile_route'));
    server.route(require('./Routes/Login_User_route'));
    server.route(require('./Routes/Create_User.route'));
    server.route(require('./Routes/Task/createTask'));
    server.route(require('./Routes/Task/updateTask_route'));
    server.route(require('./Routes/Task/getAllTask_route'));

   await server.start();
    console.log('Server is running on ', server.info.uri);
}
init();

