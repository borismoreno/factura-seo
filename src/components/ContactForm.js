import React from 'react'

const ContactForm = () => {
    return ( 
        <div className='container mx-auto my-20 w-full xl:w-1/3 md:w-1/2 border border-primary bg-white'>
            <div className='p-5 space-y-5 shadow-xl'>
                <form method='post' action='https://api.factura-agil.com/api/empresa/contacto'>
                    <div className='grid grid-cols-2 gap-5'>
                        <input 
                            className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-primary-lighter'
                            type='text'
                            name='nombre'
                            id='nombre'
                            placeholder='Nombre'
                            autoComplete='off'
                        />
                        <input 
                            className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-primary-lighter'
                            type='text'
                            name='apellido'
                            id='apellido'
                            placeholder='Apellido'
                            autoComplete='off'
                        />
                        <input 
                            className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-primary-lighter col-span-2'
                            type='text'
                            name='email'
                            id='email'
                            placeholder='Email'
                            autoComplete='off'
                        />
                        <input 
                            className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-primary-lighter col-span-2'
                            type='text'
                            name='telefono'
                            id='telefono'
                            placeholder='Teléfono'
                            autoComplete='off'
                        />
                        <textarea
                            cols='10'
                            rows='5'
                            name='comentario'
                            id='comentario'
                            placeholder='Escribe tu comentario'
                            className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-primary-lighter col-span-2 resize-none'
                            autoComplete='off'
                        ></textarea>
                    </div>
                    <button
                        type='submit'
                        className='focus:outline-none mt-5 bg-primary px-4 py-2 text-white font-bold w-full cursor-pointer hover:bg-primary-darker'
                    >Registrarse</button>
                </form>

            </div>
        </div>
     );
}
 
export default ContactForm;