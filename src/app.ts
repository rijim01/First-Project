import express, { Request, Response, Application } from 'express'
import cors from 'cors'
import { StudentRoutes } from './app/modules/students/student.routes'

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/students',StudentRoutes)

app.get('/', (req: Request, res: Response) => {
  const a = 10

  res.send(a)
})
export default app
