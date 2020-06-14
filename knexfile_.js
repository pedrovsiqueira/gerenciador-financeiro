module.exports = {
  test: {
    client: "pg",
    version: "9.6",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "",
      database: "gerenciador_financeiro",
    },
    migrations: {
      directory: "src/migrations",
    },
  },
};
