const express = require("express");
const app = express();
const port = 3000;

const userRouter=require("./src/routes/user")
const database=require("./src/databases/connection")
app.use(express.urlencoded({ extended: true }));

app.use("/api/",userRouter)

const initapp = async () => {
    console.log("testing database connection");
    try {
        await database.authenticate()
        console.log("berhasil");
        app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
);
    } catch (error) {
        console.error("tidak bisa connect : ", error.original)
    }
}
initapp()
