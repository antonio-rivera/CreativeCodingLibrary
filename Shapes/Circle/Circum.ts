import { IGrid } from "../../Grid/Abstract/IGrid";
import { Vector } from "../../Vector/Vector";
import { Circle } from "./Circle";

export class Circum extends Circle {
  constructor(
    ctx: CanvasRenderingContext2D,
    radius: number,
    position: Vector,
    color: string,
    grid: IGrid
  ) {
    super(ctx, radius, position, color, grid);
  }
  override Draw(): void {
    const [x, y] = this.grid.TranslateToDraw(this.position);
    this.ctx.beginPath();
    const scaledRad = this.grid.ScaleToGrid(this.radius);

    this.ctx.arc(x, y, scaledRad, 0, 2 * Math.PI);
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();
  }
}
