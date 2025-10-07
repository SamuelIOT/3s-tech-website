import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const {
    name,
    email,
    company,
    phone,
    industry,
    reportCount,
    timeline,
    message,
  } = req.body || {}

  if (!name || !email || !company || !industry || !reportCount || !timeline) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const smtpHost = process.env.LEAD_SMTP_HOST
    const smtpPort = process.env.LEAD_SMTP_PORT
    const smtpUser = process.env.LEAD_SMTP_USER
    const smtpPass = process.env.LEAD_SMTP_PASS
    const smtpSecure = String(process.env.LEAD_SMTP_SECURE || '').toLowerCase() === 'true'
    const smtpRequireTLS = String(process.env.LEAD_SMTP_REQUIRE_TLS || 'true').toLowerCase() === 'true'
    const toEmail = process.env.LEAD_NOTIFY_EMAIL || smtpUser

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !toEmail) {
      console.error('Lead notification env vars missing')
      return res.status(500).json({ error: 'Server email configuration missing. Please set LEAD_SMTP_HOST, LEAD_SMTP_PORT, LEAD_SMTP_USER, LEAD_SMTP_PASS, and LEAD_NOTIFY_EMAIL.' })
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: smtpSecure || Number(smtpPort) === 465,
      requireTLS: smtpRequireTLS,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    const htmlMessage = `
      <h2>New Migration Assessment Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Industry:</strong> ${industry}</p>
      <p><strong>Report Count:</strong> ${reportCount}</p>
      <p><strong>Timeline:</strong> ${timeline}</p>
      <p><strong>Additional Details:</strong></p>
      <p>${message || 'No additional details provided.'}</p>
    `

    await transporter.sendMail({
      from: `3S Tech Website <${smtpUser}>`,
      to: toEmail,
      subject: 'New Cognos to Power BI Assessment Request',
      html: htmlMessage,
    })

    return res.status(200).json({ message: 'Lead captured successfully' })
  } catch (error) {
    console.error('Lead API error:', error)
    return res.status(500).json({ error: 'Failed to submit assessment request. Please try again later.' })
  }
}

