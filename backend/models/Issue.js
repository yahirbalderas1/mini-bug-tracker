const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 120 },
  description: { type: String, maxlength: 1000 },
  priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
  status: { type: String, enum: ["open", "in_progress", "done"], default: "open" },
}, { timestamps: true });

module.exports = mongoose.model("Issue", issueSchema);
