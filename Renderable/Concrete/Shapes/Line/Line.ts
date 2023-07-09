import { Point } from "../../../../Point/Point";
import { IRenderable } from "../../../Abstract/IRenderable";
export class Line implements IRenderable {
  // private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private start: Point;
  private end: Point;

  constructor(
    // canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    start: Point,
    end: Point
  ) {
    // this.canvas = canvas;
    this.ctx = ctx;
    this.start = start;
    this.end = end;
  }
  // Constructor end

  Draw() {
    const [xStart, yStart] = this.start.GetPos();
    const [xEnd, yEnd] = this.end.GetPos();
    this.ctx.beginPath();
    this.ctx.moveTo(xStart, yStart);
    this.ctx.lineTo(xEnd, yEnd);
    this.ctx.stroke();
  }
}
