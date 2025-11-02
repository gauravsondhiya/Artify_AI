import React, { useState } from "react";
import { GoogleGenAI, Modality } from "@google/genai";
import { Buffer } from "buffer";

const ImageGenerator = () => {
  let [inputvalue, setinput] = useState("");
  let [chat, setchat] = useState("");
  let [dimage, setdimage] = useState("");
  let [loading, setLoading] = useState(false);

  let main = async () => {
    setLoading(true);
    setdimage(""); // reset previous image
    setchat("");

    // const ai = new GoogleGenAI({
    //   apiKey: "AIzaSyC__7HIVs_l_DY0GpvalBBDOcF37cDJDfA",
    // });

    // const response = await ai.models.generateContent({
    //   model: "gemini-2.0-flash-preview-image-generation",
    //   contents: inputvalue,
    //   config: {
    //     responseModalities: [Modality.TEXT, Modality.IMAGE],
    //   },
    // });

    // for (const part of response.candidates[0].content.parts) {
    //   if (part.text) {
    //     setchat(part.text);
    //   } else if (part.inlineData) {
    //     setdimage(part.inlineData.data);
    //   }
    // }

  //   setLoading(false);
  };

  let submit = () => {
    if (inputvalue.trim() !== "") {
      main();
    }
  };

  // // ✅ Download function without fs
  // let download = () => {
  //   const buffer = Buffer.from(dimage, "base64");
  //   const blob = new Blob([buffer], { type: "image/png" });
  //   const link = document.createElement("a");
  //   link.href = URL.createObjectURL(blob);
  //   link.download = "artify_AI.png";
  //   link.click();
  // };

  return (
    <div className="p-5">
      {/* Input + Submit */}
      <div className="flex items-end gap-2 w-full max-w-3xl mx-auto">
        <textarea
          rows={1}
          value={inputvalue}
          onChange={(e) => {
            setinput(e.target.value);
            // e.target.style.height = "auto"; // reset height
            // e.target.style.height = e.target.scrollHeight + "px"; // grow dynamically
          }}
          placeholder="Type your imagination..."
          className="flex-grow resize-none border border-gray-300 rounded-2xl p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={submit}
          className="bg-blue-400 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-600 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Generating..." : "Submit"}
        </button>
      </div>

      {/* Image Container */}
      <div className="border border-blue-400 h-[390px] w-[90%] mx-auto flex flex-col items-center justify-center gap-4 mt-6 rounded-xl p-3">
        {/* Loader */}
        {loading && (
          <div className="w-[300px] h-[300px] bg-gray-200 animate-pulse rounded-xl" />
        )}

        {/* Image */}
        {!loading && dimage && (
          <img
            src={`data:image/png;base64,${dimage}`}
            alt="Generated"
            className="max-h-[300px] rounded-xl border"
          />
        )}

        {/* Download button */}
        {!loading && dimage && (
          <button
            className="border border-black px-6 py-2 rounded-2xl font-bold hover:bg-blue-400"
            onClick={download}
          >
            Download
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
