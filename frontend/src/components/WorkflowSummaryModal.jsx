import React from 'react'

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export default function WorkflowSummaryModal({ open, onClose, summary }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
      <div className="bg-white text-black rounded-xl w-full max-w-md p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Workflow Summary</h2>

        {/* STATS */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Nodes</span>
            <span className="font-medium">{summary.nodes}</span>
          </div>
          <div className="flex justify-between">
            <span>Connections</span>
            <span className="font-medium">{summary.edges}</span>
          </div>
        </div>

        <hr className="my-4" />

        {/* VALIDATION */}
        <div className="space-y-2 text-sm">
          <ValidationRow label="Input Node" valid={summary.hasInput} />
          <ValidationRow label="LLM Node" valid={summary.hasLLM} />
          <ValidationRow label="Output Node" valid={summary.hasOutput} />
        </div>

        <hr className="my-4" />

        {/* STATUS */}
        <div
          className={`text-center font-semibold py-2 rounded-md ${
            summary.valid
              ? "bg-green-100 text-black"
              : "bg-red-100 text-red-700"
          }`}
        >
          {summary.valid ? "✅ VALID WORKFLOW" : "❌ INVALID WORKFLOW"}
        </div>

        {/* ACTION */}
        <button
          onClick={onClose}
          className="mt-5 w-full py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500"
        >
          OK
        </button>
      </div>
    </div>
  );
}

function ValidationRow({ label, valid }) {
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <span>{valid ? "✅" : "❌"}</span>
    </div>
  );
}
