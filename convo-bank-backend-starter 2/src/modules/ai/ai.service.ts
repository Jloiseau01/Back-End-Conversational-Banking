import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class AiService {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  async chat(message: string): Promise<string> {
    const res = await this.client.chat.completions.create({
      model: 'gpt-5', // replace with actual model name when available
      messages: [{ role: 'user', content: message }]
    });
    return res.choices[0].message?.content || '';
  }

  async celebrateBadge(badgeName: string) {
    const res = await this.client.chat.completions.create({
      model: 'gpt-5',
      messages: [
        { role: 'system', content: 'You are an enthusiastic financial cheerleader.' },
        { role: 'user', content: `Congratulate the user for earning the "${badgeName}" badge in a short, fun way.` }
      ]
    });
    return res.choices[0].message?.content || '';
  }
}
