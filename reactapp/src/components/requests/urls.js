import {VERIFY_EMAIL_API} from './keys.js'

function VERIFY_EMAIL_URL(email){
    return (
        'https://app.verify-email.org/api/v1/' +
            VERIFY_EMAIL_API + 
            '/verify/' +
            email
    )
}

export {VERIFY_EMAIL_URL}