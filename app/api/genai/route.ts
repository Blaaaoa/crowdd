
import { NextRequest, NextResponse } from "next/server";
import { StreamingTextResponse, GoogleGenerativeAIStream, Message } from "ai";
import { GoogleGenerativeAI, Content } from "@google/generative-ai";
import { generateText } from 'ai';
// IMPORTANT! Set the runtime to edge

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const prompt = reqBody.data.prompt;

  const genAI = new GoogleGenerativeAI(process.env.API_KEY!);

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const streamingResponse = await model.generateContentStream(prompt);

  // Use the new recommended class/function
  return new StreamingTextResponse(streamingResponse);
}
