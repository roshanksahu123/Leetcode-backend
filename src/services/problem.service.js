const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {

    constructor(problemRepository) {
        this.problemRepository = problemRepository; 
    }

    async createProblem(problemData) {
        try {
            //1.  Sanitize the markdown for description
            problemData.description = sanitizeMarkdownContent(problemData.description);
            //2.  Create the problem by calling repository
            const problem = await this.problemRepository.createProblem(problemData);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemService;