import React, { useState } from "react";
import { GoogleGenAI, Modality } from "@google/genai";
import { Buffer } from "buffer"; // ye browser compatible hai

const ImageGenerator = () => {
  let [inputvalue, setinput] = useState("");
  let [chat, setchat] = useState("");
  let [dimage, setdimage] = useState("");

  let main = async () => {
    const ai = new GoogleGenAI({
      apiKey: "AIzaSyC__7HIVs_l_DY0GpvalBBDOcF37cDJDfA",
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-preview-image-generation",
      contents: inputvalue,
      config: {
        responseModalities: [Modality.TEXT, Modality.IMAGE],
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.text) {
        setchat(part.text);
      } else if (part.inlineData) {
        setdimage(part.inlineData.data); // base64 image data
      }
    }
  };

  let submit = () => {
    main();
  };

  // ✅ Download function without fs
  let download = () => {
    const buffer = Buffer.from(dimage, "base64");
    const blob = new Blob([buffer], { type: "image/png" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "gemini-image.png"; // download filename
    link.click();
  };

  return (
    <>
      <div className="border border-black p-5 flex justify-center gap-4 w-[90%] m-auto">
        <input
          type="text"
          className="border border-black w-[40%] p-4 rounded-2xl text-xl"
          placeholder="type your imagination"
          onChange={(e) => setinput(e.target.value)}
        />

        <button
          className="border border-black p-3 rounded-2xl font-bold"
          onClick={submit}
        >
          Submit
        </button>
      </div>

      <div className="border border-green-400 h-[390px] w-[90%] 
      m-auto flex flex-col items-center justify-center gap-4">
        {/* Image show */}
        {dimage && (
          <img
            src={`data:image/png;base64,${dimage}`}
            alt="Generated"
            className="max-h-[300px] rounded-xl border"
          />
        )}

        {/* Download button */}
        {dimage && (
          <button
            className="border border-black p-3 rounded-2xl font-bold"
            onClick={download}
          >
            Download
          </button>
        )}
      </div>
    </>
  );
};

export default ImageGenerator;
