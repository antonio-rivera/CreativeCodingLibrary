import { Vector } from "../../Vector/Vector";
import { IRenderable } from "../../Renderable/Abstract/IRenderable";
import { ctx, grid } from "../../Shared/init";
export class VectorLine implements IRenderable {
  private start: Vector;
  private end: Vector;

  constructor(start: Vector, end: Vector) {
    this.start = start;
    this.end = end;
  }

  Draw() {
    const [xStart, yStart] = grid.TranslateToDraw(this.start);
    const [xEnd, yEnd] = grid.TranslateToDraw(this.end);
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
  }
}
