if (userChecker()) {
    window.location.replace('index.html');
}

function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() === email.toLowerCase() && users[i].password === password) {
            user = new User(users[i].email, users[i].password, users[i].name, users[i].address);
            setLoggedUser(user);
            console.log(user);
            window.location.href = 'index.html'

            return console.log('login successful');
        }
    }
    console.log('Wrong email or password');
    errorNotifier('password', 'Wrong email or password');
}

document.getElementById('loginBtn').addEventListener('click', (e) => {
    e.preventDefault();

    loadUsers();
    login();
});