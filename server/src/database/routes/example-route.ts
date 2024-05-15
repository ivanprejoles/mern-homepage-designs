import express, { Request, Response } from 'express'
import { example } from '../controller/example-controller'

const router = express.Router()

router.post('/example', example)

router.post('/example2', (req: Request, res: Response) => {
    res.json({
        message: 'api running again'
    })
})

export default router