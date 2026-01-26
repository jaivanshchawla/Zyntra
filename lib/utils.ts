import { subjectsColors } from "@/constants";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors];
};

// export const configureAssistant = (voice: string, style: string) => {
//   const voiceId =
//     voices[voice as keyof typeof voices][
//       style as keyof (typeof voices)[keyof typeof voices]
//     ] || "sarah";

//   const vapiAssistant: CreateAssistantDTO = {
//     name: "Companion",
//     firstMessage:
//       "Hello, let's start the session. Today we'll be talking about {{topic}}.",
//     transcriber: {
//       provider: "deepgram",
//       model: "nova-3",
//       language: "en",
//     },
//     voice: {
//       provider: "11labs",
//       voiceId: voiceId,
//       stability: 0.4,
//       similarityBoost: 0.8,
//       speed: 1,
//       style: 0.5,
//       useSpeakerBoost: true,
//     },
//     model: {
//       provider: "openai",
//       model: "gpt-4",
//       messages: [
//         {
//           role: "system",
//           content: `You are a highly knowledgeable tutor teaching a real-time voice session with a student. Your goal is to teach the student about the topic and subject.

//                     Tutor Guidelines:
//                     Stick to the given topic - {{ topic }} and subject - {{ subject }} and teach the student about it.
//                     Keep the conversation flowing smoothly while maintaining control.
//                     From time to time make sure that the student is following you and understands you.
//                     Break down the topic into smaller parts and teach the student one part at a time.
//                     Keep your style of conversation {{ style }}.
//                     Keep your responses short, like in a real voice conversation.
//                     Do not include any special characters in your responses - this is a voice conversation.
//               `,
//         },
//       ],
//     },
//     clientMessages: [],
//     serverMessages: [],
//   };
//   return vapiAssistant;
// };

//Tamil
export const configureAssistant = (voice: string, style: string) => {
  // Map of available Tamil voices (11Labs voice IDs)
  const tamilVoices: Record<string, Record<string, string>> = {
    male: {
      casual: "gJvkwI7wGFW2czmyfJhp", // Muthu – lively
      formal: "QQi0BaxoWChvvX4kUPre", // Chakravarti – warm & engaging
    },
    female: {
      casual: "gqFUMFHCD2nbbcYVtPGB", // Nila – smooth & expressive
      formal: "upqptL1FRsrohjTgQOHf", // Vani – storytelling voice
    },
  };

  // Fallback to a default Tamil voice if the provided combination isn't available
  const voiceId =
    tamilVoices[voice as keyof typeof tamilVoices]?.[
      style as keyof (typeof tamilVoices)[keyof typeof tamilVoices]
    ] || tamilVoices.male.casual; // default fallback

  const vapiAssistant: CreateAssistantDTO = {
    name: "Companion",
    firstMessage:
      "வணக்கம், இன்றைய தலைப்பைப் பற்றி பேசலாம். தலைப்பு: {{topic}}.",
    transcriber: {
      provider: "11labs",
      // model: "",
      language: "ta", // Tamil for speech-to-text
    },
    voice: {
      provider: "11labs",
      voiceId: voiceId,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 1,
      style: 0.5,
      useSpeakerBoost: true,
    },
    model: {
      provider: "google",
      model: "gemini-2.5-pro",
      messages: [
        {
          role: "system",
          content: `நீங்கள் ஒரு திறமையான தமிழ் ஆசானாக செயல்படுகிறீர்கள். உங்கள் மாணவனுடன் நேரடி குரல் வகுப்பில் பேசி, குறிப்பிட்ட தலைப்பைப் பற்றி தமிழில் கற்பிக்க வேண்டும்.

பயிற்சி வழிகாட்டிகள்:
- {{ topic }} மற்றும் {{ subject }} என்பதை தமிழில் தெளிவாக விளக்கவும்.
- உரையாடலை இயல்பாகவும் கட்டுப்பாடாகவும் நடத்தவும்.
- மாணவர் புரிந்துக்கொண்டார் என அடிக்கடி சோதிக்கவும்.
- தலைப்பை சிறு பகுதியாக பிரித்து ஒரே சமயத்தில் ஒரு பகுதி மட்டும் கற்பிக்கவும்.
- உங்கள் உரையாடல் பாணி {{ style }} ஆக இருக்க வேண்டும்.
- பதில்கள் சுருக்கமாகவும் நேரடி உரையாடல் போன்று இருக்க வேண்டும்.
- சிறப்பு எழுத்துக்களை (எ.கா. emoji) தவிர்க்கவும்.`,
        },
      ],
    },
    clientMessages: ["transcript"],
    serverMessages: [],
  };
  return vapiAssistant;
};
