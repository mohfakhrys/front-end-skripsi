export default {
    username: {
      format: {
        pattern: "[a-z0-9]+",
        flags: "i",
        message: "Hanya huruf dan angka"
      },
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum: 45,
        minimum: 6,
        message: "minimal 6 karakter"
      },
    },
    password: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum: 30,
        minimum: 6,
        message: "minimal 6 karakter"
      }
    }
  };
  