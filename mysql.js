const typeorm = require("typeorm");
const path = require("path");

const dataSource = new typeorm.DataSource({
    type: "mysql",
    host: "localhost",
    port: ....,
    username: "....",
    password: "....",
    database: "....",
    synchronize: true,
    logging : true,
    entities: [path.join(__dirname, "./", "entities/*.js")],
})

module.exports = dataSource;
