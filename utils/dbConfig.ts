import { Mongoose, connect } from "mongoose";

const URL: string = process.env.DATABASE_URL!

export const dbConfig = async () => {
    try {
        return connect(URL).then(() => {
            console.log("Database connected! ....")
        })
    } catch (error) {
        return (error)
    }
}