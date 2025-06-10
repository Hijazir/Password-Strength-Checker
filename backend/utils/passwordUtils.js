// Password strength checker and generator utilities

function checkStrength(password) {
  let score = 0;
  if (!password) return { score, strength: 'Empty' };
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  let strength = 'Weak';
  if (score >= 4) strength = 'Strong';
  else if (score >= 3) strength = 'Medium';

  return { score, strength };
}

function generatePassword({ length = 12, uppercase = true, numbers = true, symbols = true }) {
  let chars = 'abcdefghijklmnopqrstuvwxyz';
  if (uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (numbers) chars += '0123456789';
  if (symbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

module.exports = { checkStrength, generatePassword };
