// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myfunction)

var UserData=JSON.parse(localStorage.getItem("schedule"))||[]

function myfunction(){
    event.preventDefault();

    var data={
        Number:masaiForm.matchNum.value,
        TeamA:masaiForm.teamA.value,
        TeamB:masaiForm.teamB.value,
        Date:masaiForm.date.value,
        Venue:masaiForm.venue.value,
    }
    UserData.push(data)
    // console.log(UserData)
    localStorage.setItem("schedule",JSON.stringify(UserData))
}



