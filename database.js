// episode 13 dbconnection
const { MongoClient } = require("mongodb");
const url ="mongodb+srv://dbLanson:123456l@cluster0.nztauop.mongodb.net/"

const client = new MongoClient(url);

const dbName ="HelloWorld";



async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("people");

// const data = {name:"Lanson", age:30, city:"New York"};
//   // Create
//   const insertResult = await collection.insertOne(data);
//   console.log("Inserted documents =>", insertResult);

  // Read
  const findResult = await collection.find({name:"lanson"}).count();
console.log("Found documents =>", findResult);
  return "done.";


}


main()
.then (console.log)
.catch(console.error)
.finally(() => client.close());

