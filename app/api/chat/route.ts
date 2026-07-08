import { openai } from '@ai-sdk/openai';
import { streamText, createUIMessageStreamResponse } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const result = streamText({
    model: openai('gpt-4o'),
    messages: [{ role: 'user', content: prompt }],
  });
  return createUIMessageStreamResponse({ stream: result.fullStream });
}