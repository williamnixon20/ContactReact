import React, { useState, useEffect } from 'react'
import ContactItem from '../components/ContactItem'
import AddButton from '../components/AddButton'

const ContactsListPage = () => {

    let [contacts, setContacts] = useState([])

    useEffect(() => {
        getContacts()
    }, [])

    let getContacts = async () => {
        let response = await fetch('/api/contacts/')
        let data = await response.json()
        console.log(data)
        setContacts(data)
    }

    return (
        <div className="contacts">
            <div className="contacts-header">
                <h2 className="contacts-title">&#9782; Contacts</h2>
                <p className="contacts-count">{contacts.length}</p>
            </div>
            <div className="contacts-list">
                {contacts.map((contact, index) => (
                    <ContactItem key={index} contact={contact} />
                ))}
            </div>
            <AddButton />
        </div>
    )
}

export default ContactsListPage
