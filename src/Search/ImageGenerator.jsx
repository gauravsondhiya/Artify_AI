
import React, { useState } from "react";
import { GoogleGenAI, Modality } from "@google/genai";
import { Buffer } from "buffer";

const ImageGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(null); // State for image URL

  const generateAndDownloadImage = async () => {
    setLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const ai = new GoogleGenAI({ apiKey: "IzaSyBQgu9BAuJHipgaz-pQGEHcwZcORauGVuQ" });

      const contents =
        "Hi, can you create a 3d rendered image of a pig " +
        "with wings and a top hat flying over a happy " +
        "futuristic scifi city with lots of greenery?";

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-preview-image-generation",
        contents: contents,
        config: {
          responseModalities: [Modality.TEXT, Modality.IMAGE],
        },
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.text) {
          console.log("Text response:", part.text);
        } else if (part.inlineData) {
          const imageData = part.inlineData.data;
          const buffer = Buffer.from(imageData, "base64");
          const blob = new Blob([buffer], { type: part.inlineData.mimeType });
          const url = URL.createObjectURL(blob);
          setImageUrl(url); // Set image URL for display

          // Trigger download
          const link = document.createElement("a");
          link.href = url;
          link.download = "gemini-native-image.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          // Don't revoke the URL yet if displaying the image
          console.log("Image download triggered as gemini-native-image.png");
        }
      }
    } catch (err) {
      console.error("Error generating image:", err);
      setError("Failed to generate or download the image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Clean up the Blob URL when the component unmounts or image changes
  React.useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl); // Clean up when component unmounts
      }
    };
  }, [imageUrl]);

  return (
    <>
    <div className="border border-black w-[90%] m-auto text-center">
      <h1 className="text-4xl font-semibold ">Type your Imagination</h1>
      
      <button onClick={generateAndDownloadImage} disabled={loading} className="border border-black">
        {loading ? "Generating..." : "Generate and Download Image"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {imageUrl && (
        <div>
          <h3>Generated Image:</h3>
          <img src={imageUrl} alt="Generated flying pig" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      )}
    </div>
    </>
  );
};

export default ImageGenerator;