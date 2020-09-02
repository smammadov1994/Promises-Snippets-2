const fetch = require('node-fetch')



const getStuff= async (url) => {
    let api1= await fetch(url)
    let response1 = await api1.json()
    return response1
}

let array=[getStuff('http://localhost:8080'),getStuff('http://localhost:8090'),getStuff('http://localhost:8095')]
Promise.all(array).then((res)=>console.log(res))

