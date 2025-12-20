import React from "react";
import { Handle, Position } from "reactflow";

export default function FlowNode({ data }) {
  return (
    <div
      className="rounded-xl bg-white px-4 py-3 min-w-[180px]"
      style={{
        border: `2px solid ${data.color}`,
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
      }}
    >
      <div className="font-semibold text-sm text-slate-900">{data.label}</div>

      <div className="text-xs text-slate-500 mt-1">{data.subtitle}</div>

      <Handle
        type="target"
        position={Position.Left}
        style={{
          background: data.color,
          border: "none",
          width: 8,
          height: 8,
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{
          background: data.color,
          border: "none",
          width: 8,
          height: 8,
        }}
      />
    </div>
  );
}
