const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.set("view engine", "ejs")



app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")

})
app.post("/", function (req, res) {
    var age = req.body.age;
    if (age >= 90) {
        res.render("fulltime")
    }
    else if (age <= 0) {
        res.render("newborn", { age: age })
    }
    else {
        lifeInDays = (90 * 365) - (age * 365);
        lifeInWeeks = (90 * 52) - (age * 52);
        lifeInMonths = (90 * 12) - (age * 12);
        res.render("output", { Days: lifeInDays, Weeks: lifeInWeeks, Months: lifeInMonths, age: age })
    }
    console.log(req.body)
})

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000")
})
