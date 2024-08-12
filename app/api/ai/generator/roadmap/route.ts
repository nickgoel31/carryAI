import { google } from '@ai-sdk/google'
import { streamObject } from 'ai'
import { notificationSchema } from './schema'

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const context = await req.json()

  const result = await streamObject({
    model: google('models/gemini-1.5-pro-latest'),
    schema: notificationSchema,
    prompt: `Generate 3 notifications for a messages app in this context:` + context,
  })

  return result.toTextStreamResponse()
}