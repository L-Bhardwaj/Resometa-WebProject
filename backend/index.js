require("dotenv").config();
const express = require("express");
const cors = require("cors");

// ⭐ If using Node 18+, fetch is built-in.
//    If using Node 16 or lower, install node-fetch@2:
//    npm install node-fetch@2
let fetchFn;
try {
  fetchFn = fetch; // Node 18+
} catch (e) {
  fetchFn = require("node-fetch"); // Node 16 or lower fallback
}

const app = express();
app.use(cors());
app.use(express.json());

// Load the Apps Script Web App URL
const SCRIPT_URL = process.env.SCRIPT_URL;

if (!SCRIPT_URL) {
  console.error("\n❌ ERROR: SCRIPT_URL is missing in .env file!\n");
}

app.post("/contact", async (req, res) => {
  try {
    console.log("➡️ Received request from frontend:", req.body);

    // Forward the data to Google Apps Script
    const response = await fetchFn(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });

    const text = await response.text();
    console.log("⬅️ Raw response from Apps Script:", text);

    let data = text;
    try {
      data = JSON.parse(text);
    } catch (parseErr) {
      console.warn("⚠️ Apps Script returned NON-JSON. Sending raw text.");
    }

    return res.json({
      success: true,
      scriptResponse: data
    });

  } catch (err) {
    console.error("❌ Backend Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.toString()
    });
  }
});

// Start backend
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
  // console.log("SCRIPT_URL =", SCRIPT_URL);
});
