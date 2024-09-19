import nodemailer from 'nodemailer'

export const emailRegistro = async (datos) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOSTL,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })
    const { email, nombre, token } = datos
    await transport.sendMail({
        from: '"Bienes Raices" <info@bienesraices.com.ar>',
        to: email,
        subject: 'Bienes Raices - Confirmación de registro',
        html: `<h1>Bienes Raices</h1>
        <p>Hola ${nombre},</p>
        <p>Te hemos enviado un email de confirmación</p>
        <p>Si no has recibido el email, revisa tu carpeta de spam</p>
        <p>Si tienes alguna duda, no dudes en contactarnos</p>
        <p>Bienes Raices</p>
        <a href=""</a>
        <p>El enlace de confirmación es: ${token}</p>`  
    })
}