import { useState } from 'react'
import '../styles/contact.css'
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button'
import { Icon } from '@iconify/react';


export default function Contact() {

    // TEngo qeu arreglar el formulario cuando se envia, ya que no envia ni nombre, ni asunto ni correo

    const formContact = { user_name:'', user_email:'', user_matter:'', message:'' }
    const [contact, setContact] = useState(formContact)
    const [showMessage, setShowMessage] = useState(false)
    const handleChange = e => {
        const { name, value } = e.target
        setContact({ ...contact, [name]:value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        emailjs.send('contact_service', 'contact_form', contact, 'user_0hkvsrsL0itbpPoP3sXJJ')
            .then(response => {
                console.log('Success!!', response.status, response.text)
                setContact(formContact)
                setShowMessage(true)
            }, err => {
                console.log('Failed...', err)
            })
    }

    return(
        <div className='content'>
            <h1>Aquí va el Contacto</h1>
            <div className="content-contact">
                <form onSubmit={handleSubmit}>
                    <label for='name'>Nombre:</label>
                    <input required className='text-form' id="name" name="user_name" value={contact.name} onChange={handleChange} type='text' placeholder='Introduce tu nombre...' />
                    <label for='matter'>Asunto:</label>
                    <input required className='text-form' id="matter" name="user_matter" value={contact.matter} onChange={handleChange} type='text' placeholder='Introduce el asunto...' />
                    <label for='email'>Correo:</label>
                    <input required className='text-form' id="email" name="user_email" value={contact.email} onChange={handleChange} type='email' placeholder='Introduce tu correo...' />
                    <label for='message'>Mensaje</label>
                    <textarea required className='text-form' onChange={handleChange} name="message" value={contact.message} id="message" placeholder="Introduce el mensaje..." />

                    <button>
                    <Button onSubmit={handleSubmit} className='button' variant="outlined" endIcon={<Icon icon="fluent:send-24-filled" color="#fff" />}>Enviar</Button>
                    </button>
                    {showMessage ? <div className='alert' role="alert">Enviado Correctamente</div>: ``}
                </form>

                <iframe 
                    className='map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38599.06719283247!2d2.569011157976854!3d42.01297135085696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bad0615ff6e265%3A0x4d6c48cf1cd1c526!2sAmer%2C%2017170%2C%20Girona!5e1!3m2!1ses!2ses!4v1643824867836!5m2!1ses!2ses" 
                    allowfullscreen="" 
                    loading="lazy" 
                />
            </div>            
        </div>
    )
}