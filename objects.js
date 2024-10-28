// const cars = [{marka:"BMW", model: "M2", opony:{rozmiar: 16, rodzaj: "zimowa"}},
//     {marka:"BMW", model: "M3", opony:{rozmiar: 16, rodzaj: "letnie"}},
//     {marka:"Audi", model: "A3", opony:{rozmiar: 16, rodzaj: "letnie"}} ]
//     console.log(cars);

// for(let i=0; i<=cars.length; i++){
//     if(cars[i].opony.rodzaj=="letnie")
//         cars[i].opony.rodzaj="zimowe"
//     // console.log(cars[i].model);

// }
// // console.log([0].opony.rodzaj);

// // console.log(cars[0].model);
// console.log(cars);


async function getData(){

const res = await fetch("https://restcountries.com/v3.1/all")
const data = await res.json()
console.log(data);
return data
}
// getData()

async function nazwy(){
    const kraje = await getData();
    console.log(kraje);
    for( let i in kraje){
        // if(kraje[i].continents[0]=="Europe")
        // if(kraje[i].continents[0,1])
        // console.log(kraje[i].name.common);
        const div = document.createElement("div")
        div.style.border = "1px solid black"
        div.style.height = "400px"
        div.style.width = "200px"
        div.style.backgroundColor = "grey"

        const img = document.createElement("img")
        img.setAttribute("src", kraje[i].flags.png)
        img.style.height = "150px"
        img.style.width = "200px"
        div.appendChild(img)
        

        const p = document.createElement("p")
        p.textContent = kraje[i].name.common
        div.appendChild(p)
        document.querySelector("body").appendChild(div)

        const p1 = document.createElement("p")
        p1.textContent = kraje[i].capital
        div.appendChild(p1)
        document.querySelector("body").appendChild(div)
        
        const p2 = document.createElement("p")
        p2.textContent = kraje[i].region
        div.appendChild(p2)
        document.querySelector("body").appendChild(div)
        
        const p3 = document.createElement("p")
        p3.textContent = kraje[i].continents
        div.appendChild(p3)
        document.querySelector("body").appendChild(div)
        
        
    
    }
}
nazwy()
// const body = document.querySelector("body")
// const ul = document.createElement("ul") || document.querySelector("ul")
// const li = document.createElement("li");
// ul.appendChild(li)
// body.appendChild(ul)
