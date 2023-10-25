var team = require('../models/teams');

module.exports.addTeam = function (req, res) {
    team.create(req.body).then((result) => {
        res.json(result);
    }
    ).catch((err) => {
        res.json(err);
    });
}
module.exports.view = function (req, res) {
    team.find().sort({teamname: 1}).then((result) => {
        res.json(result);
    }).catch((err) => { 
        res.json(err);
    });
}
module.exports.delete = function (req, res) {
    team.deleteOne({ id: req.params.id }).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
}