import { sendEmail } from "../utils/sendEmail.js";

const sendmail = async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;
    if (![name, email, mobile, message].every((field) => field?.trim())) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const transferMessage = `
      Name: ${name}
      Email: ${email}
      Mobile: ${mobile}
      Message: ${message}
    `;

    await sendEmail({
      email: process.env.RECIVER_EMAIL,
      subject: "Contact Us Queries",
      message: transferMessage,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while sending the email" });
  }
};

export { sendmail };
