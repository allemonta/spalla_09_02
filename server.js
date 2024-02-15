const express = require("express")

const app = express()

app.get("/saluta", (req, res) => {
    const name = req.query.name
    console.log("Nome passato", name)

    res.send("Ciao " + name)
})

app.listen(8000, () => {
    console.log("App is listening on port 8000")
})