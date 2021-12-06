const express = require("express")
const mongoose = require("mongoose")
const EmployeeRouter = require("./routes/EmployeeRoutes.js")

const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://yookyung:<baik0100>@cluster0.86m5y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(EmployeeRouter)

app.listen(8080, () => {
    console.log("Server running at http://localhost:8080/")
})