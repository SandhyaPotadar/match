// write js code here corresponding to matches.html

var UserData=JSON.parse(localStorage.getItem("schedule"))
// console.log(UserData);

 var favouritesArr=JSON.parse(localStorage.getItem("favourites"))||[]

function filter(){
    var serch=document.querySelector("#filtervenue").value;
    var filist=UserData.filter(function(el){
        return el.venue==serch
    })
    display(filist)
}
display(UserData)

function display(UserData){
    document.querySelector("tbody").innerHTML=" "
    UserData.forEach(function(el){

        UserData.forEach(function(el){
            var tr = document.createElement("tr")
        
            var td1=document.createElement("td")
            td1.innerText=el.Number
        
            var td2=document.createElement("td")
            td2.innerText=el.TeamA
        
            var td3=document.createElement("td")
            td3.innerText=el.TeamB
        
            var td4=document.createElement("td")
            td4.innerText=el.Date
        
            var td5=document.createElement("td")
            td5.innerText=el.Venue
        
            var td6=document.createElement("td")
            td6.innerText="favourites"
            td6.addEventListener("click",function(){
                favfun(el)
            })
           
        
            tr.append(td1,td2,td3,td4,td5,td6)
            //  console.log(tr)
             document.querySelector("tbody").append(tr)
           
        
        })

    })
}

 




function favfun(el){
    favouritesArr.push(el)
    localStorage.setItem("favourites",JSON.stringify(favouritesArr))
}








