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
    setTimeout(() => {
        parent.querySelector('p').textContent = '';
        document.getElementById(field).style.borderColor = 'white';
    }, 5000);
}

function userChecker() {
    getLoggedUser();
    if (typeof loggedUser === 'object') {
        document.getElementById('acc').innerHTML = loggedUser.email;
        console.log('user logged in');
        return true;
    } else {
        console.log('user not logged in');
        return false;
    }

}

if (userChecker()) {
    document.getElementById('acc').href = '#'

    document.getElementById('acc').addEventListener('mouseover', (e) => {
        document.getElementById('userDropdown').classList.add('show');
    });

    document.getElementById('userDropdownArea').addEventListener('mouseleave', (e) => {
        document.getElementById('userDropdown').classList.remove('show');
    });

    document.getElementById('logout').addEventListener('click', (e) => {
        setLoggedUser(0);
    })
}

/*users = [];
localStorage.setItem('users', JSON.stringify(users));*/