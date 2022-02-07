import '../styles/contact.css'

export default function Contact() {
    return(
        <div className='content'>
            <h1>Aquí va el Contacto</h1>
            <div className="content-contact">
                <form>
                    <label for='name'>Nombre:</label>
                    <input className='text-form' id="name" name="name" type='text' placeholder='Introduce tu nombre...' />
                    <label for='matter'>Asunto:</label>
                    <input className='text-form' id="matter" name="matter" type='text' placeholder='Introduce el asunto...' />
                    <label for='email'>Correo:</label>
                    <input className='text-form' id="email" name="email" type='email' placeholder='Introduce tu correo...' />
                    <label for='message'>Mensaje</label>
                    <textarea className='text-form' id="message" placeholder="Introduce el mensaje..." />
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