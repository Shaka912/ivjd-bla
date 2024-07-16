import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  subject: string;
}

export const ContactEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  subject,
}) => (
  <div className="flex flex-col gap-20">
    <h1>From, {firstName}!</h1>
    <p>{subject}</p>
    <p>{email}</p>
  </div>
);
