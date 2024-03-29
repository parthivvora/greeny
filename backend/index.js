const express = require("express")
const app = express()
const db = require("./utils/dbConfig")
const cors = require("cors");
const path = require("path");

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://192.168.29.53:3000"],
}))

app.use("/api", require("./routes/index"))

app.use(express.static(path.join(__dirname, "/public")))

db.on("error", console.error.bind(console, "Connection Error :- "))
db.once("open", (error, response) => {
    if (error) throw Error()
    console.log("Connection success with DB...!")
    app.listen(process.env.PORT, () => {
        console.log(`Server start on ${process.env.PORT} port...!`);
    })
})
