function postEcho(req, res) {
  const body = req.body || {};
  res.json({ success: true, route: 'echo', youSent: body });
}

module.exports = { postEcho };
