"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosList = void 0;
const database_1 = __importDefault(require("../database"));
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize = new sequelize_typescript_1.Sequelize("postgres://postgres:pass123456@database-1.cu0xr9ccvyp4.us-east-1.rds.amazonaws.com:5432/postgres");
class TodosList {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'SELECT * FROM todos';
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`cannot get todos`);
            }
        });
    }
    // CRUD FUNCTIONALTY
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT description FROM todos WHERE id = ($1)';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`cannot get todo ${id}. Error: ${err}`);
            }
        });
    }
    // CREATE SINGLE OBJECT
    create(t) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'INSERT INTO todos (description) VALUES ($1) RETURNING *';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [t.description]);
                const todoItem = result.rows[0];
                conn.release();
                return todoItem;
            }
            catch (err) {
                throw new Error(`cannot create todo ${err}`);
            }
        });
    }
    // UPATE DATA FOR SINGLE Todo
    update(t) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'UPDATE todos SET description = $2 WHERE id = $1';
                const result = yield conn.query(sql, [t.id, t.description]);
                const todo = result.rows[0];
                conn.release();
                return todo;
            }
            catch (err) {
                throw new Error(`Can not update todo ${err}`);
            }
        });
    }
    // DELETE SINGLE OBJECT
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'DELETE FROM todos WHERE id=($1)';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [id]);
                const todoItem = result.rows[0];
                conn.release();
                return todoItem;
            }
            catch (err) {
                throw new Error(`Could not delete user ${id}. Error: ${err}`);
            }
        });
    }
}
exports.TodosList = TodosList;
