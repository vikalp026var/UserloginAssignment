// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectToDb = async () => {
     await mongoose.connect(process.env.MONGO_URI)
     .then((conn)=>{
        console.log(`Connected to${conn.connection.host}`);
     })
     .catch((err)=>{
          console.log(err.message);
          process.exit(1);
     })
}
  

module.exports = connectToDb;
