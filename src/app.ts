

import express, { Application } from 'express'
import cors from 'cors'
import router from './app/routes'

const app: Application = express()
const port = 5000
app.use(express.json())
app.use(cors())

app.get('/',(req,res) => {
    res.send("server running server done")
})

app.use("/api/v1",router)

export default app