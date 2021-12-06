const mongoose = require('mongoose')

var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

const EmployeeSchema = new mongoose.Schema({
    employeeId: {
        type: Number,
        required: true,
        validate(v) {
            if(v == null) throw new Error("Please enter employee ID")
        }
    },
    firstName: {
        type: String,
        required: true,
        validate(v) {
            if(v == "") throw new Error("Please enter the first name")
        }
    },
    lastName: {
        type: String,
        required: true,
        validate(v) {
            if(v == "") throw new Error("Please enter the last name")
        }
    },
    emailAddress: {
        type: String,
        required: true,
        validate(email){
            if(!emailRegex.test(email)) throw new Error("Please enter a email address")
        }
    }
})

const Employee = mongoose.model("employee", EmployeeSchema)
module.exports = Employee