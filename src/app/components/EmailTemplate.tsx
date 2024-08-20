interface EmailTemplateProps {
  email: string
  message: string
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ email, message }) => {
  return (
    <div>
      <h3>
        Email from <strong>{email}</strong>
      </h3>
      <p>{message}</p>
    </div>
  )
}

export default EmailTemplate
