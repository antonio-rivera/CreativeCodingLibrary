import { IGrid } from "../../Grid/Abstract/IGrid";
import { Vector } from "../../Vector/Vector";
import { Circle } from "./Circle";
import { ctx, grid } from "../../Shared/init";

export class Circum extends Circle {
  constructor(radius: number, position: Vector, color: string) {
    super(radius, position, color);
  }
  override Draw(): void {
    const [x, y] = grid.TranslateToDraw(this.position);
    ctx.beginPath();
    const scaledRad = grid.ScaleToGrid(this.radius);

    ctx.arc(x, y, scaledRad, 0, 2 * Math.PI);
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
}
