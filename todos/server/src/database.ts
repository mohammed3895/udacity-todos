import { Pool } from 'pg'
import { config } from './config/config'


const client = new Pool({
    host: config.host,
    database: config.database,
    user: config.username,
    password: config.password,
})

export default client
