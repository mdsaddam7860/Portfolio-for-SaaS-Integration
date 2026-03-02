export const runtime = 'edge'

// import { createClient } from "@mohammadsaddam-dev/hubspot-toolkit";

// let hubspotClient: any = null;
// function getClient() {
//   if (hubspotClient) return hubspotClient;
//   return (hubspotClient = createClient({
//     apiKey: process.env.HUBSPOT_API_KEY, // or ACCESS TOKEN
//     accessToken: process.env.HUBSPOT_ACCESS_TOKEN,
//   }));
// }

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const requestCounts: { [ip: string]: { count: number; timestamp: number } } = {}
const RATE_LIMIT = 5
const RATE_LIMIT_WINDOW = 60 * 1000

export async function POST(req: Request) {
  const clientIp =
    req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip') || 'unknown'

  const now = Date.now()
  if (requestCounts[clientIp]) {
    const { count, timestamp } = requestCounts[clientIp]
    if (now - timestamp < RATE_LIMIT_WINDOW) {
      if (count >= RATE_LIMIT) {
        return new Response(
          JSON.stringify({ error: 'Too many requests. Please try again later.' }),
          { status: 429 },
        )
      }
      requestCounts[clientIp].count += 1
    } else {
      requestCounts[clientIp] = { count: 1, timestamp: now }
    }
  } else {
    requestCounts[clientIp] = { count: 1, timestamp: now }
  }

  const body = await req.json()
  const { name, email, subject, message } = body as FormData

  if (!name || !email || !subject || !message) {
    return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 })
  }

  if (!/^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email address' }), { status: 400 })
  }

  const sanitizedName = name.replace(/[<>]/g, '')
  const sanitizedSubject = subject.replace(/[<>]/g, '')
  const sanitizedMessage = message.replace(/[<>]/g, '')

  try {
    const { error } = await resend.emails.send({
      from: `onboarding@resend.dev`,
      to: ['mdsonu2284@gmail.com'],
      replyTo: email,
      subject: sanitizedSubject,
      html: `
  <h2>New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${sanitizedName}</p>
  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
  <p><strong>Subject:</strong> ${sanitizedSubject}</p>
  <p><strong>Message:</strong></p>
  <blockquote style="margin-left:1rem; border-left: 2px solid #ccc; padding-left: 1rem;">
    ${sanitizedMessage.replace(/\n/g, '<br />')}
  </blockquote>
  <hr />
  <p style="font-size: 0.85rem; color: #666;">Sent via portfolio contact form on hasanashab.dev</p>
`,
    })

    if (error) {
      console.error('Resend error:', error)
      return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 })
    }

    return new Response(JSON.stringify({ message: 'Message sent successfully' }), { status: 200 })
  } catch (err) {
    console.error('Error sending email:', err)
    return new Response(JSON.stringify({ error: 'An error occurred while sending the email' }), {
      status: 500,
    })
  }
}


// export const runtime = 'edge'

// import { createClient } from "@mohammadsaddam-dev/hubspot-toolkit";
// import { Resend } from 'resend'

// const resend = new Resend(process.env.RESEND_API_KEY)

// // Helper to get HubSpot Client
// function getHubSpotClient() {
//   return createClient({
//     accessToken: process.env.HUBSPOT_ACCESS_TOKEN, // Use Access Tokens, not API Keys (deprecated)
//   });
// }


// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     console.log("Incoming Lead Data:", body); // Log 1: Confirming body parsing

//     const { name, email, subject, message } = body;

//     // HUB SPOT SYNC
//     console.log("Initiating HubSpot Sync...");
//     try {
//       const hubspot = getHubSpotClient();
//       const response = await hubspot.contacts.upsertContactByEmail(email, {
//         firstname: name.split(' ')[0],
//         lastname: name.split(' ').slice(1).join(' ') || 'Lead',
//         message: message,
//         lead_source: 'Portfolio'
//       });
//       console.log("✅ HubSpot Sync Success", response.data);
//     } catch (hsError: any) {
//       console.error("❌ HubSpot Sync Failed:", hsError.message);
//       // We don't return 500 here yet, let's try to at least get the email out.
//     }

//     // RESEND NOTIFICATION
//     console.log("Initiating Email Notification...");
//     const { data, error } = await resend.emails.send({
//       from: 'onboarding@resend.dev',
//       to: ['mdsonu2284@gmail.com'], // USE YOUR REGISTERED RESEND EMAIL
//       subject: `New Lead: ${subject}`,
//       html: `<p>Name: ${name}</p><p>Message: ${message}</p>`,
//     });

//     if (error) {
//       console.error("❌ Resend Failed:", error);
//       return new Response(JSON.stringify({ error: "Email failed" }), { status: 500 });
//     }

//     console.log("✅ Email Sent Success");
//     return new Response(JSON.stringify({ success: true }), { status: 200 });

//   } catch (globalError: any) {
//     console.error("💥 Global API Crash:", globalError.message);
//     return new Response(JSON.stringify({ error: globalError.message }), { status: 500 });
//   }
// }