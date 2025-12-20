import React, { useState } from "react";
import { Handle, Position } from "reactflow";
import { useStore } from "../store";

export default function BaseNode({
  id,
  title,
  children,
  inputs = [],
  outputs = [],
}) {
  const deleteNode = useStore((s) => s.deleteNode);
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="
        relative
        min-w-[200px]
        rounded-xl
        bg-white
        border border-slate-300
        text-slate-800
        shadow-md
        hover:shadow-lg
        transition
      "
    >
      {/* ❌ Delete */}
      {hover && (
        <button
          onClick={() => deleteNode(id)}
          className="
            absolute -top-2 -right-2
            w-6 h-6
            rounded-full
            bg-slate-200
            text-slate-600
            text-xs font-bold
            flex items-center justify-center
            hover:bg-red-500 hover:text-white
            transition
            z-50
          "
          title="Delete node"
        >
          ✕
        </button>
      )}

      {/* Header */}
      <div
        className="
          px-4 py-2
          text-sm font-semibold
          rounded-t-xl
          bg-slate-100
          border-b border-slate-300
        "
      >
        {title}
      </div>

      {/* Content */}
      <div className="px-4 py-3 text-sm text-slate-700">{children}</div>

      {/* Input Handles */}
      {inputs.map((h, i) => (
        <Handle
          key={h}
          id={h}
          type="target"
          position={Position.Left}
          className="
            !bg-slate-400
            !w-3 !h-3
            !border-2 !border-white
          "
          style={{ top: 60 + i * 24 }}
        />
      ))}

      {/* Output Handles */}
      {outputs.map((h, i) => (
        <Handle
          key={h}
          type="source"
          position={Position.Right}
          id={h}
          className="
            !bg-blue-500
            !w-3 !h-3
            !border-2 !border-white
          "
          style={{ top: 60 + i * 24 }}
        />
      ))}
    </div>
  );
}
