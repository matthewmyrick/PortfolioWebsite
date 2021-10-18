import React, { createRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, InputGroup, FormControl, Alert} from 'react-bootstrap'
import emailjs from 'emailjs-com';
import {validateEmail} from './requests/req.js'


// import css 
import '../css/Contact.css';


const contact = () => {

    let email = createRef(); 
    let subject = createRef();
    let message = createRef();

    let sendEmail = async () => {
        var response = await validateEmail(email.current.value)
        if (response.status_description.includes("OK") || response.status_description.includes("UNKNOWN")){
          console.log(email.current.value);
          console.log(subject.current.value); 
          console.log(message.current.value);
          alert("Message Sent.")
        }else{
          alert("Email does not exist, please recheck email.")
        }
    };
    return (
        <div className="Contact">
          <p>Email</p>
          <InputGroup>
            {/* <InputGroup.Text>With textarea</InputGroup.Text> */}
            <FormControl 
              type="email" ref={email} placeholder="email"
            />
          </InputGroup>
          <br/>
          <p>Subject</p>
          <InputGroup>
            {/* <InputGroup.Text>With textarea</InputGroup.Text> */}
            <FormControl 
              type="text" ref={subject} placeholder="subject"
            />
          </InputGroup>
          <br/>
          <p>Message</p>
          <InputGroup>
            {/* <InputGroup.Text>With textarea</InputGroup.Text> */}
            <FormControl 
              as="textarea" aria-label="With textarea" rows={7} ref={message}
              placeholder="message"
            />
          </InputGroup>
          <br/>
          <Button 
            onClick={sendEmail}
            variant="outline-dark"
          >
            Send Email
          </Button>
      </div>
    
    )
}

export default contact