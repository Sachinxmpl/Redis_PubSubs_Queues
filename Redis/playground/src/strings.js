const redisclient = require("./client.js")


async function playground(){
            // await redisclient.set("student:2","sachin")
            // await redisclient.expire("student:2",10);
            const ans = await redisclient.get("student:2");

            console.log(ans) ; 

            
}
playground();