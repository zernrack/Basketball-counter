let score_home = document.getElementById('score_home')
let score_guest = document.getElementById('score_guest')

let count = 0
let guestCount = 0

//Score Home
function add_one(){
    count += 1
    score_home.textContent = count
}

function add_two(){
    count += 2
    score_home.textContent = count
}

function add_three(){
    count += 3
    score_home.textContent = count
}

function reset_home(){
    count = 0
    score_home.textContent = count
}

//Score Guest

function add_one_guest(){
    guestCount += 1
    score_guest.textContent = guestCount
}

function add_two_guest(){
    guestCount += 2
    score_guest.textContent = guestCount
}

function add_three_guest(){
    guestCount += 3
    score_guest.textContent = guestCount
}

function reset_guest(){
    guestCount = 0
    score_guest.textContent = guestCount
}