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

// Default API route
app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2", "user3"] });
});

// MongoDB connection
const uri = `mongodb+srv://${process.env.MONGO_ADMIN}:${process.env.MONGO_PASSWORD}@cluster0.ledvh.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  tls: true, // Use TLS for secure connection
  tlsInsecure: true, // Allow insecure connections (for testing purposes)
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Ping the MongoDB server to check the connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. Successfully connected to MongoDB!");

    // Start the Express server only after successful MongoDB connection
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    console.error("Stack Trace:", error.stack);
    process.exit(1); // Exit if connection fails
  }
}

// Call the run function
run().catch((err) => console.error("Failed to run MongoDB connection:", err));

// Routes for register, login, and token verification
app.use("/register", registerRoutes);
app.use("/login", loginRoutes);
app.use("/api/tokenVerify", verifyTokenRoutes);
