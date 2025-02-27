import { Resend } from 'resend';
import dotenv from 'dotenv'
dotenv.config()

if(!process.env.RESEND_API){
    console.log("Provide RESEND_API in side the .env file")
}

const resend = new Resend(process.env.RESEND_API);

const sendEmail = async ({ sentTo, subject, html }) => {
    try {
        console.log(`Sending email to: ${sentTo}, subject: ${subject}`);

        const { data, error } = await resend.emails.send({
           from: 'Binkeyit@resend.dev', // Use your verified domain
            to: sentTo,
            subject: subject,
            html: html,
        });

        if (error) {
            console.error("Email sending failed:", error);
            return null;
        }

        console.log("Email sent successfully:", data);
        return data;
    } catch (error) {
        console.error("Error in sendEmail:", error);
        return null;
    }
};


export default sendEmail