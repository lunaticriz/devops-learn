module.exports = {
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "devdb",
  entities: ["dist/**/*.entity.js"],
  synchronize: true,
};
