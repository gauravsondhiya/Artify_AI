import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const Image_generator = async () => {
  try {
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

     const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-image",
    contents: "Create a picture of a nano banana dish in a fancy restaurant with a Gemini theme",
     });
    console.log(response)

    // let idx = 1;
    // for (const generatedImage of response.generatedImages) {
    //   let imgBytes = generatedImage.image.imageBytes;
    //   const buffer = Buffer.from(imgBytes, "base64");
    //   fs.writeFileSync(`imagen-${idx}.png`, buffer);
    //   idx++;
    // }
    res.json(response)

  } catch (error) {
    console.log("kuch to gadbad hogyi image generator may");
    console.log(error)
  }
};
Image_generator()
// export default Image_generator;
