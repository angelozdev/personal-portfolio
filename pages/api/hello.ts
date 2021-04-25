// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next/";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  res.status(200).json({ name: "John Doe" });
};
