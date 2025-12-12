// ===========================
//  Load Environment Variables
// ===========================
require("dotenv").config();

const express = require("express");
const cors = require("cors");

// ===========================
//  Fetch Support (Node 18+)
// ===========================
let fetchFn;
try {
  fetchFn = fetch; // Node 18+
} catch (e) {
  fetchFn = require("node-fetch"); // Node <=16 fallback
}

const app = express();

// ===========================
//  CORS CONFIG (IMPORTANT)
// ===========================
//
// 🚨 CHANGE THIS BEFORE PRODUCTION:
// Replace YOUR_FRONTEND_DOMAIN with your actual domain.
// Example: "https://resometa.in"
// You can put multiple domains in an array.
//
app.use(cors({
  origin: ["http://localhost:5173", "https://resometa.com"],
  methods: ["GET", "POST"],
}));

app.use(express.json());

// ===========================
//  Load Google Script URL
// ===========================
const SCRIPT_URL = process.env.SCRIPT_URL;

if (!SCRIPT_URL) {
  console.error("❌ ERROR: SCRIPT_URL missing from .env file");
  process.exit(1);  // Prevent server from running in production
}

// ===========================
//  HEALTH CHECK ENDPOINT
// ===========================
app.get("/", (req, res) => {
  res.json({ status: "OK", message: "Backend is running smoothly" });
});

// ===========================
//  CONTACT FORM ROUTE
// ===========================
app.post("/contact", async (req, res) => {
  try {
    console.log("➡️ Incoming request:", req.body);

    // Forward request to Google Script
    const response = await fetchFn(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    console.log("⬅️ Apps Script Response:", text);

    // Try JSON response — if not JSON, return raw text
    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      data = { raw: text };
    }

    return res.json({
      success: true,
      scriptResponse: data,
    });

  } catch (err) {
    console.error("❌ SERVER ERROR:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// ===========================
//  START THE SERVER
// ===========================
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running in ${process.env.NODE_ENV} mode`);
  console.log(`🚀 Listening on port ${PORT}`);
});
