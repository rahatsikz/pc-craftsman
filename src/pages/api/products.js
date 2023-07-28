const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.htrvoxc.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );

    const productCollection = client.db("pcCraft").collection("products");
    const featuredCollection = client.db("pcCraft").collection("featured");
    if (req.method === "GET") {
      // Check if a specific product ID is provided
      const id = parseInt(req.query.id);

      const category = req.query.category;

      if (id) {
        const result = await productCollection.find({ id: id }).toArray();
        res.send({ success: true, status: 200, data: result });
      } else if (category) {
        const result = await productCollection
          .find({ category: category })
          .toArray();
        res.send({ success: true, status: 200, data: result });
      } else {
        // Get all products if no specific ID is provided
        const result = await productCollection.find({}).toArray();
        res.send({ success: true, status: 200, data: result });
      }
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;
