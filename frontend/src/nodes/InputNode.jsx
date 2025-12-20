import React from "react";
import BaseNode from "../components/BaseNode";

export function InputNode({ id }) {
  return (
    <BaseNode id={id} title="Input" outputs={["output"]}>
      <div className="text-sm text-slate-300">User input source</div>
    </BaseNode>
  );
}
