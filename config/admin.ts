module.exports = {
  apiToken: {
    salt: process.env.API_TOKEN_SALT || "random-secret-salt",
  },
  auth: {
    secret: process.env.ADMIN_JWT_SECRET || "random-secret-key",
  },
  settings: {
    contentTypeBuilder: {
      enabled: true, // Enable Content Type Builder in production
    },
  },
};
