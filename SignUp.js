document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('repassword').value;
    const choice = document.querySelector('input[name="choice"]:checked').value;
    const date = document.getElementById('date').value;
    const war = document.getElementById('war').value;

    alert(`Username: ${username}\nEmail: ${email}\nTelephone: ${telephone}\nPassword: ${password}\nRe-entered Password: ${repassword}\nTeam Choice: ${choice}\nDate: ${date}\nWar Game: ${war}`);
});