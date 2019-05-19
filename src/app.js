import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import routes from './routes'
import errorHandle from './middlewares/errorHandler'

const app = express()
app.use(routes)
app.use(errorHandle)
app.use(express.json())
app.use(helmet())
app.use(morgan('dev'))

export default app
