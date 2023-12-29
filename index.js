const express = require("express")
const app = express()
const db = require("./utils/dbConfig")
const cors = require("cors");

app.use(express.json())
app.use(cors({ origin: "*", credentials: true }))

db.on("error", console.error.bind(console, "Connection Error :- "))
db.once("open", (error, response) => {
    if (error) throw Error()
    console.log("Connection success with DB...!")
    app.listen(process.env.PORT, () => {
        console.log(`Server start on ${process.env.PORT} port...!`);
    })
})
