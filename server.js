"use strict";   

const Hapi = require('@hapi/hapi');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const HapiSwagger = require('hapi-swagger');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const pack = require('./package.json');
const Jwt = require('@hapi/jwt');
const jwt_privte_key =  require('./util/config');
const redis = require('./util/redis');
const profile = require('./Profile/Schema/Profile');
const { version } = require('joi');
require('dotenv').config()

mongoose.connect("mongodb://localhost/Task_Manager");
exports.transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'aksteelshot99@gmail.com',
        pass: process.env.PASSWORD
    }
});
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
            // console.log(session.user);
            if(session && session.valid){
                const profileModel = await profile.findOne({_id: session.user.Profile_id})
                // console.log(profileModel);
                return {
                    isValid: true,
                    credentials: { profile: profileModel, user: session.user, role: session.user.role, valid: session.valid }
                }
            }else {
                // console.log("Not found");
                return {isValid: false}
            }
        } catch (error) {
            console.log(error);
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

    // Used it directly 
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
        schemes: [ "http", "https" ]
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
        },
        {
            plugin: require('./Test/index')
        },
        {
            plugin:require('./PO/index')
        },
        {
            plugin: require('./CO/index')
        },
        {
            plugin: require('./cosAverage/index')
        }
    ]);
}
init();


        // const subjectsId_Name = new Map();
        // subjectData.forEach(subject => {
        //     subjectsId_Name.set(subject._id, subject.subject_Name)
        // });
        // console.log(subjectsId_Name);

        
        // subject_Name: subjectsId_Name.get(item.subject_id),