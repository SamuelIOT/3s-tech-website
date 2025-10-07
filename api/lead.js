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

    console.log('[DEBUG] Environment check:', {
      hasHost: !!smtpHost,
      hasPort: !!smtpPort,
      hasUser: !!smtpUser,
      hasPass: !!smtpPass,
      hasToEmail: !!toEmail
    })

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

    // Send notification email to 3S Tech
    console.log(`Sending notification email to: ${toEmail}`)
    await transporter.sendMail({
      from: `3S Tech Website <${smtpUser}>`,
      to: toEmail,
      subject: 'New Cognos to Power BI Assessment Request',
      html: htmlMessage,
    })
    console.log('✓ Notification email sent successfully')

    // Send confirmation email to customer
    const customerMessage = `
      <h2>Thank You for Your Interest in 3S Tech!</h2>
      <p>Dear ${name},</p>
      <p>We have received your migration assessment request and appreciate you reaching out to us.</p>
      
      <h3>Your Submission Details:</h3>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Industry:</strong> ${industry}</p>
      <p><strong>Report Count:</strong> ${reportCount}</p>
      <p><strong>Timeline:</strong> ${timeline}</p>
      ${message ? `<p><strong>Additional Details:</strong> ${message}</p>` : ''}
      
      <p>Our team will review your information and get back to you shortly to discuss your Cognos to Power BI migration needs.</p>
      
      <p>If you have any immediate questions, please don't hesitate to contact us.</p>
      
      <p>Best regards,<br>
      <strong>The 3S Tech Team</strong></p>
    `

    console.log(`Sending confirmation email to customer: ${email}`)
    await transporter.sendMail({
      from: `3S Tech <${smtpUser}>`,
      to: email,
      subject: 'Thank You for Your Migration Assessment Request - 3S Tech',
      html: customerMessage,
    })
    console.log('✓ Customer confirmation email sent successfully')

    return res.status(200).json({ message: 'Lead captured successfully' })
  } catch (error) {
    console.error('Lead API error:', error)
    return res.status(500).json({ error: 'Failed to submit assessment request. Please try again later.' })
  }
}

