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

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: "admin@dcryptgirl.com",
      pass: "@Dcryptgirl2023",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  //read email template
  const filePath = path.join(process.cwd(), "public", "test.html");
  const fileContent = await fs.promises.readFile(filePath, "utf-8");
  // Replace [Username] with actual username
  const username = "John Doe";
  const personalizedEmail = fileContent.replace("[username]", username);

  // Email message options
  const mailOptions = {
    from: "admin@dcryptgirl.com",
    to: "geepytechnologies@gmail.com",
    subject: "Dcryptgirl",
    html: personalizedEmail,
  };

  try {
    console.log(fileContent);

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
