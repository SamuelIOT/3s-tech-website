import express from 'express'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
import cors from 'cors'
import nodemailer from 'nodemailer'

dotenv.config({ path: '.env.local' })

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.post('/api/chat', async (req, res) => {
  const apiKey = process.env.OPENAI_API_KEY

  if (!apiKey) {
    console.error('OpenAI API key missing (server.js)')
    return res.status(500).json({ error: 'OpenAI API key not configured' })
  }

  try {
    const { messages } = req.body

    const systemPrompt = {
      role: 'system',
      content: `You are an AI assistant for 3S Tech Inc., a company specializing in migrating from IBM Cognos to Microsoft Power BI.

COMPANY OVERVIEW:
- 3S Tech Inc. provides end-to-end BI migration services
- Tagline: "From Cognos to Clarity" and "Your Bridge to Modern BI"
- Uses AI-assisted precision for migrations
- Guarantees zero data loss

INDUSTRIES & CLIENT TYPES:
- Financial services, healthcare, retail, manufacturing, public sector
- Mid-market to enterprise organizations with complex reporting footprints
- Teams that rely on Cognos FM models, data cubes, and paginated reporting

SERVICES - 6 PHASE MIGRATION JOURNEY:
1. ANALYSIS: Deep-dive into Cognos platform, data sources, reports, security
2. PLANNING: Scope & milestones, budget optimization
3. DESIGN: Power BI layouts, UI/UX optimization
4. DEVELOPMENT: Environment setup, report building (Standard & Paginated)
5. TESTING: UAT, validation, user feedback loops
6. MAINTENANCE: Ongoing support, optimization

KEY DIFFERENTIATORS:
- AI-powered automated analysis and dependency mapping
- Smart recommendations for Power BI architecture
- Automated testing and quality assurance
- Risk mitigation through predictive analytics
- 500+ reports migrated successfully
- 30% faster delivery compared to traditional methods
- 100% data accuracy guarantee

BENEFITS:
- Reduces complexity of legacy reporting structures
- Minimizes migration risks
- Ensures data integrity
- Provides modern, optimized BI architecture
- Minimal downtime during migration

WHAT MAKES 3S TECH DIFFERENT:
- Hybrid delivery model that combines AI automation with human oversight
- Automated Cognos report inventory & lineage extraction
- DAX advisory playbooks and best practices library
- Side-by-side validation dashboards for UAT sign-off
- Dedicated change management and training resources

FREQUENT PRACTICAL QUESTIONS (BE READY TO ANSWER):
- Implementation timeline for different report volumes (100, 500, 1000+)
- Handling of FM models, Transformer cubes, custom security, and burst reporting
- How data governance, auditing, and row-level security translate into Power BI
- Integration with Azure (Data Factory, Synapse), Snowflake, SQL Server, etc.
- What “AI-assisted migration” actually means step-by-step
- How user training, documentation, and change management are delivered
- Post go-live support, SLAs, and optimization services
- Pricing approach (tailored estimate after assessment, no fixed menu pricing)
- How 3S Tech coordinates with internal IT and business stakeholders
- What metrics and success criteria are tracked throughout the project

YOUR ROLE:
- Be helpful, professional, and knowledgeable
- Focus on migration benefits and process
- Qualify leads by understanding their needs
- Suggest scheduling a free assessment when appropriate
- Be conversational but concise (2-3 paragraphs max)
- If asked about pricing, suggest they contact for a custom quote based on their environment
- If asked for examples, share anonymized wins (e.g., "Finance client migrated 750+ reports in 3 months")
- Encourage sharing details about report counts, data sources, compliance requirements, and timeline drivers
- Emphasize the AI-assisted approach as a key differentiator

TONE: Professional yet approachable, consultative, technically credible but not jargon-heavy.

Contact: info@3stech.com | Schedule assessments through the contact form on the website.`,
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [systemPrompt, ...messages],
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('OpenAI API error (server.js):', error)
      return res.status(response.status).json({ error: 'Failed to get AI response', details: error })
    }

    const data = await response.json()
    const aiMessage = data.choices[0].message.content

    return res.status(200).json({ message: aiMessage, usage: data.usage })
  } catch (error) {
    console.error('Server error:', error)
    res.status(500).json({ error: 'Internal server error', message: error.message })
  }
})

app.post('/api/lead', async (req, res) => {
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
      console.error('Lead SMTP configuration missing')
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
    console.error('Local lead endpoint error:', error)
    return res.status(500).json({ error: 'Failed to submit assessment request. Please try again later.' })
  }
})

app.listen(PORT, () => {
  console.log(`AI server running on http://localhost:${PORT}`)
})

