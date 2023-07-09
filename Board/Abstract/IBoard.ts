import { Point } from "../../Point/Point";
import { IRenderableMovable } from "../../Renderable/Abstract/IRenderable";
import { Vector } from "../../Vector/Vector";

export interface IBoard {
  GetXLength(): number;
  GetYLength(): number;
  GetItem(position: Vector | Point): IRenderableMovable | undefined;
  SetItem(item: IRenderableMovable): void;
}
