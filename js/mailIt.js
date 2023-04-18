function sendEmail() {
    console.log('Inside the email Sender');
    Email.send({
        Host: "smtp.gmail.com",
        Username: "authoransar@gmail.com",
        Password: "password",
        To: 'authoransar@gmail.com',
        From: document.getElementById('email').value,
        Subject: "From the Blog",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}