const api_url ="https://zenquotes.io/api/random/";

async function getapi(url)
  {
     const response = await fetch(url);
     let data = await response.json();
      console.log(data);
  }

getapi(api_url);
