"use server";
import OpenAI from "openai";

const apiKey = process.env.OPENIA_API_KEY;
const openai = new OpenAI({
  apiKey,
});

export async function censorText(text: string) {
  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Censor the next text "${text}"`,
      },
    ],
    model: "gpt-3.5-turbo",
  });
  return {
    message: response.choices[0].message,
  };
}
