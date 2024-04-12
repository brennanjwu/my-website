import React from 'react';

function Contact(props) {
    return (
        <div>
            <h1>Send me an email</h1>
            <div className='contact-form'>
                <form>
                    <input type='text'name='name' placeholder='Name' required/>
                    <input type='email'name='email' placeholder='Email' required/>
                    <input type='text'name='name' placeholder='Name' required/>
                </form>
            </div>
        </div>
    );
}

export default Contact;