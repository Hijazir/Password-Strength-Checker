const passwordUtils = require('../utils/passwordUtils');

exports.checkStrength = (req, res) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }
  const result = passwordUtils.checkStrength(password);
  res.json(result);
};

exports.generatePassword = (req, res) => {
  const { length = 12, uppercase = true, numbers = true, symbols = true } = req.body;
  const password = passwordUtils.generatePassword({ length, uppercase, numbers, symbols });
  res.json({ password });
};
