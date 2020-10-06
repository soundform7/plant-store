class User {
    constructor(email, password, name, address) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.address = address;
    }
}

let users = [];
let user;
let loggedUser;

function setLoggedUser(loggedUser) {
    localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
}

function getLoggedUser() {
    try {
        loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    } catch (error) { console.log('no user') }
};

function loadUsers() {
    try {
        users = JSON.parse(localStorage.getItem('users'));
    } catch (error) {
        console.log('database is empty');
    }
}

function errorNotifier(field, message) {
    let parent = document.getElementById(field).parentElement;
    parent.querySelector('p').textContent = message;
    document.getElementById(field).style.borderColor = 'red';
    document.getElementById(field).value = '';
    // the message should last for 5 seconds
}

function userChecker() {
    getLoggedUser();
    if (typeof loggedUser === 'object') {
        document.getElementById('acc').innerHTML = loggedUser.email;
        console.log('user logged in');
        // drop down menu (profile settings, shopping cart, logout)
        // redirects from registration and loggin page to user control panel
    } else {
        console.log('user not logged in');
    }

}

function logout() {
    setLoggedUser(0);
}

userChecker();

/*users = [];
localStorage.setItem('users', JSON.stringify(users));*/