import { IRenderableMovable } from "../../Renderable/Abstract/IRenderable";
import { Vector } from "../../Vector/Vector";
import { ctx, grid } from "../../Shared/init";
import { VerletObject } from "../../Animation/VerletObject";
export class Circle extends VerletObject implements IRenderableMovable {
  protected radius: number;
  protected color: string;

  constructor(radius: number, position: Vector, color: string) {
    super(position);
    this.radius = radius;
    this.color = color;
  }

  Draw(): void {
    const [x, y] = grid.TranslateToDraw(this.current_pos);
    ctx.beginPath();
    const scaledRad = grid.ScaleToGrid(this.radius);

    ctx.arc(x, y, scaledRad, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  GetPos(): Vector {
    return this.current_pos;
  }

  GetRadius(): number {
    return this.radius;
  }
}
