module.exports ={

  development: {
  client: 'pg',
  connection: {
  database: 'cluckr_db',
  username: "jdenjo",
  password: "2383Bellevue"
  },
  migrations: {
  tableName: "migrations",
  directory: "./db/migrations",
  },
  seeds: {
  directory: "./db/seeds",
  }
  },
  };
  