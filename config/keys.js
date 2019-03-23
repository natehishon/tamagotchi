if(process.env.NODE_ENV === 'production'){

    console.log("PROD");
    module.exports = require('./prod')
} else {
    module.exports = require('./dev')
}