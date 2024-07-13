"use server";

import { ContactEmailTemplate } from "@/components/templates/ContactEmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = async (
  email: string,
  name: string,
  subject: string
) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "manuelfcampa@gmail.com",
      subject: "Contact Us",
      text: "Contact",
      react: ContactEmailTemplate({
        firstName: name,
        email: email,
        subject: subject,
      }),
    });

    if (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }

    return data;
  } catch (err: any) {
    // Handle any other errors that might occur
    throw new Error(
      `An error occurred while sending the email: ${err.message}`
    );
  }
};
