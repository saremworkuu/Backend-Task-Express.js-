function getHome(req, res) {
  res.json({ success: true, route: 'home', message: 'Welcome to the Home route!' });
}

function getAbout(req, res) {
  res.json({ success: true, route: 'about', message: 'This is a simple Express MVC example.' });
}

function getContact(req, res) {
  res.json({ success: true, route: 'contact', message: 'Contact us at support@example.com' });
}

function getTime(req, res) {
  const now = new Date();
  res.json({ success: true, route: 'time', now: now.toISOString(), epochMs: now.getTime() });
}

module.exports = { getHome, getAbout, getContact, getTime };
