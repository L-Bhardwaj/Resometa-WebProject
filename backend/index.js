// ===========================
// Load Environment Variables
// ===========================
require("dotenv").config();

const express = require("express");
const cors = require("cors");

// ===========================
// Fetch Support (Node 18+)
// ===========================
let fetchFn;
try {
  fetchFn = fetch;
} catch (e) {
  fetchFn = require("node-fetch");
}

const app = express();

// ===========================
// CORS CONFIG
// ===========================
app.use(
  cors({
    origin: ["http://localhost:5173", "https://resometa.com"],
    methods: ["GET", "POST", "OPTIONS"],
  })
);

app.use(express.json());

// ===========================
// ENV VARIABLES
// ===========================
const SCRIPT_URL = process.env.SCRIPT_URL; // contact form
const VIDEO_EDITING_QUOTATION_URL = process.env.VIDEO_EDITING_QUOTATION_URL; // video wizard form

if (!SCRIPT_URL || !VIDEO_EDITING_QUOTATION_URL) {
  console.error("❌ ERROR: Missing SCRIPT_URL or VIDEO_EDITING_QUOTATION_URL in .env");
  process.exit(1);
}

// ===========================
// HEALTH CHECK
// ===========================
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Resometa Backend is running smoothly",
  });
});

// ===========================
// CONTACT FORM ROUTE
// ===========================
app.post("/contact", async (req, res) => {
  try {
    const response = await fetchFn(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    return res.json({
      success: true,
      scriptResponse: data,
    });
  } catch (err) {
    console.error("❌ Contact form error:", err);
    return res.status(500).json({
      success: false,
      message: "Contact form failed",
    });
  }
});

app.post("/video-editing-quotation", async (req, res) => {
  try {
    const response = await fetch(process.env.VIDEO_EDITING_QUOTATION_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    console.log("Apps Script response:", text);

    res.json({ success: true });
  } catch (err) {
    console.error("Video quotation error:", err);
    res.status(500).json({ success: false });
  }
});


// ===========================
// OPTIONAL: SERVER-SIDE PRICE CALCULATION (if needed)
// ===========================
app.post("/video-service-pricing/calculate", (req, res) => {
  try {
    const { selections, user } = req.body;

    let total = 0;
    let breakdown = [];

    selections.forEach((item) => {
      const subtotal = item.count * item.price;
      total += subtotal;

      breakdown.push({
        type: item.type,
        category: item.category,
        count: item.count,
        subtotal,
      });
    });

    return res.json({
      success: true,
      user,
      total,
      breakdown,
    });
  } catch (error) {
    console.error("❌ Pricing Calculation Error:", error);
    return res.status(500).json({
      success: false,
      message: "Pricing calculation failed",
    });
  }
});

// ===========================
// START SERVER
// ===========================
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
