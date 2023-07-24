import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../utils/db";
import axios from "axios";
import Alabasterinvites from "@/models/Alabasterinvites";
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
  //   await Alabasterinvites.findOne({$or: [
  //     { phone: phone },
  //     { email: email }
  //   ]})

  await dbConnect();
  if (method === "POST") {
    const alreadyAttending = await Alabasterinvites.findOne({ email: email });
    try {
      if (alreadyAttending) {
        return res.status(400).json({
          message: "Your attendance has already been recorded",
        });
      } else {
        const user = new Alabasterinvites({
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
