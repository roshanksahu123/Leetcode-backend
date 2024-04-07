const NotImplemented = require('../errors/notImplemented.error');
const { ProblemService } = require('../services');
const { ProblemRepository  } = require('../repositories');
const { StatusCodes } = require('http-status-codes');

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
    return res.json({message: "Ping controller is up and running"});
}

async function addProblem(req, res,  next) {
    try{
        const newProblem = await problemService.createProblem(req.body );
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Problem added successfully",
            error: {},
            data: newProblem
        })
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

async function getProblems(req, res) {
    try{
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully retrieved all the problems",
            error: {},
            data: response
        });
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