import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages, locale } = await req.json();

    const systemPrompt =
      locale === 'tr'
        ? `You are AI Kitchen's helpful customer service assistant. You provide support in Turkish about enterprise automation, RPA, AI agents, and digital workforce solutions.

Be professional, helpful, and concise. Answer questions about AI Kitchen's platform, solutions, and services. Keep responses under 150 words.`
        : `You are AI Kitchen's helpful customer service assistant. You provide support in English about enterprise automation, RPA, AI agents, and digital workforce solutions.

Be professional, helpful, and concise. Answer questions about AI Kitchen's platform, solutions, and services. Keep responses under 150 words.`;

    // Add system message to the beginning of messages array
    const messagesWithSystem = [{ role: 'system' as const, content: systemPrompt }, ...messages];

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messagesWithSystem as OpenAI.ChatCompletionMessageParam[],
      stream: false,
    });

    const assistantText = completion.choices?.[0]?.message?.content || '';

    return new Response(JSON.stringify({ content: assistantText }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Chat error:', error);
    return new Response(JSON.stringify({ error: 'Chat failed', details: String(error) }), { status: 500 });
  }
}
