const { validateContactPayload } = require('../models/contactModel');

function postContact(req, res) {
  const payload = req.body || {};
  const { valid, errors } = validateContactPayload(payload);

  if (!valid) {
    return res.status(400).json({ success: false, message: 'Validation failed', errors });
  }

  // Simulate storing and echo back
  const stored = { id: Date.now().toString(), ...payload };
  return res.status(201).json({ success: true, route: 'contact:create', data: stored });
}

module.exports = { postContact };
