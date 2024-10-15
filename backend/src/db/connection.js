const mongoose = require('mongoose');



module.export = async function () {
    try {
        let cnn = await mongoose.connect('mongodb+srv://tanu:TANUkaran@tanudb.vevem7h.mongodb.net/');
        console.log('Successfully connected to database');
    } catch (error) {
        console.log('database connection error', error);
    }
};