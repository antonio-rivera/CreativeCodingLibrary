import { IGrid } from "../../Grid/Abstract/IGrid";
import { Point } from "../../Point/Point";
import { Vector } from "../../Vector/Vector";

export interface IRenderable {
  Draw(): void;
}

export interface IMoveable {
  GetPos(): Vector;
}

export interface IRenderableMovable {
  GetCurrentGrid(): IGrid;
  Draw(): void;
  GetPos(): Vector;
}
