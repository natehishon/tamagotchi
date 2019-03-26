module.exports = (req, res, next) => {
    if(req.tamagotchi){
        return res.status(401).send({ error: 'You have a current tamagotchi'});
    }

    next()
};
