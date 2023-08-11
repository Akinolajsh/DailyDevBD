import express from "express"
import { getUser, getUsers, registerUser, signInUser } from "../controller/userController"
import {upload} from "../config/multer"
import { check} from "express-validator"

const router = express.Router()

router.route("/register").post(upload, registerUser)

router.route("/sign-in").post(
    [
    check("email").trim().toLowerCase().isEmail().normalizeEmail().withMessage("this email format is incorrect"),

    check("password").isLength({min : 8}).withMessage("Enter your password")
    ],
     signInUser)

router.route("/get-users").get(getUsers)
router.route("/:userID/user").get(getUser)

export default router