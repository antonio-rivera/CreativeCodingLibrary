import { IGrid } from "../../Grid/Abstract/IGrid";
import { IRenderableMovable } from "../../Renderable/Abstract/IRenderable";
import { Vector } from "../../Vector/Vector";
export class Circle implements IRenderableMovable {
  private ctx: CanvasRenderingContext2D;
  private radius: number;
  private position: Vector;
  private color: string;
  private grid: IGrid;

  constructor(
    ctx: CanvasRenderingContext2D,
    radius: number,
    position: Vector,
    color: string,
    grid: IGrid
  ) {
    this.ctx = ctx;
    this.radius = radius;
    this.position = position;
    this.color = color;
    this.grid = grid;
  }

  Draw(): void {
    const [x, y] = this.position.translateToDraw(this.grid);
    this.ctx.beginPath();

    this.ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  GetCurrentGrid(): IGrid {
    return this.grid;
  }

  GetPos(): Vector {
    return this.position;
  }
}
