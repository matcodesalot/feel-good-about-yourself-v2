import express from 'express';
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();
import bcrypt from 'bcryptjs';
import User from '../schemas/user';
import passport from 'passport';
import {BasicStrategy} from 'passport-http';
import strategy from './passport-strategy';

const usersRouter = express.Router();
passport.use(strategy);
usersRouter.use(passport.initialize());

//Get all the users from the db
usersRouter.get("/", passport.authenticate("basic", {session: false}), function(req, res) {
	User.find({}, function(err, users) {
		if(err) {
			console.log(err);
			return res.status(500).json({message: "Internal server error"});
		}

		return res.json(users);
	});
});

//Get one user from the db
usersRouter.get("/:username", passport.authenticate("basic", {session: false}), function(req, res) {
	let username = req.params.username;

	User.findOne({username: username}, function(err, user) {
		if(err) {
			console.log(err);
			return res.status(500).json({message: "Internal server error"});
		}

		//return res.json({username: user.username});
		return res.json(user);
	});
});

//Create a new user
usersRouter.post("/", jsonParser, function(req, res) {
	//check if the proper fields are in place
	if(!req.body) {
		return res.status(400).json({message: "No request body"});
	}

	if(!("username" in req.body)) {
		return res.status(422).json({message: "Missing field: username"});
	}

	if(!("password" in req.body)) {
		return res.status(422).json({message: "Missing field: password"});
	}

	//handle username
	let username = req.body.username;

	if(typeof username !== "string") {
		return res.status(422).json({message: "Incorrect field type: username"});
	}

	username = username.trim();

	if(username === "") {
		return res.status(422).json({message: "Incorrect field length: username"});
	}

	//handle password
	let password = req.body.password;

	if(typeof password !== "string") {
		return res.status(422).json({message: "Incorrect field type: password"});
	}

	password = password.trim();

	if(password === "") {
		return res.status(422).json({message: "Incorrect field length: password"});
	}

	//generate salt
	bcrypt.genSalt(10, function(err, salt) {
		if(err) {
			console.log(err);
			return res.status(500).json({message: "Internal server error"});
		}

		//hash
		bcrypt.hash(password, salt, function(err, hash) {
			if(err) {
				console.log(err);
				return res.status(500).json({message: "Internal server error"});
			}

			//make a new user object, replace password with hash
			let user = new User({
				username: username,
				password: hash,
			});

			//create and save the user
			user.save(function(err) {
				if(err) {
					console.log(err);
					return res.status(500).json({message: "Internal server error"});
				}

				return res.status(201).json({});
			});
		});
	});
});

module.exports = usersRouter;