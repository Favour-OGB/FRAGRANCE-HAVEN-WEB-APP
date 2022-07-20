//Getting the button from the DOM
let submitbutton = document.getElementById('button')

//Add event listener on click to the button, event added as argument to function
submitbutton.addEventListener('click', function(event){
    
    //prevent the reload of the page, by preventing event
    event.preventDefault()
    
    //Getting the name and email from the DOM
    let fullName = document.getElementById('fullname').value
    let email = document.getElementById('emailaddress').value
    let message = document.getElementById('usermessage').value
    
    //Sending the email with the name and email
    emailjs.send("service_lko8vjg", "template_2l9jm27", {
        "user_name": fullName,
        "user_email" : email,
        "message" : message,
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                alert("Message sent successfully")
            },
            function (error) {
                console.log("FAILED", error);
                alert("Error, Message not sent")
            }
        );





    

    
         
})
