import React, { useState } from "react";

function Bg() {
  const [preview, setPreview] = useState(null); // Original Image
  const [result, setResult] = useState(null);   // Background removed Image
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Reset old data
    setPreview(URL.createObjectURL(file));
    setResult(null);

    // API call
    setLoading(true);
    const formData = new FormData();
    formData.append("size", "auto");
    formData.append("image_file", file);

    try {
      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: { "X-Api-Key": "DYYCm6otFgLE965P36ZMD98Y" },
        body: formData,
      });

      if (response.ok) {
        const resultData = await response.arrayBuffer();
        const blob = new Blob([resultData], { type: "image/png" });
        const url = URL.createObjectURL(blob);
        setResult(url); // Save preview URL
      } else {
        console.error("Error:", response.status, response.statusText);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!result) return;
    const link = document.createElement("a");
    link.href = result;
    link.download = "no-bg.png";
    link.click();
  };

  return (
    <div className="p-6 flex flex-col items-center gap-6">
      {/* File Input */}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="border p-2 rounded"
      />

      {/* Preview Section */}
      <div className="flex gap-6">
        {/* Original Preview */}
        {preview && (
          <div className="flex flex-col items-center">
            <p className="mb-2 font-semibold">Original</p>
            <img
              src={preview}
              alt="Original"
              className="max-h-60 rounded-lg border shadow"
            />
          </div>
        )}

        {/* Result Preview */}
        <div className="flex flex-col items-center">
          <p className="mb-2 font-semibold">No Background</p>
          {loading ? (
            // Skeleton Loader
            <div className="w-40 h-40 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Processing...</span>
            </div>
          ) : result ? (
            <img
              src={result}
              alt="No Background"
              className="max-h-60 rounded-lg border shadow"
            />
          ) : (
            <div className="w-40 h-40 border rounded-lg flex items-center justify-center text-gray-400">
              No image
            </div>
          )}
        </div>
      </div>

      {/* Download Button */}
      {result && (
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Download No-BG Image
        </button>
      )}
    </div>
  );
}

export default Bg;
