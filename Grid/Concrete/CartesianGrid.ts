import { Line } from "../../Renderable/Concrete/Shapes/Line/Line";
import { Point } from "../../Point/Point";
import { IGrid } from "../Abstract/IGrid";
export class CartesianGrid implements IGrid {
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
}
