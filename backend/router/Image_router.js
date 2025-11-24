import Image_generator from '../controller/Image_generate.js'

import express from 'express'
const router = express.Router()


router.post("/image",Image_generator)


export default router