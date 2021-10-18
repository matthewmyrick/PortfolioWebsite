import {VERIFY_EMAIL_URL, EMAILJS_USER_ID} from './urls.js'
import fetch from "node-fetch";
import{ init } from 'emailjs-com';

async function validateEmail(email) {
    let url = VERIFY_EMAIL_URL(email);
    return fetch(url)
    .then((response) => { 
        return response.json().then((data) => {
            return data;
        }).catch((err) => {
            return err
        }) 
    });
    
}

async function sendEmail(email, subject, message){
    init(EMAILJS_USER_ID);
}

// var response = await validateEmail("matthew.myrick@marquette.edu")
// console.log(response)

export {validateEmail}