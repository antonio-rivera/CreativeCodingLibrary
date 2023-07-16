import { Circle } from "../../Library/Shapes/Circle/Circle";
import { Vector } from "../../Library/Vector/Vector";
import { VectorLine } from "../../Library/Shapes/Line/VectorLine";
import { ctx, grid } from "../../Library/Shared/init";

export function DrawVector(
  x: number,
  y: number,
  color: string
): [tip: Circle, line: VectorLine] {
  const point = new Circle(ctx, 0.2, new Vector(x, y), color, grid);
  const line = new VectorLine(ctx, grid.origin, point.position, grid);

  point.Draw();
  line.Draw();

  return [point, line];
}
