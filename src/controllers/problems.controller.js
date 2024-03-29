const  statusCodes = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');
function pingProblemController(req, res) {
    return res.json({message: "Ping controller is up and running"});
}

function addProblem(req, res,  next) {
    try{
        throw new NotImplemented("addProblem");
    }
    catch(error){
        next(error);
    }
}

function getProblem(req,res) {
    try{
        throw new NotImplemented("getProblem");
    }
    catch(error){
        next(error);
    }
}

function getProblems(req, res) {
    try{
        throw new NotImplemented("getProblems");
    }
    catch(error){
        next(error);
    }
}

function deleteProblem(req, res) {
    try{
        throw new NotImplemented("deleteProblem");
    }
    catch(error){
        next(error);
    }
}

function updateProblem(req, res) {
    try{
        throw new NotImplemented("updateProblem");
    }
    catch(error){
        next(error);
    }
}
//in controller, we export all functions
module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem ,
    pingProblemController
}