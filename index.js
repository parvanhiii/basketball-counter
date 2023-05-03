let btnOne = document.getElementById("plus-1-btn")
let homeScoreEl =document.getElementById("home-score")
let homeScore = 0 

let btnTwo = document.getElementById("plus-1-bttn")
let homeScoresEl =document.getElementById("guest-score")
let homeScoree =0

let btnThree = document.getElementById("plus-2-btn")
let btnFour = document.getElementById("plus-2-bttn")


 


function incrementOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function incrementbyOne(){
    homeScoree += 1
    homeScoresEl.textContent = homeScoree
}
function incrementTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function incrementbyTwo(){
    homeScoree += 2
    homeScoresEl.textContent = homeScoree
}
function incrementThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
function incrementbyThree(){
    homeScoree += 3
    homeScoresEl.textContent = homeScoree
}

