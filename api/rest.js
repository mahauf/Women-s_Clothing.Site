const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserDetail = require('./user-detail');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

mongoose.connect('mongodb://0.0.0.0:27017')
    .then(()=>{
        console.log('connected to Mongodb')
    })
    .catch(()=>{
        console.log('error connecting to MongoDb')
    })


    app.use(bodyParser.json());
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})


app.post('/signup', (req,res) => {

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const userDetail = new UserDetail({
                username: req.body.username,
                password: hash
            })

            userDetail.save()
            .then(result => {
                res.status(201).json({
                    message: 'User created',
                    result: result
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
        })
})

app.post('/signin', (req,res) => {

    let userFound;

    UserDetail.findOne({username: req.body.username})
        .then(user => {
            if(!user){
                return res.status(401).json({
                    message: 'User not found'
                })
            }
            userFound = user
            return bcrypt.compare(req.body.password, user.password)
        })
    .then(result => {
        if(!result){
            return res.status(401).json({
                message: 'Password is incorrect'
            })
        }

        const token = jwt.sign({username: userFound.username, userId: userFound._id}, "secret_string", {expiresIn:"1h"})
        return res.status(200).json({
            token: token
        })
    })
    .catch(err => {
        return res.status(401).json({
            message: 'Error with authentication'
        })
    })
})

module.exports = app;