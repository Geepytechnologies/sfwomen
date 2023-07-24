import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../utils/db";
import axios from "axios";
import Alabasterinvites from "@/models/Alabasterinvites";

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
    const alreadyAttending = await Alabasterinvites.findOne({ email: email });
    try {
      if (alreadyAttending) {
        return res.status(400).json({
          message: "You'r attendance has already been recorded",
        });
      } else {
        const user = new Alabasterinvites({
          ...req.body,
        });
        const userRes = await user.save();
        const emailres = await axios.post(
          "http://localhost:3000/api/alabaster",
          {
            firstname,
            email,
          }
        );
        res.status(201).json({ email: emailres.data, user: userRes.data });
      }
    } catch (error: any) {
      return res.status(error.status || 500).end(error.message);
    }
  }
}
