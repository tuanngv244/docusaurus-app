import React, { type ReactNode } from "react";
import DocRoot from "@theme-original/DocRoot";
import type DocRootType from "@theme/DocRoot";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof DocRootType>;

export default function DocRootWrapper(props: Props): ReactNode {
  return (
    <div className="container">
      <DocRoot {...props} />{" "}
    </div>
  );
}
