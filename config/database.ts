module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "strapi_db"),
      user: env("DATABASE_USERNAME", "strapi_user"),
      password: env("DATABASE_PASSWORD", "your_password"),
      ssl: false,
    },
    debug: false,
  },
});
