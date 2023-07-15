import { Point } from "../../Point/Point";
import { Vector } from "../../Vector/Vector";

export interface IGrid {
  Draw(): void;
  GetOrigin(): Point;
  GetWidth(): number;
  GetHeight(): number;
  GetCellSize(): number;
  TranslateToDraw(position: Vector): [x: number, y: number];
  ScaleVecToGrid(vec: Vector): Vector;
  ScaleToGrid(pixels: number): number;
}
