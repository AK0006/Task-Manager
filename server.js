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
const profile = require('./Schema/Profile');


mongoose.connect("mongodb://localhost/Task_Manager");

const init = async () => {
    const server = Hapi.Server({
        port: 3000,
        host: 'localhost'
    });

    const validate = async (artifacts, request, h, callback) => {
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
        security: [{ 'Bearer': [] }],
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
                roles: ['Admin', 'User']
            }
        }
    ];
    await server.register(plugins);

    await server.start();
    console.log('Server is running on ', server.info.uri);

    // Profile
    server.route(require('./Routes/Profile_route/add_profile_route'));
    server.route(require('./Routes/Profile_route/delete_profile_route'));
    server.route(require('./Routes/Profile_route/update_profile_route'));
    server.route(require('./Routes/Profile_route/read_profile_route'));
    server.route(require('./Routes/Profile_route/readone_profile_route'));
    // User
    server.route(require('./Routes/User/Login_User_route'));
    server.route(require('./Routes/User/Create_User.route'));
    // Task
    server.route(require('./Routes/Task/createTask'));
    server.route(require('./Routes/Task/updateTask_route'));
    server.route(require('./Routes/Task/getAllTask_route'));
    server.route(require('./Routes/Task/deleteTask_route'));
    server.route(require('./Routes/Task/getOneTask_route'));
    //Comment
    server.route(require('./Routes/Comment/addComment_route'));
    server.route(require('./Routes/Comment/updateComment_route'));
    server.route(require('./Routes/Comment/deleteComment_routes'));
    server.route(require('./Routes/Comment/getOneComment_route'));
    server.route(require('./Routes/Comment/getComment_route'));

}
init();

