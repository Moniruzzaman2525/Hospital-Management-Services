

import express, { Application } from 'express'
import cors from 'cors'

const app: Application = express()
const port = 5000
app.use(express.json())
app.use(cors())

app.get('/',(req,res) => {
    res.send("server running server done")
})

export default app