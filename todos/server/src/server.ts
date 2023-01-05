import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import todos_route from './handlers/todos.handler'
import { Sequelize } from 'sequelize';



const app: express.Application = express()
const port = 4000

const sequelize = new Sequelize(
  "postgres://postgres:pass123456@database-1.cu0xr9ccvyp4.us-east-1.rds.amazonaws.com:5432/postgres"
);

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (req: express.Request, res: express.Response)=>{
    res.json("main page")
})

todos_route(app)

app.listen(port)

export default app