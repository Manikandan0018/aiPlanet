import React, { useEffect } from "react";
import BaseNode from "../components/BaseNode";
import { useStore } from "../store";

const extractVariables = (text) => {
  const regex = /\{\{(\w+)\}\}/g;
  const vars = new Set();
  let match;
  while ((match = regex.exec(text))) {
    vars.add(match[1]);
  }
  return Array.from(vars);
};

export function TextNode({ id, data }) {
  const updateNodeField = useStore((s) => s.updateNodeField);

  // 🔥 THIS MAKES HANDLES CONNECTABLE
  useEffect(() => {
    const vars = extractVariables(data.text || "");
    updateNodeField(id, "inputs", vars);
  }, [data.text]);

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={data.inputs || []} // 🔥 FROM NODE DATA
      outputs={["out"]}
    >
      <textarea
        value={data.text || ""}
        onChange={(e) => updateNodeField(id, "text", e.target.value)}
        rows={Math.max(3, (data.text || "").split("\n").length)}
        className="w-full border rounded-md p-2 resize-none"
        placeholder="Type text with {{variables}}"
      />
    </BaseNode>
  );
}
