"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const todos_handler_1 = __importDefault(require("./handlers/todos.handler"));
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
const sequelize = new sequelize_typescript_1.Sequelize("postgres://postgres:pass123456@database-1.cu0xr9ccvyp4.us-east-1.rds.amazonaws.com:5432/postgres");
class Todo extends sequelize_1.Model {
}
Todo.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: "Todo",
});
app.use((0, cors_1.default)());
app.use(express_1.default.static('public'));
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.json("main page");
});
(0, todos_handler_1.default)(app);
app.listen(port);
exports.default = app;
