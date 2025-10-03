const Issue = require("../models/Issue");

exports.createIssue = async (req, res) => {
  try {
    console.log("Body recibido:", req.body); 

    const { title, description, priority, status } = req.body;

    if (!title || title.length < 3 || title.length > 120) {
      return res.status(400).json({ error: "Title inválido" });
    }

    const issue = await Issue.create({
      title,
      description,
      priority: priority || "medium",
      status: status || "open",
    });

    return res.status(201).json(issue);
  } catch (error) {
    console.error("Error creando issue:", error);
    return res.status(500).json({ error: "Error al crear issue" });
  }
};


// Listar con filtros
exports.getIssues = async (req, res) => {
  try {
    const { status, priority, title, page = 1, limit = 5 } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (priority) filter.priority = priority;
    if (title) filter.title = { $regex: title, $options: "i" };

    const issues = await Issue.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Issue.countDocuments(filter);

    res.json({ data: issues, total, page: Number(page), limit: Number(limit) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar Issue
exports.updateIssue = async (req, res) => {
  try {
    let issue = await Issue.findById(req.params.id);
    if (!issue) return res.status(404).json({ error: "no encontrado" });

    if (issue.status === "done" && req.body.title && req.body.title !== issue.title) {
      return res.status(400).json({ error: "No se puede cambiar el título si el issue está en done" });
    }

    issue = await Issue.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(issue);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar Issue
exports.deleteIssue = async (req, res) => {
  try {
    const issue = await Issue.findByIdAndDelete(req.params.id);
    if (!issue) return res.status(404).json({ error: "Issue no encontrado" });
    res.json({ message: "Issue eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
