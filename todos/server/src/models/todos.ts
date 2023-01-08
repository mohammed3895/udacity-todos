import client from '../database'



export type Todos = {
    id?: number
    description?: string
}

export class TodosList {
    async index(): Promise<Todos[]> {
        try {
            const conn = await client.connect()
            const sql = 'SELECT * FROM todos'
            const result = await conn.query(sql)
            conn.release()
            return result.rows
        } catch (err) {
            throw new Error(`cannot get todos`)
        }
    }

// CRUD FUNCTIONALTY
    async show(id: string): Promise<Todos> {
        try {
            const sql =
                'SELECT description FROM todos WHERE id = ($1)'
            const conn = await client.connect()
            const result = await conn.query(sql, [id])
            conn.release()
            return result.rows[0]
        } catch (err) {
            throw new Error(`cannot get todo ${id}. Error: ${err}`)
        }
    }

    // CREATE SINGLE OBJECT
    async create(t: Todos): Promise<Todos> {
        try {
            const sql =
                'INSERT INTO todos (description) VALUES ($1) RETURNING *'
            const conn = await client.connect()
            const result = await conn.query(sql, [t.description])
            const todoItem = result.rows[0]
            conn.release()
            return todoItem
        } catch (err) {
            throw new Error(`cannot create todo ${err}`)
        }
    }

    // UPATE DATA FOR SINGLE Todo
    async update(t: Todos): Promise<Todos> {
        try {
            const conn = await client.connect()
            const sql =
                'UPDATE todos SET description = $2 WHERE id = $1'
            const result = await conn.query(sql, [t.id, t.description])
            const todo = result.rows[0]
            conn.release()
            return todo
        } catch (err) {
            throw new Error(`Can not update todo ${err}`)
        }
    }

    // DELETE SINGLE OBJECT
    async delete(id: string): Promise<Todos> {
        try {
            const sql = 'DELETE FROM todos WHERE id=($1)'
            const conn = await client.connect()
            const result = await conn.query(sql, [id])
            const todoItem: Todos = result.rows[0]
            conn.release()
            return todoItem
        } catch (err) {
            throw new Error(`Could not delete user ${id}. Error: ${err}`)
        }
    }

}