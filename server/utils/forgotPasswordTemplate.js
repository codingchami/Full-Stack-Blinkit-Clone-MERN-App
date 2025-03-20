const forgotPasswordTemplate = (name, otp) => {
    return `
        <div style="font-family: Arial, 'sans-serif'; padding: 20px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Hello ${name},</h2>
            <p style="color: #333;">We received a request to reset your password.</p>
            <p style="color: #333;">This otp is valid for 1 hour only.Enter this otp in the binkeyit 
            website to proceed with resetting your password.</p>
            <h3 style="color: #333;">${otp}</h3><br/><br/>
            <p style="color: #333;">If you did not request to reset your password, please ignore this email.</p>
            <p style="color: #333;">Thank you!</p>
        </div>
    `
}

export default forgotPasswordTemplate