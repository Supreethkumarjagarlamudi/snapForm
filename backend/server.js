import express from 'express'
const app = express()

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server connected to port: ${process.env.PORT || 3000}`);
})

app.get("/", (req, res) => {
    res.send("API Working Successfully");
})