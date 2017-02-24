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

        console.log("creating", req.body);
        res.json("game")

        // var score = req.body.question_1 + req.body.question_2 + req.body.question_3;
        // var percentage = (score / 3) * 100;

        // var game = new Game({name: req.body.name,score: score, percentage: percentage,})
        // game.save(function (err) {
        //     if(err){
        //         console.log(err);
        //         res.json({});
        //     }
        //     res.json({});
        // })
	}
}