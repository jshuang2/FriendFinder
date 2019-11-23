var surveyData = require ("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(surveyData);
    });

    app.post("/api/friends", function (req, res) {
        var newSurveyResult = JSON.parse(req.body.data);
        
        surveyData.push(newSurveyResult);

        res.json(newSurveyResult);

    })
};