const forgotPasswordTemplate = (name, otp) => {
    return `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; max-width: 600px; margin: 0 auto; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; text-align: center;">
                <h2 style="color: #333; font-size: 24px; margin-bottom: 20px;">Hello ${name},</h2>
                <p style="color: #555; font-size: 16px; margin-bottom: 20px;">We received a request to reset your password.</p>
                <p style="color: #555; font-size: 16px; margin-bottom: 20px;">This OTP is valid for 1 hour only. Enter this OTP in the Binkeyit website to proceed with resetting your password.</p>
                <div style="background-color: #007BFF; color: #ffffff; font-size: 32px; padding: 10px 20px; border-radius: 5px; display: inline-block; margin-bottom: 30px;">
                    ${otp}
                </div><br/>
                <p style="color: #555; font-size: 16px; margin-bottom: 20px;">If you did not request to reset your password, please ignore this email.</p>
                <p style="color: #555; font-size: 16px;">Thank you!</p>
                <p style="color: #999; font-size: 14px; margin-top: 20px;">Best regards,<br>The Binkeyit Team</p>
            </div>
        </div>
    `;
};

export default forgotPasswordTemplate;
