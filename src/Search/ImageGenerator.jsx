import React, { useState, useEffect } from "react";
import { GoogleGenAI, Modality } from "@google/genai";
import { Buffer } from "buffer";

const ImageGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(null); // State for image URL
  const [input, setInput] = useState("");
  const [inputpromt, setinputpromt] = useState("");
  const [inputreq, setinputreq] = useState(null);

  const generateAndDownloadImage = async () => {
    setLoading(true);
    setError(null);
    setImageUrl(null);

    try {
    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY});

      const contents = input;

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-preview-image-generation",
        contents: contents,
        config: {
          responseModalities: [Modality.TEXT, Modality.IMAGE],
        },
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.text) {
          // console.log("Text response:", part.text);
          setinputpromt(part.text);
        } else if (part.inlineData) {
          const imageData = part.inlineData.data;
          const buffer = Buffer.from(imageData, "base64");
          const blob = new Blob([buffer], { type: part.inlineData.mimeType });
          let url = URL.createObjectURL(blob);
          setImageUrl(url); // Set image URL for display
        }
      }
    } catch (err) {
      console.error("Error generating image:", err);
      setError("Failed to generate the image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Clean up the Blob URL when the component unmounts or image changes
  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl); // Clean up when component unmounts
      }
    };
  }, [imageUrl]);

  let downloader = () => {
    // Trigger download
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "gemini-native-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Don't revoke the URL yet if displaying the image
    // console.log("Image download triggered as gemini-native-image.png");
  };

  return (
    <>
      <div className="mt-12  w-[90%] m-auto text-center">
        <h1 className="text-4xl font-semibold ">Type your Imagination</h1>
<p>{inputreq}</p>
        <div className="m-auto  ">
          <div>
            <textarea
              value={input}
              required
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800 placeholder-gray-400  h-[56px] w-[60%] overflow-hidden mt-9"
            />
          </div>
          <div>
            <button
              disabled={!input}
              onClick={generateAndDownloadImage}
              // disabled={loading}
              className="mt-3 text-xl font-semibold text-white
               h-[50px] w-[15%] cursor-pointer rounded-xl bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-500 "
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>
        </div>
        <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>

        <div className=" w-[70%] m-auto mt-5 font-semibold text-left">
          <p>{inputpromt}</p>
        </div>
        <div className="mt-7">
          {imageUrl && (
            <div className="flex justify-around">
              <img
                src={imageUrl}
                alt="Generated image"
                className=" rounded-2xl w-[50%]"
              />
              <button
                onClick={downloader}
                className="mt-3 text-xl font-semibold text-white
               h-[50px] w-[15%] cursor-pointer rounded-xl bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-500 "
              >
                Download
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageGenerator;
