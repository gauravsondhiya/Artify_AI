import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Bg() {
  const [preview, setPreview] = useState(null); // Original Image
  const [result, setResult] = useState(null);   // No background image
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [coins, setCoins] = useState(0);

  

  return (
    <div className="p-6 flex flex-col items-center gap-6">
      
     

      {/* File Input */}
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg, image/webp"
       
        className="border p-2 rounded cursor-pointer"
      />

      {/* Preview Section */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl justify-center">
        {/* Original Preview */}
        <div className="flex flex-col items-center flex-1">
          <p className="mb-2 font-semibold">Original</p>
          {preview ? (
            <img
              src={preview}
              alt="Original"
              className="w-full max-w-sm h-[300px] object-contain rounded-lg border shadow bg-white"
            />
          ) : (
            <div className="w-full max-w-sm h-[300px] border rounded-lg flex items-center justify-center text-gray-400 bg-gray-50">
              Add your image
            </div>
          )}
        </div>

        {/* Result Preview */}
        <div className="flex flex-col items-center flex-1">
          <p className="mb-2 font-semibold">No Background</p>
          {loading ? (
            // Loader
            <div className="w-full max-w-sm h-[300px] bg-gray-200 rounded-lg flex items-center justify-center animate-pulse">
              <span className="text-gray-500 animate-pulse">Processing...</span>
            </div>
          ) : result ? (
            <img
              src={result}
              alt="No Background"
              className="w-full max-w-sm h-[300px] object-contain rounded-lg border shadow bg-white"
            />
          ) : (
            <div className="w-full max-w-sm h-[300px] border rounded-lg flex items-center justify-center text-gray-400 bg-gray-50">
              No image
            </div>
          )}
        </div>
      </div>

      {/* Download Button */}
      {result && (
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Download No-BG Image
        </button>
      )}
    </div>
  );
}

export default Bg;
