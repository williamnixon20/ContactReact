import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg'

const ContactAdd = () => {
    let navigate = useNavigate();
    let [contact, setContact] = useState(null);

    let uploadContact = async () => {
        await fetch(`/api/contacts/create/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact),
        })
        navigate('/')
    }

    let handleSubmit = () => {
        uploadContact()
    }

    return (
        <div className="contact-add">
            <div className="contact-add-header">
                <h3>
                    <ArrowRight onClick={handleSubmit} />
                </h3>
                <input onChange={(e) => { setContact({ ...contact, 'name': e.target.value }) }} placeholder="Enter Name"></input>
            </div>
            <div className="contact-add-body">
                <input onChange={(e) => { setContact({ ...contact, 'number': e.target.value }) }} placeholder="Enter Number" type="tel"></input>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default ContactAdd
