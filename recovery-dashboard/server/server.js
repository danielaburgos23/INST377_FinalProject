import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

app.get("/", (req, res) => {
  res.json({ message: "Recovery Tracker API running" });
});

app.get("/recovery-logs", async (req, res) => {
  const { data, error } = await supabase
    .from("recovery_logs")
    .select("*")
    .order("date", { ascending: true });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

app.post("/recovery-logs", async (req, res) => {
  const { data, error } = await supabase
    .from("recovery_logs")
    .insert([req.body])
    .select();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json({
    message: "Recovery log saved to Supabase",
    data,
  });
});

app.get("/validate-email", async (req, res) => {
  const email = req.query.email;

  try {
    const response = await axios.get("http://apilayer.net/api/check", {
      params: {
        access_key: process.env.MAILBOXLAYER_KEY,
        email,
      },
    });

    res.json({
      valid: response.data.format_valid,
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({
      error: "Email validation failed",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});