require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const mongoEventFiles = fs.readdirSync("./src/mongoEvents").filter(file => file.endsWith(".js"));
module.exports = (client) =>{
    client.handleMongo = async () =>{
        const MONGO = process.env.BLUE_SRV;
        for (file of mongoEventFiles){
            const event = require(`../mongoEvents/${file}`);
            if (event.once){
                mongoose.connection.once(event.name,(...args) => event.execute(...args));
            }else{
                mongoose.connection.on(event.name,(...args)=> event.execute(...args));
            }
        }
        mongoose.Promise = global.Promise;
        await mongoose.connect(MONGO,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    }
} 