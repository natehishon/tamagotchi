const mongoose = require('mongoose');
const { Schema } = mongoose;

const tamagotchiSchema = new Schema({
    name: String,
    assetUrl: String,
    pets: {type: Number, default: 0},
    meals: {type: Number, default: 0},
    clean: {type: Number, default: 0},
    sleep: {type: Boolean, default: false},
    wake: {type: Boolean, default: true},
    status: {type: String, default: "ALIVE"},
    _user: {type: Schema.Types.ObjectId, ref: 'User'}

});

mongoose.model('tamagotchis', tamagotchiSchema);


