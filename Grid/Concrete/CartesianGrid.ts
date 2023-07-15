import { Line } from "../../Shapes/Line/Line";
import { Point } from "../../Point/Point";
import { IGrid } from "../Abstract/IGrid";
import { IRenderable } from "../../Renderable/Abstract/IRenderable";
import { Vector } from "../../Vector/Vector";
export class CartesianGrid implements IGrid, IRenderable {
  private cellSize: number;
  private width: number;
  private height: number;
  private ctx: CanvasRenderingContext2D;
  constructor(
    cellSize: number,
    width: number,
    height: number,
    ctx: CanvasRenderingContext2D
  ) {
    this.cellSize = cellSize;
    this.ctx = ctx;
    //Adjust grid borders to avoid cutoffs
    const heightOffset = height % cellSize;
    const widthOffset = width % cellSize;

    this.height = height - heightOffset;
    this.width = width - widthOffset;
  }
  // End constructor

  Draw() {
    let totalHeight = 0;
    for (
      let i = this.height / 2;
      totalHeight <= this.height;
      i = (i + this.cellSize) % this.height
    ) {
      const start = new Point(0, i);
      const end = new Point(this.width, i);

      const line = new Line(this.ctx, start, end);
      line.Draw();
      totalHeight += this.cellSize;
    }

    let totalWidth = 0;

    for (
      let i = this.width / 2;
      totalWidth <= this.width;
      i = (i + this.cellSize) % this.width
    ) {
      const start = new Point(i, 0);
      const end = new Point(i, this.height);

      const line = new Line(this.ctx, start, end);
      line.Draw();
      totalWidth += this.cellSize;
    }
  }

  GetWidth() {
    return this.width;
  }

  GetHeight() {
    return this.height;
  }

  GetCellSize() {
    return this.cellSize;
  }

  GetOrigin(): Point {
    return new Point(this.width / 2, this.height / 2);
  }

  TranslateToDraw(position: Vector): [x: number, y: number] {
    const [x, y] = this.ScaleVecToGrid(position).GetPosition();

    const origin = this.GetOrigin();

    const fromOrigin = Vector.fromPoint(origin.AddToX(x).SubFromY(y));

    return fromOrigin.GetPosition();
  }

  ScaleVecToGrid(vec: Vector): Vector {
    return vec.Scale(this.cellSize);
  }

  ScaleToGrid(pixels: number): number {
    return pixels * this.cellSize;
  }
}
