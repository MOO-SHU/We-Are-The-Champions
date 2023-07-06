const endorsementTextField = document.querySelector('.endorsement-input')
const publishBtn = document.querySelector('publish-btn')
const endorsementListEl = document.querySelector('endorsement-list')

// Setting up the Database

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref,  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://we-are-the-champions-3f05d-default-rtdb.firebaseio.com/"
};

const app = initializeApp(appSettings)  
const database = getDatabase(app)
const endorsementInDB = ref (database, 'endorsement')

// Database Functions







