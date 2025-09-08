import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Bg() {
  const [preview, setPreview] = useState(null); // Original Image
  const [result, setResult] = useState(null);   // No background image
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [coins, setCoins] = useState(0);

  const navigate = useNavigate();

  // ✅ Check if logged in
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (!savedUser) {
      navigate("/login"); // redirect if not logged in
    } else {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setCoins(parsedUser.coins || 10); // default 10 coins on signup
    }
  }, [navigate]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (coins <= 0) {
      alert("You don’t have enough coins!");
      return;
    }

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
        headers: { "X-Api-Key": "YOUR_API_KEY_HERE" },
        body: formData,
      });

      if (response.ok) {
        const resultData = await response.arrayBuffer();
        const blob = new Blob([resultData], { type: "image/png" });
        const url = URL.createObjectURL(blob);
        setResult(url);

        // ✅ Deduct 1 coin
        const newCoins = coins - 1;
        setCoins(newCoins);

        // update user in localStorage
        const updatedUser = { ...user, coins: newCoins };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
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
      {/* Show user coins */}
      <p className="text-lg font-semibold mb-4">
        Coins left: <span className="text-yellow-600">{coins}</span>
      </p>

      {/* File Input */}
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg, image/webp"
        onChange={handleFileChange}
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
