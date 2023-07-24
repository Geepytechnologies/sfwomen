import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //   if (req.method !== "POST") {
  //     return res.status(405).end(); // Method Not Allowed
  //   }

  const { firstname, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: "admin@spiritfilledwomen.org",
      pass: "spiritfilledwomen2023",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  //read email template
  const filePath = path.join(process.cwd(), "public", "alabaster.html");
  const fileContent = await fs.promises.readFile(filePath, "utf-8");
  // Replace [Username] with actual username
  const username = "John Doe";
  const personalizedEmail = fileContent
    .replace("[username]", firstname)
    .replace("[email]", email);

  // Email message options
  const mailOptions = {
    from: "admin@spiritfilledwomen.org",
    to: email,
    subject: "Spiritfilledwomen",
    html: personalizedEmail,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);

    // If the email is sent successfully, return a success response
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    // If there's an error, return an error response
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
