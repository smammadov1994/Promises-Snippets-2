const fetch = require('node-fetch')

const getStuff= async () => {
    let api1= await fetch('http://localhost:8080/')
    let api2= await fetch('http://localhost:8090/')
    let api3= await fetch('http://localhost:8095/')
    let response1 = await api1.json()
    let response2 = await api2.json()
    let response3 = await api3.json()
    return [response1,response2,response3]
}

getStuff()
.then(res=>console.log(res))
.catch(err=>console.log(err))

