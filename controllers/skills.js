// Require the Model
// a model by convention singular and upperCase
const SkillModel = require("../models/skill");

module.exports = {
  index: index,
  show,
  new: newSkill,
  create,

  // optionally
  // index
};

function create(req, res) {
	// Then we need to tell the model, take the information
	// from the form and add it to the database
	SkillModel.create(req.body)
	
	res.redirect('/skills'); // tells the client 
	// make a get request to /todo
}

function newSkill(req, res) {
  res.render("skills/new");
}

function show(req, res) {
  console.log(req.params.id, " <- req.params.id");

  res.render("skills/show", { skill: SkillModel.getOne(req.params.id) });
}

// then render the skills/index.ejs, and inject a todos variable,
// that contains all the skills in the model file

function index(req, res, next) {
  res.render("skills/index.ejs", { skills: SkillModel.getAll() });
}
