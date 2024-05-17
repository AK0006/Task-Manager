'use strict';

const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const HapiSwagger = require('hapi-swagger');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const pack = require('./package.json');
const Jwt = require('@hapi/jwt');
const jwt_privte_key =  require('./util/config');
const redis = require('./util/redis');
const profile = require('./Profile/Schema/Profile');


mongoose.connect("mongodb://localhost/Task_Manager");

const init = async () => {
    const server = Hapi.Server({
        port: 3000,
        host: 'localhost'
    });

    const validate = async (artifacts, request, h, callback) => {
        // console.log(artifacts.decoded.payload);
        try {
            const redis_reply = await redis.get(artifacts.decoded.payload.id)
            // console.log(redis_reply);
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
            // console.log(error);
            return error
        }
    }

    await server.register(Jwt);
    server.auth.strategy('jwt', 'jwt', {
        keys: jwt_privte_key,
        verify: false,
        validate
    });

    server.auth.default('jwt');

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
        schemes: ["http", "https"]
    }


    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    const plugins = [
        {
            plugin: require('hapi-authorization'),
            options: {
                roles: ['Admin', 'User']
            }
        }
    ];
    await server.register(plugins);


    

    await server.start();
    console.log('Server is running on %s', server.info.uri);

    server.register([
        {
            plugin: require('./User/index')
        },
        {
            plugin: require('./Comment/index')
        },
        {
            plugin: require('./Profile/index') 
        },
        {
            plugin: require('./Task/index')
        }
    ]);
}
init();

