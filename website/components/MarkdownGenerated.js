// @flow

import * as React from "react";
import { BodyRenderer } from "@phenomic/preset-react-app/lib/client";

const MarkdownGenerated = (props: Object) => (
  <div className="phenomic-Markdown">
    <BodyRenderer>{props.body}</BodyRenderer>
  </div>
);

export default MarkdownGenerated;
