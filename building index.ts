import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, ()=> {
    console.log(`server is running in port ${PORT}`)
});

