import { Vector } from "../../Vector/Vector";
import { IRenderable } from "../../Renderable/Abstract/IRenderable";
import { IGrid } from "../../Grid/Abstract/IGrid";
export class VectorLine implements IRenderable {
  // private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private start: Vector;
  private end: Vector;
  private grid: IGrid;

  constructor(
    // canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    start: Vector,
    end: Vector,
    grid: IGrid
  ) {
    // this.canvas = canvas;
    this.ctx = ctx;
    this.start = start;
    this.end = end;
    this.grid = grid;
  }
  // Constructor end

  Draw() {
    const [xStart, yStart] = this.grid.TranslateToDraw(this.start);
    const [xEnd, yEnd] = this.grid.TranslateToDraw(this.end);
    this.ctx.beginPath();
    this.ctx.moveTo(xStart, yStart);
    this.ctx.lineTo(xEnd, yEnd);
    this.ctx.stroke();
  }
}
