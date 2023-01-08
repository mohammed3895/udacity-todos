import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import todos_route from './handlers/todos.handler'

const app: express.Application = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req: express.Request, res: express.Response)=>{
    res.json("main page")
})

todos_route(app)

app.listen(port)

export default app