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
Object.defineProperty(exports, "__esModule", { value: true });
const todos_1 = require("../models/todos");
const store = new todos_1.TodosList();
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield store.index();
        res.json(todos);
    }
    catch (err) {
        res.json(err);
    }
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield store.show(req.params.id);
        res.json(todos);
    }
    catch (err) {
        res.json(err);
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todoItem = {
        description: req.body.description
    };
    if (!todoItem.description) {
        res.json({ messege: 'please enter what to do' });
    }
    try {
        const newTodo = yield store.create(todoItem);
        res.json(newTodo);
    }
    catch (err) {
        res.json(err);
    }
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updated = yield store.update({
            id: parseInt(req.params.id),
            description: req.body.description
        });
        res.json(updated);
    }
    catch (err) {
        res.json(err);
    }
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const removed = yield store.delete(req.params.id);
        res.json(removed);
    }
    catch (err) {
        res.json(err);
    }
});
// PRODUCTS ROUTES
const todos_route = (app) => {
    app.get('/todos', index);
    app.get('/todos/:id', show);
    app.post('/todos', create);
    app.put('/todos/:id', update);
    app.delete('/todos/:id', remove);
};
exports.default = todos_route;
