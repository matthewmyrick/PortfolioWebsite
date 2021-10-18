import {VERIFY_EMAIL_API, EMAILJS_USER_ID} from './keys.js'

function VERIFY_EMAIL_URL(email){
    return (
        'https://app.verify-email.org/api/v1/' +
            VERIFY_EMAIL_API + 
            '/verify/' +
            email
    )
}

function EMAILJS_URL(email){
    
}

export {VERIFY_EMAIL_URL, EMAILJS_USER_ID}