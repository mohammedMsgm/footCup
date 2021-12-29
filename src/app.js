import express from "express";
import "./core/db.js";
import router from './routers/index.js'
const app = express();
const port = 3000;
app.use(express.json())
app.use('/', router)
app.listen(port, () =>{
    console.log(`server is lestening on port ${port}`)
})
