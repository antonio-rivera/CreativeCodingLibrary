import { Point } from "../../Point/Point";
import { IRenderable } from "../../Renderable/Abstract/IRenderable";
import { Vector } from "../../Vector/Vector";

interface IBoard {
  Initialize(): void;
  GetXLength(): number;
  GetYLength(): number;
  GetItem(position: Vector | Point): IRenderable;
}
