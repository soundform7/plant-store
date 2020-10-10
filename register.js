if (userChecker()) {
    window.location.replace('index.html');
}

function isEmailValid(email) {
    if (email.length < 1) {
        errorNotifier('email', 'Please enter your email')
        return false;
    }
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
    if (password.length < 1) {
        errorNotifier('password', 'Pleae enter your password');
        return false;
    } else if (password.length < 6) {
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
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let repeatPassword = document.getElementById('repeatPassword').value.trim();
    let name = document.getElementById('name').value.trim();
    let address = document.getElementById('address').value.trim();

    if (isEmailValid(email) && isPasswordValid(password, repeatPassword)) {
        user = new User(email, password, name, address);
        console.log(user);
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        setLoggedUser(user);
        console.log('registered');
        window.location.href = 'index.html'
    } else {
        console.log('not registered');
    }
}
document.getElementById('registerBtn').addEventListener('click', (e) => {
    e.preventDefault();

    loadUsers();
    submitInfo();
});