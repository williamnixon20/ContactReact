import React from 'react'
import { Link } from 'react-router-dom'

const ContactItem = ({ contact }) => {
    return (
        <div className="contacts-list-item">
            <Link to={`contact/${contact.id}`}>
                <h3>{contact.name}</h3>
                <h4>{contact.number}</h4>
            </Link>
        </div>
    )
}

export default ContactItem
