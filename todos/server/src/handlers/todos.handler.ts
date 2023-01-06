import express from 'express'
import { Todos, TodosList } from '../models/todos'

const store = new TodosList()

const index = async (_req: express.Request, res: express.Response): Promise<void> => {
    try {
        const todos = await store.index()
        res.json(todos)
    } catch (err) {
        res.json(err)
    }
}

// SHOWING SINGLE PRODUCT
const show = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const todos = await store.show(req.params.id)
        res.json(todos)
    } catch (err) {
        res.json(err)
    }
}

// CREATE NEW PRODUCT
const create = async (req: express.Request, res: express.Response): Promise<void> => {
    const todoItem: Todos = {
        description: req.body.description as string
    }

    if (!todoItem.description) {
        res.json({ messege: 'please enter what to do' })
    }

    // CREATE NEW PRODUCT IF TOKEN IS VALID
    try {
        const newTodo: Todos = await store.create(todoItem)
        res.json(newTodo)
    } catch (err) {
        res.status(401)
        res.json(err)
    }
}

// UPDATE PRODUCT
const update = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const updated = await store.update({
            id: parseInt(req.params.id as string),
            description: req.body.description as string
        })
        res.json(updated)
    } catch (err) {
        res.json(err)
    }
}

// DELETE PRODUCT
const remove = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const removed = await store.delete(req.params.id)
        res.json(removed)
    } catch (err) {
        res.json(err)
    }
}



// PRODUCTS ROUTES
const todos_route = (app: express.Application) => {
    app.get('/todos', index)
    app.get('/todos/:id', show)
    app.post('/todos', create)
    app.put('/todos/:id', update)
    app.delete('/todos/:id', remove)
}

export default todos_route
