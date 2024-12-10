

    let form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
     event.preventDefault(); 
        var email = document.getElementById("email").value;
        console.log(email);
          
        var password = document.getElementById("password").value;
        console.log(password);
        alert("buttonClicked")
    });
    