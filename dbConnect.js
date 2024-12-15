const mongoose = require("mongoose")

// mongoose.connect("mongodb://localhost:27017/server")
// .then(()=>{
//     console.log("Database is connected");
// })
// .catch((error)=>{
//     console.log(error);
// })


async function getConnect() {
    try {
        await mongoose.connect(process.env.DB_KEY)
        console.log("Database is connected");
    } catch (error) {
        console.log(error);
    }
}

getConnect()