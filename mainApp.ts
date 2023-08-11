import express, { Application, NextFunction, Request, Response } from "express"
import cors from "cors"
import { errorHandler } from "./error/errorHandler"
import { HTTP, mainError } from "./error/mainError"
import user from "./router/userRouter"
import post from "./router/postRouter"

export const mainApp = (app : Application) =>{
    app.use(cors(
        {
            origin : "*",
            methods : ["POST", "GET", "DELETE", "PATCH"]
        }
    ))
    app.use(express.json())
    
    app.get("/", (req: Request, res : Response) =>{
        try {
            return res.status(200).json({
                message : "welcome Home"
            })
        } catch (error) {
            return res.status(404).json({
                message : "an error has occured"
            })
            
        }
    })

    app.use("/api/v1/", user)
    app.use("/api/v1/", post)

    app.all("*", (req : Request, res : Response, next : NextFunction)=>{
        next(
            new mainError({
                name : "Router Error",
                message : `This Error is coming up because the ${req.originalUrl} url isnt correct!!!`,
                status : HTTP.BAD_REQUEST,
                success : false
            })
        )

    })
    app.use(errorHandler)
}