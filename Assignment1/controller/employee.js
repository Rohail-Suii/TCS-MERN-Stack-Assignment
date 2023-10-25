var employee = require('../models/employees');

module.exports.addEmployee = function (req, res) {
    employee.create(req.body).then((result) => {
        res.json(result);
    }
    ).catch((err) => {
        res.json(err);
    });
}
module.exports.view = function (req, res) {
    employee.find().sort({ fname: 1 }).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
}
module.exports.viewbyid = function (req, res) {
    employee.find({ id: req.params.id }).exec().then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
}
module.exports.update = function (req, res) {
    employee.findOneAndUpdate({ id: req.params.id }, { fname: req.body.fname, lname: req.body.lname }).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
}