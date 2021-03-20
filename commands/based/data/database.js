module.exports = {
    name: 'database',
    description: 'database',
    async execute(message, args) {
        const Database = require("@replit/database");

        const db = new Database();

    },
};
