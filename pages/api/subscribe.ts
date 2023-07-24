import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../models/User";
import dbConnect from "../../utils/db";
import axios from "axios";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

type Data = {
  name: string;
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { firstname, lastname, email, phone } = req.body;

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
  const filePath = path.join(process.cwd(), "public", "test.html");
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

  await dbConnect();
  if (method === "POST") {
    const alreadySubscribed = await User.findOne({ email: email });
    try {
      if (alreadySubscribed) {
        return res.status(400).json({
          message: "You're already a subscriber",
        });
      } else {
        const user = new User({
          ...req.body,
        });
        const userRes = await user.save();
        const emailres = await transporter.sendMail(mailOptions);

        res.status(201).json({ email: emailres, user: userRes.data });
      }
    } catch (error: any) {
      return res.status(error.status || 500).end(error.message);
    }
  }
}
