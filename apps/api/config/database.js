const { default: mongoose } = require('mongoose');

// Mongo DB Connections
mongoose.connect('mongodb://localhost:27017/ajas').then(response=>{
    console.log('MongoDB Connection Succeeded.')
}).catch(error=>{
    console.log('Error in DB connection: ' + error)
});