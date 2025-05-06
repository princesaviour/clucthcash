var password= "123378945";

function passcheck() {

    if (document.getElementById ("pass1").value != password) {
      alert("Wrong Code, get code.")
      return false;  
    } 
    
    if (document.getElementById ("pass1").value == password) {
        alert("correct password.")  
      } 
}