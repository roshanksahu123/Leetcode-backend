function pingProblemController(req, res) {
    return res.json({message: "Ping controller is up and running"});
}

function addProblem(req, res) {

}

function getProblem(req,res) {

}

function getProblems(req, res) {

}

function deleteProblem(req, res) {

}

function updateProblem(req, res) {

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