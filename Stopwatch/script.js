console.log("Welcome");
document.getElementById("submit").onclick = function execute() {
    document.getElementById("submit").disabled = true;
    document.getElementById("display").style.backgroundColor = "dodgerblue";
    const target = document.getElementById("datetime").value;
        let intervalId =setInterval(function updateTimier(){
        let current = new Date();
        let diff=new Date(target).getTime() - current.getTime(); // no. of ms left
        document.getElementById("days").innerText = Math.floor(diff/(1000*60*60*24));
        document.getElementById("hours").innerText = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
        document.getElementById("minutes").innerText = Math.floor((diff%(1000*60*60))/(1000*60));
        document.getElementById("seconds").innerText = Math.floor((diff%(1000*60))/(1000));
       if(diff<=0){
        clearInterval(intervalId);
        document.getElementById("display").style.backgroundColor = "#e33042";
        document.getElementById("submit").disabled = false;
        document.getElementById("days").innerText    = "0";
        document.getElementById("hours").innerText   = "0";
        document.getElementById("minutes").innerText = "0";
        document.getElementById("seconds").innerText = "0";
       }
    },1000)
}
