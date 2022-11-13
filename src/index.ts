import { DataSource } from "typeorm"


import { config } from "dotenv"
import { Client } from "./entities/Client"
import { Banker } from "./entities/Banker"


config()


const AppDataSource = new DataSource ({
    type: "postgres",
    host: "localhost",
    port: process.env.PORT as unknown as number,
    username: "postgres",
    password: process.env.PASSWORD_DB as unknown as string,
    database: "orm",
    synchronize : true, 
    entities: [
        Client,Banker
    ],


})


const main =async () => {
    
    await AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
}


main()