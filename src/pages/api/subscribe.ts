import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

type Data = { message?: string; error?: string };

const EmailSchema = z
  .string()
  .email({ message: 'Please enter a valid email address' });

const subscribeHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  const emailValidation = EmailSchema.safeParse(req.body.email);
  if (!emailValidation.success) {
    return res
      .status(400)
      .json({ error: 'Please enter a valid email address' });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: emailValidation.data,
    status: 'subscribed',
  };

  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `api_key ${API_KEY}`,
    },
  };

  try {
    const response = await axios.post(url, data, options);
    if (response.status === 200) {
      return res
        .status(201)
        .json({ message: 'Awesome! You have successfully subscribed!' });
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        `${error.response?.status}`,
        `${error.response?.data.title}`,
        `${error.response?.data.detail}`
      );

      if (error.response?.data.title === 'Member Exists') {
        return res.status(400).json({
          error: "Uh oh, it looks like this email's already subscribed🧐",
        });
      }
    }

    return res.status(500).json({
      error:
        "Oops! There was an error subscribing you to the newsletter. Please email me at ogbonnakell@gmail.com and I'll add you to the list.",
    });
  }

  // Agregar un retorno explícito al final de todos los caminos de ejecución posibles
  return res.status(500).json({
    error:
      "Oops! There was an error subscribing you to the newsletter. Please email me at ogbonnakell@gmail.com and I'll add you to the list.",
  });
};

export default subscribeHandler;
