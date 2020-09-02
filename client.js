const fetch  = require('node-fetch')

const getStuff=()=>{
const array=[]
fetch('http://localhost:8080/')
.then(response=>response.json())
.then(data=>{
    
    return (
        array.push(data.secret),
        console.log(array),
        fetch('http://localhost:8090/')
    )
})
.then(response=>response.json())
.then(data=>{
    return (
        array.push(data.secret),
        console.log(array),
        fetch('http://localhost:8095/')
    )

})
.then(response=>response.json())
.then(data=>{
    return (
        array.push(data.secret),
        console.log(array)
    )

})
.catch(err=>console.log(err))
}

getStuff()