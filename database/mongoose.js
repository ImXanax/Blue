const mongoose = require('mongoose');
require('dotenv').config();
module.exports ={
    init: () => {
      const dbOptions = {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          autoIndex: false,
          connectTimeoutMS:10000,
          family:4
      };

      mongoose.connect(process.env.BLUE_SRV, dbOptions)
      mongoose.set('useFindAndModify',false);
      mongoose.Promise = global.Promise;
      
      mongoose.connection.on('connected',()=>{
          console.log('🟢  Connected to DB');
      });
      mongoose.connection.on('disconnected',()=>{
          console.log('Bot Disconnected from DB');
      });
      mongoose.connection.on('err',(err)=>{
          console.log('There Was An ERROR with the connection to the DB: '+ err);
      });
      
    }
}