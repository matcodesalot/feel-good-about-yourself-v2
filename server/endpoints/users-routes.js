import express from 'express';
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();
import bcrypt from 'bcryptjs';
import User from '../schemas/user';
import passport from 'passport';
import {BasicStrategy} from 'passport-http';
//import strategy from './passport-strategy';

const usersRouter = express.Router();

//Get all the users from the db
usersRouter.get("/", function(req, res) {
	User.find({}, function(err, users) {
		if(err) {
			console.log(err);
			return res.status(500).json({message: "Internal server error"});
		}

		return res.json(users);
	});
});

module.exports = usersRouter;