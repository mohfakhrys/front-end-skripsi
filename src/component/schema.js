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
        minimum: 5,
        message: "minimal 5 karakter"
      },
    },
    password: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum: 30,
        minimum: 5,
        message: "minimal 5 karakter"
      }
    }
  };
  