import React from "react";
import BaseNode from "../components/BaseNode";

export function LLMNode({ id, data }) {
  return (
    <BaseNode id={id} title="LLM" inputs={["prompt"]} outputs={["response"]}>
      <div className="text-sm text-slate-300">Language model step</div>
    </BaseNode>
  );
}
