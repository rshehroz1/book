const express = require("events")
const app = express()

PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`connect server ${PORT}`);
})