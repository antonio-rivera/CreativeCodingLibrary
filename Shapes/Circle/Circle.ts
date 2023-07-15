import { IGrid } from "../../Grid/Abstract/IGrid";
import { IRenderableMovable } from "../../Renderable/Abstract/IRenderable";
import { Vector } from "../../Vector/Vector";
export class Circle implements IRenderableMovable {
  protected ctx: CanvasRenderingContext2D;
  protected radius: number;
  public position: Vector;
  protected color: string;
  protected grid: IGrid;

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
    const [x, y] = this.grid.TranslateToDraw(this.position);
    this.ctx.beginPath();
    const scaledRad = this.grid.ScaleToGrid(this.radius);

    this.ctx.arc(x, y, scaledRad, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  GetPos(): Vector {
    return this.position;
  }

  GetRadius(): number {
    return this.radius;
  }
}
