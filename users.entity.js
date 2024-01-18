const typeorm = require("typeorm");

module.exports = new typeorm.EntitySchema({
    name: "Users", // Will use table name `category` as default behaviour.
    tableName: "users", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int"
        },
        name: {
            type: "varchar",
            require: true
        },
        email: {
            type: "varchar",
            require: true
        },

    },
})