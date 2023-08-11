import { check } from "express-validator";

export const validator ={
    
    registerValidator : [
        check("name").withMessage("please fill in this field").isLength({min : 8}),

        check("email").trim().toLowerCase().isEmail().normalizeEmail().withMessage("Please enter this field"),

        check("password").isLength({min : 10}).matches("./^[A-Za-z0-9 .,'!&]+$/").withMessage("password doesnt pass")
    ],

   signinValidator : [

        check("email").isEmail().withMessage("Please enter your email"),

        check("password").withMessage("password doesnt pass")
    ],
}