"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = require("./config/config");
const client = new pg_1.Pool({
    host: config_1.config.host,
    database: config_1.config.database,
    user: config_1.config.username,
    password: config_1.config.password,
});
exports.default = client;
