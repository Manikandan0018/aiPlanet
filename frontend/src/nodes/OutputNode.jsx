import React from "react";
import BaseNode from "../components/BaseNode";

export function OutputNode({ id }) {
  return (
    <BaseNode id={id} title="Output" inputs={["input"]}>
      <div className="text-sm text-slate-300">Final output</div>
    </BaseNode>
  );
}
