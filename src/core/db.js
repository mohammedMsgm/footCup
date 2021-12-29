import  mongoose  from "mongoose";
import { init } from "./init.js";

const username = 'msgm'
const password = 'msgm'

const dbURI = `mongodb+srv://${username}:${password}@cluster0.ppgqj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(dbURI).then(() => {
    init().then(()=> console.log('the data base is intiated'))
}).catch(() => console.log('not initiated'));
mongoose.connection.on("connected", () => {
    console.log("data base is connected")

});
mongoose.connection.on("error", () => {
    console.log("data base is connected")

});
mongoose.connection.on("error", err => {
    console.log("connction error")

});
mongoose.connection.on("disconnected", () => {
    console.log("data base is disconnected")

});
process.on("SIGINT", () => {
    mongoose.connection.close(() =>{
        console.log('connection is stopped');
        process.exit(0)
    })
})


