import React, { createRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, InputGroup, FormControl, Alert} from 'react-bootstrap'
import {validateEmail, sendEmail} from './requests/req.js'


// import css 
import '../css/Contact.css';


const contact = () => {
    let name = createRef();
    let email = createRef(); 
    let subject = createRef();
    let message = createRef();

    let sendAutomatedEmail = async () => {
        var response = await validateEmail(email.current.value)
        if (response.status_description.includes("OK") || response.status_description.includes("UNKNOWN")){
          await sendEmail(name.current.value, email.current.value, subject.current.value, message.current.value)
          alert("Message Sent.")
        }else{
          alert("Email does not exist, please recheck email.")
        }
    };
    return (
        <div className="Contact">
          <p>Name</p>
          <InputGroup>
            <FormControl 
              type="text" ref={name} placeholder="name"
            />
          </InputGroup>
          <br/>
          <p>Email</p>
          <InputGroup>
            <FormControl 
              type="email" ref={email} placeholder="email"
            />
          </InputGroup>
          <br/>
          <p>Subject</p>
          <InputGroup>
            <FormControl 
              type="text" ref={subject} placeholder="subject"
            />
          </InputGroup>
          <br/>
          <p>Message</p>
          <InputGroup>
            <FormControl 
              as="textarea" aria-label="With textarea" rows={7} ref={message}
              placeholder="message"
            />
          </InputGroup>
          <br/>
          <Button 
            onClick={sendAutomatedEmail}
            variant="outline-dark"
          >
            Send Email
          </Button>
      </div>
    
    )
}

export default contact