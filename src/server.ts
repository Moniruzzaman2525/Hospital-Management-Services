

import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
    try {
        await mongoose.connect(config.database_url as string)
        app.listen(5000, ()=> {
            console.log('Server running successfully');
            
        })
    } catch (error) {
        console.log(error);
        
    }
}

main()