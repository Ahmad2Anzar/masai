
let country=document.querySelector('button')
let container=document.getElementById("container")
let sort=document.getElementById("sort")
let dat;

function showdata(data)
{          container.innerHTML=''
    dat.forEach((e)=>
    {
        let div=document.createElement("div")
        div.setAttribute("class","cards")

        let name=document.createElement('p')
        name.innerHTML=(`<b>Name:</b> ${e.country}`)

        
        let rank=document.createElement('p')
        rank.innerHTML=(`<b>Rank:</b> ${e.Rank}`)

        
        let pop=document.createElement('p')
        pop.innerHTML=(`<b>Population:</b> ${e.population}`)

        div.append(name,rank,pop)
        container.append(div)
    })
}

let getcountry=async()=>
{
    let res=await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")
     let data= await res.json()
     dat=data.data
     country.style.display="none"
     sort.style.display="block"
    showdata(dat)
    
}

function sorting()
{
    dat.sort(function(a,b)
    {
       return a.population-b.population
    })
    showdata(dat)

}

country.addEventListener("click",getcountry)
sort.addEventListener("click",sorting)
