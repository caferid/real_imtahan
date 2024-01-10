import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import { router } from './src/router/proRouter.js'


const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()



app.use('/',router)

const url = process.env.URL
const password=process.env.PASSWORD

  mongoose.connect(url.replace("<password>",password))
  .then(()=>console.log("DB connet"))
  .catch(()=>console.log("NOT db connet"))

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})