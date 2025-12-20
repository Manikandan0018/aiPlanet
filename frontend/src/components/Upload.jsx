import React, { useState, useRef } from "react";
import { uploadFile } from "../api";

export default function Upload() {
  const [status, setStatus] = useState("idle"); // idle | uploading | success | error
  const [fileName, setFileName] = useState("");
  const fileRef = useRef(null);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    try {
      setStatus("uploading");
      await uploadFile(file);
      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
        setFileName("");
      }, 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        {/* FILE INFO */}
        <div className="flex items-center gap-2 text-sm text-gray-600 truncate">
          📎 {fileName || "Upload a document for context"}
        </div>

        {/* ACTION */}
        <button
          onClick={() => fileRef.current.click()}
          className="px-3 py-1.5 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-500 transition"
        >
          Upload
        </button>

        <input
          ref={fileRef}
          type="file"
          onChange={handleUpload}
          className="hidden"
        />
      </div>

      {/* STATUS */}
      <div className="mt-1 h-4 text-xs">
        {status === "uploading" && (
          <span className="text-blue-600 animate-pulse">
            ⏳ Indexing document…
          </span>
        )}

        {status === "success" && (
          <span className="text-green-600">
            ✅ Document indexed successfully
          </span>
        )}

        {status === "error" && (
          <span className="text-red-600">❌ Upload failed, try again</span>
        )}
      </div>
    </div>
  );
}
