// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
const API_KEY = process.env.EMAILOCT_API_KEY
const LIST_ID = process.env.EMAILOCT_LIST_ID

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email: email_address } = req.query
  try {
    await fetch(`https://emailoctopus.com/api/1.6/lists/${LIST_ID}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: API_KEY,
        email_address,
      }),
    })
  } catch (_) {
    // noop
  } finally {
    res.status(200).send("success")
  }
}
