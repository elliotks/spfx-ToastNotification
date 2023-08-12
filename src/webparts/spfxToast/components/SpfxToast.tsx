import * as React from "react";
import { ISpfxToastProps } from "./ISpfxToastProps";
import { MyReactToast } from "./Reacttoast";

export default class SpfxToast extends React.Component<ISpfxToastProps, {}> {
  public render(): React.ReactElement<ISpfxToastProps> {
    return (
      <div>
        <MyReactToast mycontent={"Hello it's Madhan"} />
      </div>
    );
  }
}
