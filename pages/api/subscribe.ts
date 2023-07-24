import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../models/User";
import dbConnect from "../../utils/db";
import axios from "axios";

type Data = {
  name: string;
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();
  if (method === "POST") {
    const { firstname, lastname, email, phone } = req.body;
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
        const emailres = await axios.post("http://localhost:3000/api/email", {
          firstname,
          email,
        });
        res.status(201).json({ email: emailres.data, user: userRes.data });
      }
    } catch (error: any) {
      return res.status(error.status || 500).end(error.message);
    }
  }
}
