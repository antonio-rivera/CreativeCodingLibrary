import { Point } from "../../Point/Point";
import { IRenderable } from "../../Renderable/Abstract/IRenderable";
import { ctx } from "../../Shared/init";
export class Line implements IRenderable {
  private start: Point;
  private end: Point;

  constructor(start: Point, end: Point) {
    // this.canvas = canvas;
    this.start = start;
    this.end = end;
  }
  // Constructor end

  Draw() {
    const [xStart, yStart] = this.start.GetPos();
    const [xEnd, yEnd] = this.end.GetPos();
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
  }
}
