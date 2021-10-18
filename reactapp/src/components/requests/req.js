import {VERIFY_EMAIL_URL} from './urls.js'
import {EMAILJS_USER_ID, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID} from './keys.js'
import fetch from "node-fetch";
import emailjs, { init } from 'emailjs-com';

async function validateEmail(email) {
    var valid = /\S+@\S+\.\S+/.test(email)
    if (valid == false){
        let data = {
            status_description: "BAD"
        }
        return data
    }
    let url = VERIFY_EMAIL_URL(email);
    return fetch(url)
    .then((response) => { 
        return response.json()
            .then((data) => {
                console.clear()
                if (data.credits == 0){
                    if (valid == true){
                        let data = {
                            status_description: "OK"
                        }
                        return data
                    }
                }
                return data;
            }).catch((err) => {
                return err
            }) 
    });
    
}

async function sendEmail(name, email, subject, message){
    init(EMAILJS_USER_ID);
    var templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message
    }
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(function(response) {
            console.log('EMAIL SENT', response.status, response.text);
        }, function(error) {
            console.log('EMAIL FAILED', error);
        });
    }

// var response = await validateEmail("matthew.myrick@marquette.edu")
// console.log(response)

export {validateEmail, sendEmail}