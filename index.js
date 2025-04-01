const express = require("express");
const app = express();

const port = process.env.PORT || 5500

app.listen(port, ()=>{
    console.log("Server is listening on port " + port);
});

const quote_api_url = "https://zenquotes.io/api/quotes";

async function fetchQuote() {
    let quote1;
    try{
        response = await fetch(quote_api_url);
        let data = await response.json();
        quote1 = data[0].q;
        console.log(quote1);

    }catch(err){
        console.error(err);
    }
    return quote1;  
}
//const quote = fetchQuote();

app.get("/", async(req, res)=>{
    let q = await fetchQuote();
    res.send("Quote of the day is ... " + q);
});

