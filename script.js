const endorsementTextField = document.querySelector('.endorsement-input')
const publishBtn = document.querySelector('.publish-btn')
const endorsementListEl = document.querySelector('.endorsement-list')

// Setting up the Database

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://we-are-the-champions-3f05d-default-rtdb.firebaseio.com/"
};

const app = initializeApp(appSettings)  
const database = getDatabase(app)
const endorsementInDB = ref (database, 'endorsement')


// When Published button is clicked

publishBtn.addEventListener('click', function() {
    let inputValue = endorsementTextField.value;
    push (endorsementInDB, inputValue)
    clearInputFieldEl() 
})

onValue(endorsementInDB, function(snapshot){
    let endorsementArray = Object.values(snapshot.val())
    clearEndorsementListEl()
    for (let i = 0; i < endorsementArray.length; i++){
        appendEndorsementToEndorsementList(endorsementArray[i])
    }
}) 


function clearEndorsementListEl(){
    endorsementListEl.innerHTML = "";
}

function clearInputFieldEl(){
    endorsementTextField.value = ""
}
function appendEndorsementToEndorsementList (itemValue){
    endorsementListEl.innerHTML += `<li> ${itemValue} </li>`
}






