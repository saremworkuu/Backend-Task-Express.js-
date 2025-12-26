function isNonEmptyString(val) {
  return typeof val === 'string' && val.trim().length > 0;
}

function isValidEmail(val) {
  if (!isNonEmptyString(val)) return false;
  // basic check
  return /.+@.+\..+/.test(val);
}

function validateContactPayload(payload) {
  const errors = [];

  if (!isNonEmptyString(payload.name)) {
    errors.push({ field: 'name', message: 'name is required' });
  }
  if (!isValidEmail(payload.email)) {
    errors.push({ field: 'email', message: 'email must be valid' });
  }
  if (payload.message != null && !isNonEmptyString(payload.message)) {
    errors.push({ field: 'message', message: 'message must be non-empty when provided' });
  }

  return { valid: errors.length === 0, errors };
}

module.exports = { validateContactPayload };
