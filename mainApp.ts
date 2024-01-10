import { Application, Request, Response } from "express"
export const mainApp = (app: Application) {
    try {
        app.get("/", (req: Request, res: Response) => {
            try {
                return res.status(200).json({
                    message: "welcome to todo api"
                })
            } catch {
                return res.status(404).json({
                    message: "error viewing api"
                })
            }
        })
    } catch {
        
    }
}