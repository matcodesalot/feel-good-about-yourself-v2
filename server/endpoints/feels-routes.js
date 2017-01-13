import express from 'express';
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();
import bcrypt from 'bcryptjs';
import Feel from '../schemas/feel';
import User from '../schemas/user';
import passport from 'passport';
import {BasicStrategy} from 'passport-http';
import strategy from './passport-strategy';

const feelsRouter = express.Router();
passport.use(strategy);
feelsRouter.use(passport.initialize());

//Get all the feels from the db
feelsRouter.get("/", function(req, res) {
	Feel.find({}, function(err, feels) {
		if(err) {
			console.log(err);
			return res.status(500).json({message: "Internal server error"});
		}

		return res.json(feels);
	});
});

feelsRouter.post("/", jsonParser, passport.authenticate("basic", {session: false}), function(req, res) {
	//check if the proper fields are in place
	if(!req.body) {
		return res.status(400).json({message: "No request body"});
	}

	if(!("feelText" in req.body)) {
		return res.status(422).json({message: "Missing field: feelText"});
	}

	if(!("fromUser" in req.body)) {
		return res.status(422).json({message: "Missing field: fromUser"});
	}

	if(!("likes" in req.body)) {
		return res.status(422).json({message: "Missing field: likes"});
	}

	//handle feelText
	let feelText = req.body.feelText;

	if(typeof feelText !== "string") {
		return res.status(422).json({message: "Incorrect field type: feelText"});
	}

	feelText = feelText.trim();

	if(feelText === "") {
		return res.status(422).json({message: "Incorrect field length: feelText"});
	}

	//handle from
	let fromUser = req.body.fromUser;

	if(typeof fromUser !== "string") {
		return res.status(422).json({message: "Incorrect field type: fromUser"});
	}

	fromUser = fromUser.trim();

	if(fromUser === "") {
		return res.status(422).json({message: "Incorrect field length: fromUser"});
	}

	//handle likes
	let likes = req.body.likes;

	if(typeof likes !== "number") {
		return res.status(422).json({message: "Incorrect field type: likes"});
	}

	if(likes === null) {
		return res.status(422).json({message: "Incorrect field length: likes"});
	}

	//find the user that coordinates with this feel
	User.findOne({username: fromUser}, function(err, user) {
		if(err) {
			console.log(err);
			return res.status(500).json({message: "Internal server error"});
		}

		//make a new feel object
		let newFeel = new Feel({
			feelText: feelText,
			fromUser: user.username,
			likes: likes,
		});

		//create and save the feel
		newFeel.save(function(err, feel) {
			if(err) {
				console.log(err);
				return res.status(500).json({message: "Internal server error"});
			}

			return res.status(201).json(feel);
		})
	})
})

feelsRouter.delete("/:feelId", passport.authenticate("basic", {session: false}), function(req, res) {
	let feelId = req.params.feelId;

	Feel.findByIdAndRemove(feelId, function(err) {
		if(err) {
			console.log(err);
			return res.status(500).json({message: "Internal server error"});
		}

		return res.json({});
	});
});

module.exports = feelsRouter;