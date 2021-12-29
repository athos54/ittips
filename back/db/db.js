
// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://doojeesh3A:<password>@cluster0.2aatz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)

module.exports = {
  mongoose
}
