class User {
    constructor(email, password, name, address) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.address = address;
    }
}

let users = [];

let isFormValid = false;

function isEmailValid(email) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() === email.toLowerCase()) {
            //notify the user
            console.log('email found');
            return false;
        }
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())) {
            //notify the user
            console.log('not valid email');
            return false;
        }
    }
    return true;
}

function isPasswordValid(password, repeatPassword) {
    if (password.length < 6) {
        //notify the user
        console.log('pass too short');
        return false;
    }
    if (password !== repeatPassword) {
        //notify the user
        console.log('pass doesnt match');
        return false;
    }
    return true;
}

function submitInfo() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let repeatPassword = document.getElementById('repeatPassword').value;
    let name = document.getElementById('name');
    let address = document.getElementById('address');

    if (isEmailValid(email) && isPasswordValid(password, repeatPassword)) {
        user = new User(email, password, name, address);
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }
}


try {
    users = JSON.parse(localStorage.getItem('users'));
} catch (error) {
    console.log('database is empty');
}
document.getElementById('submit').addEventListener('click', submitInfo);



users = [];
localStorage.setItem('users', JSON.stringify(users));