const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://mbpII:wd3JgzJ0aL6l2oDb@top10.brtvbaf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);