const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");
require("dotenv").config();

app.use(cors());

const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");
const verifyTokenRoutes = require("./routes/verifyToken");

app.use(express.json());

// MongoDB connection
const uri = `mongodb+srv://${process.env.MONGO_ADMIN}:${process.env.MONGO_PASSWORD}@cluster0.ledvh.mongodb.net/myDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1, 
    strict: true,
    deprecationErrors: true,
  },
  tls: true, // Use TLS for secure connection
});

async function run() {
  try {
    // Connect the client to the MongoDB cluster
    await client.connect();
    const db = client.db("Cluster0"); // Choose your database here

    console.log("Connected to MongoDB!");

    // Attach the database instance to the request object for route access
    app.use((req, res, next) => {
      req.db = db;
      next();
    });

    // Routes
    app.use("/register", registerRoutes);
    app.use("/login", loginRoutes);
    app.use("/api/tokenVerify", verifyTokenRoutes);

    // Default API route
    app.get("/api", (req, res) => {
      res.json({ users: ["user1", "user2", "user3"] });
    });

    // Start the server only after successfully connecting to the database
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
}

run().catch(err => console.error(err));
