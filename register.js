function isEmailValid(email) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() === email.toLowerCase()) {
            errorNotifier('email', 'Email is already in use');
            return false;
        }
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())) {
            errorNotifier('email', 'Not a valid email');
            console.log('not valid email');
            return false;
        }
    }
    return true;
}

function isPasswordValid(password, repeatPassword) {
    if (password.length < 6) {
        errorNotifier('password', 'Password too short')
        return false;
    }
    if (password !== repeatPassword) {
        errorNotifier('repeatPassword', 'Passwords don\'t match')
        return false;
    }
    return true;
}

function submitInfo() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let repeatPassword = document.getElementById('repeatPassword').value;
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;

    if (isEmailValid(email) && isPasswordValid(password, repeatPassword)) {
        user = new User(email, password, name, address);
        console.log(user);
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        console.log('registered');
    } else {
        console.log('not registered');
    }
}
document.getElementById('registerBtn').addEventListener('click', (e) => {
    e.preventDefault();

    loadUsers();
    submitInfo();
});