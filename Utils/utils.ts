import { Circle } from "../../Library/Shapes/Circle/Circle";
import { Vector } from "../../Library/Vector/Vector";
import { VectorLine } from "../../Library/Shapes/Line/VectorLine";
import { ctx, grid } from "../../Library/Shared/init";

export function DrawVector(
  x: number,
  y: number,
  color: string
): [tip: Circle, line: VectorLine] {
  const point = new Circle(0.2, new Vector(x, y), color);
  const line = new VectorLine(grid.origin, point.position);

  point.Draw();
  line.Draw();

  return [point, line];
}
