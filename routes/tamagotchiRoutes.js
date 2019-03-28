const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireAlive = require('../middlewares/requireAlive');
const noTamagotchi = require('../middlewares/noTamagotchi');
const cron = require('node-cron');

const Tamagotchi = mongoose.model('tamagotchis');

module.exports = app => {

    //run at midnight
    cron.schedule('0 0 0 * * *', async ()  => {

        await Tamagotchi.find({}, async function(err, tamagotchis) {
            tamagotchis.forEach(async function(tamagotchi) {
                if((tamagotchi.meals < 3 || tamagotchi.pets < 5 || tamagotchi.clean < 2 || tamagotchi.sleep == false || tamagotchi.wake == false) && (tamagotchi.status == "ALIVE") ){

                    //this is not the best, not sure how to cleanly save a full list
                    await Tamagotchi.findOneAndUpdate(
                        {
                            _id: tamagotchi._id,

                        },
                        {
                            $set: { ["status"]: "DEAD" }
                        },
                        { "new": true}).exec()
                }
            });


        });

           await Tamagotchi.update(
                {
                    status: "ALIVE"
                },
                {
                    $set: {
                        "pets": 0,
                        "meals": 0,
                        "clean": 0,
                        "sleep": false,
                        "wake": false
                    }
                },
                {'multi':true}
            ).exec()





    });

    app.post('/api/delete', requireLogin, async (req, res) => {

        try {

            await Tamagotchi.findOneAndDelete({ _id: req.body._id }, function(err) {
               if(err){
                   console.log(err)
               }
            });


            return res.send(false)


        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.post('/api/clean', requireLogin, async (req, res) => {

        try {
            let updated = await Tamagotchi.findOneAndUpdate(
                {
                    _id: req.body._id,

                },
                {
                    $inc: { ["clean"]: 1 }
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

    app.post('/api/wake', requireLogin, async (req, res) => {

        try {
            let updated = await Tamagotchi.findOneAndUpdate(
                {
                    _id: req.body._id,

                },
                {
                    $set: { ["wake"]: true }
                },
                { "new": true}
            );

            res.send(updated)

        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.post('/api/sleep', requireLogin, async (req, res) => {

        try {
            let updated = await Tamagotchi.findOneAndUpdate(
                {
                    _id: req.body._id,

                },
                {
                    $set: { ["sleep"]: true }
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


        const tamagotchi = new Tamagotchi({
            name,
            assetUrl,
            _user: req.user.id
        });

        try {

            const newTamagotchi = await tamagotchi.save();

            const user = await req.user.save();

            return res.send(newTamagotchi);
        } catch (err) {
            return res.status(422).send(err);
        }

    });

    app.get('/api/tamagotchi', requireLogin, async (req, res) => {
        const tamagotchi = await Tamagotchi.findOne({ _user: req.user.id }).select();

        return res.send(tamagotchi);
    });



};