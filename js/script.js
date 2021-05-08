
let submitBtn = document.getElementById('submitBtn');
let userNameInput = document.querySelector("input[name = 'username']");
let trip = document.querySelectorAll("input[type='radio']");
let passengers = document.getElementById("pass");
let dateTrip = document.getElementById("date");
let form = document.querySelector(".busForm")
let errorElement = document.getElementById("error");
let one = document.getElementById("one");
let round = document.getElementById("round");



form.addEventListener("submit", (e) => {
    let message = []
    let details  =[]
    
    if (userNameInput.value === "" || userNameInput.value == null){
        message.push("UserName is required");
    }
    else{
        details.push(userNameInput.value);
    }

    if(dateTrip.value === "" || dateTrip.value == null){
        message.push("Enter Valid Date");
    }
    else{
        details.push(dateTrip.value);
    }

    if(one.checked == false && round.checked == false){
        message.push("Select A Trip Type")
        console.log("Hello world")
    }
    else{
        details.push("Trip selected")
    }
    
    if (Number(passengers.value) < 1 || Number(passengers.value) > 20){
        message.push("Invalid Input in Passengers")
    }
    else{
        details.push(Number(passengers.value));
    }


  
    if (message.length > 0) {
      e.preventDefault();
      errorElement.style.display = "block";
      errorElement.innerText = message.join(" \n ");
      console.log(errorElement.innerText);
    } else {
      // errorElement.innerText = details.join(' \n ')
      errorElement.innerText = "Successfully Completed";
      alert("Successfully Completed")
    }
  });