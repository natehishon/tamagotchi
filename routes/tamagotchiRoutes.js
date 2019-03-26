const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireAlive = require('../middlewares/requireAlive');
const noTamagotchi = require('../middlewares/noTamagotchi');

const Tamagotchi = mongoose.model('tamagotchis');

module.exports = app => {

    app.post('/api/clean', requireLogin, async (req, res) => {

        try {
            let updated = await Tamagotchi.findOneAndUpdate(
                {
                    _id: req.body._id,

                },
                {
                    $inc: { ["poops"]: 1 }
                },
                { "new": true}
            );

            res.send(updated)

        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.post('/api/pet', requireLogin, async (req, res) => {

        try {
            let updated = await Tamagotchi.findOneAndUpdate(
                {
                    _id: req.body._id,

                },
                {
                    $inc: { ["pets"]: 1 }
                },
                { "new": true}
            );

            res.send(updated)

        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.post('/api/feed', requireLogin, async (req, res) => {

        try {
            let updated = await Tamagotchi.findOneAndUpdate(
                {
                    _id: req.body._id,

                },
                {
                    $inc: { ["meals"]: 1 }
                },
                { "new": true}
            );

            res.send(updated)

        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.post('/api/tamagotchi', requireLogin, noTamagotchi, async (req, res) => {
        const { name, assetUrl} = req.body;

        console.log("reqbody");
        console.log(req.body);

        const tamagotchi = new Tamagotchi({
            name,
            assetUrl,
            _user: req.user.id
        });

        try {

            await tamagotchi.save();

            const user = await req.user.save();

            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }

    });

    app.get('/api/tamagotchi', requireLogin, async (req, res) => {
        const tamagotchi = await Tamagotchi.findOne({ _user: req.user.id }).select();

        res.send(tamagotchi);
    });



};