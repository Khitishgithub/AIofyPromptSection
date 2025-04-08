// app/api/generateUseCase/route.ts

import { NextResponse } from "next/server";
import OpenAI from "openai";

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt, website, email } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const enhancedPrompt = `
    Analyze the website ${website} in real time and identify three innovative, practical, and relevant AI use cases for this company that can drive significant business growth.
    
    For each use case:
    1. Create a concise headline starting with "AI Can" that captures the essence of the use case (e.g., "AI Can Personalize Customer Journeys")
    2. Provide a brief description of how this AI solution would benefit the business
    
    Format each use case as: 
    HEADING: [Your "AI Can" headline]
    DESCRIPTION: [Your description]
    
    Only include these three use cases without any additional explanation.
    `;

    // Record start time
    const startTime = Date.now();

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: enhancedPrompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 600,
    });


    const endTime = Date.now();
    const responseTimeMs = endTime - startTime;
    const responseTimeSec = (responseTimeMs / 1000).toFixed(2);


    const tokenUsage = {
      promptTokens: response.usage?.prompt_tokens || 0,
      completionTokens: response.usage?.completion_tokens || 0,
      totalTokens: response.usage?.total_tokens || 0
    };


    const content = response.choices[0].message.content || "";

    const rawUseCases = content.split(/\n\n+/).filter(uc => uc.trim().length > 0);
    

    const useCases = rawUseCases.slice(0, 3).map((useCase, index) => {
 
      let heading = "AI Can Transform Your Business";
      let description = useCase;
      

      const headingMatch = useCase.match(/HEADING:\s*(AI Can[^]*?)(?:\n|$)/i);
      const descMatch = useCase.match(/DESCRIPTION:\s*([^]*?)(?:\n\n|$)/i);
      
      if (headingMatch && headingMatch[1]) {
        heading = headingMatch[1].trim();
      } else {
      
        const lines = useCase.split('\n');
        if (lines[0] && lines[0].trim().startsWith("AI Can")) {
          heading = lines[0].trim();
          description = lines.slice(1).join('\n').trim();
        }
      }
      
      if (descMatch && descMatch[1]) {
        description = descMatch[1].trim();
      }
      
    
      if (!heading.startsWith("AI Can")) {
        heading = "AI Can " + heading;
      }
      
      return {
        id: index + 1,
        title: heading,
        description: description.replace(/^DESCRIPTION:\s*/i, '').replace(/^HEADING:.*/im, '').trim(),
      };
    });


    return NextResponse.json({ 
      useCases,
      metrics: {
        responseTime: `${responseTimeSec} seconds`,
        tokenUsage
      },
     
      rawResponse: {
        content: content,
        responseObject: response
      }
    });
  } catch (error) {
    console.error("Error generating AI use cases:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}