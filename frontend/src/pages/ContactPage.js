import React, { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg'

const ContactPage = () => {
    let match = useParams();
    let navigate = useNavigate();
    let [contact, setContact] = useState(null);

    const getContact = useCallback(async () => {
        let response = await fetch(`/api/contacts/${match.id}/`);
        let data = await response.json();
        setContact(data);
        console.log(data);
    }, [match]);

    useEffect(() => {
        getContact();
    }, [match, getContact]);

    let updateContact = async () => {
        await fetch(`/api/contacts/${match.id}/update`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact),
        })
        navigate('/')
    }

    let deleteContact = async () => {
        await fetch(`/api/contacts/${match.id}/delete`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        })
        navigate('/')
    }

    let handleSubmit = () => {
        updateContact()
    }

    return (
        <div className="contact">
            <div className="contact-header">
                <h3>
                    <ArrowRight onClick={handleSubmit} />
                </h3>
                <input onChange={(e) => { setContact({ ...contact, 'name': e.target.value }) }} defaultValue={contact?.name}></input>
            </div>

            <div className="contact-body">
                <input onChange={(e) => { setContact({ ...contact, 'number': e.target.value }) }} defaultValue={contact?.number} type="tel"></input>
                <button onClick={deleteContact}>Delete</button>
            </div>
        </div>
    )
}

export default ContactPage
