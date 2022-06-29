function sendMail(contactForm) {

    emailjs.send("service_vpq0ezb","template_kovbzsy", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })

    .then(
        function(response) {
            alert("Massage was sent to me! I will get it touch soon");
        },
        function(error) {
            console.log("The massage did not get sent...please try again");
        }
    );
    return false;  
}