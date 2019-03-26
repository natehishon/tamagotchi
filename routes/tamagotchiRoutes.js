const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireAlive = require('../middlewares/requireAlive');

const Tamagotchi = mongoose.model('tamagotchis');

module.exports = app => {
    app.post('/api/tamagotchi', requireLogin, async (req, res) => {

        const {name, assetUrl} = req.body;

        const tamagotchi = new Tamagotchi({
            name,
            assetUrl,
            _user: req.user.id
        });

        try {
            await tamagotchi.save();
            await req.user.save();

            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }




    });


};