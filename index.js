const express = require("express");
const app = express();



app.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            naem: "Snadat Hossain",
            age: 21
        },
        {
            id: 2,
            naem: "Korim Islam",
            age: 30
        },
        {
            id: 3,
            naem: "Rohim Mia",
            age: 30
        },
    ])
})

app.listen(5500, () =>
    console.log("app is tuning at 5500 Port"))