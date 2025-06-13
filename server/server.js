import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";

// Create Express App and HTTP Server
const app = express();
const server = http.createServer(app);

// Middleware Setup
app.use(express.json({ limit: "4mb" }));
app.use(cors());

// Simple API route
app.use('/api', (req, res) => {
    res.send("Hello Alok");
});
app.use('/', (req, res) => {
    res.send("Home Page");
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log("Server is Running on port", PORT);
});

// Optional: Error handling
server.on('error', (err) => {
    console.error("Server error:", err);
});