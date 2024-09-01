
const icon1 =document.querySelector('#icon1');
const name1 =document.querySelector('#name1');
const marks1 =document.querySelector('#marks1');

const icon2 =document.querySelector('#icon2');
const name2 =document.querySelector('#name2');
const marks2 =document.querySelector('#marks2');

const icon3 =document.querySelector('#icon3');
const name3 =document.querySelector('#name3');
const marks3 =document.querySelector('#marks3');

const icon4 =document.querySelector('#icon4');
const name4 =document.querySelector('#name4');
const marks4 =document.querySelector('#marks4');
// document.addEventListener("load",{
// fetch("data.json").then(response =>(response.json))
// .then(data =>(console.log(data)))
// .catch(console.log('data not found'))
// })
fetch ("./data.json")
.then(res=>res.json())
.then(
    data=>{
        icon1.textContent=` ${ data[0].icon}`;
         name1.textContent=` ${ data[0].category}`
         marks1.textContent=` ${ data[0].score}/100`;

         icon2.textContent=` ${ data[1].icon}`;
         name2.textContent=` ${ data[1].category}`
         marks2.textContent=` ${ data[1].score}/100`;

         icon3.textContent=` ${ data[2].icon}`;
         name3.textContent=` ${ data[2].category}`
         marks3.textContent=` ${ data[2].score}/100`;

    
    }
)
.catch((error)=>{
    console.log(error)
})