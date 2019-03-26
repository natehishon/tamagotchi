module.exports = (req, res, next) => {
    if(req.tamagotchi.status != "ALIVE"){
        return res.status(401).send({ error: 'Your tamagotchi didn\'t make it!'});
    }

    next()
};
