var mongoose = require('mongoose');
var Game = mongoose.model('Game');

module.exports = {

    index: function(req, res) {
        console.log("initiating product index sever controller")

        Game.find({}, function(err, games) {
            if(err) {
                console.log("Error Found: ", err);
                res.json(err);
            } else {
                console.log("Games found in DB: ", games);
                res.json(games);
            };
        });
    },

    create: function(req, res) {

        console.log("creating", req.body, "repsonse1: ", req.body.response1, "response2: ", req.body.response2, "response3: ", req.body.response3);
        
        let answer1 = Number(req.body.response1)
        let answer2 = Number(req.body.response2)
        let answer3 = Number(req.body.response3)

        let score = answer1 + answer2 + answer3
        var percentage = (score / 3) * 100;

        console.log("score is: ", score, " and percentage is: ", percentage)

        var game = new Game({player: req.body.player,score: score, percentage: percentage,})
        game.save(function (err, savedGame) {
            if(err){
                console.log(err);
                res.json(err);
            }
            res.json(savedGame);
        })
	}
}