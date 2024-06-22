const reaction =document.querySelector('.reaction');
const memory =document.querySelector('.memory');
const verbal =document.querySelector('.verbal');
const visual =document.querySelector('.visual');
document.addEventListener((e)=>onload,{
fetch('data.json')
.then(response =>(response.json))
.then(data =>(data))
.catch(console.log('data not found'))
})