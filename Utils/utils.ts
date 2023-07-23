import { Circle } from "../../Library/Shapes/Circle/Circle";
import { Vector } from "../../Library/Vector/Vector";
import { VectorLine } from "../../Library/Shapes/Line/VectorLine";
import { grid } from "../../Library/Shared/init";

export function DrawWorldPointVector(
  x: number,
  y: number,
  color: string
): [tip: Circle, line: VectorLine] {
  const point = new Circle(0.2, new Vector(x, y), color);
  const line = new VectorLine(grid.origin, point.GetPos());

  point.Draw();
  line.Draw();

  return [point, line];
}

export function DrawPointVector(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: string
): [tip: Circle, line: VectorLine] {
  const point = new Circle(0.2, new Vector(x2, y2), color);
  const line = new VectorLine(new Vector(x1, y1), point.GetPos());

  point.Draw();
  line.Draw();

  return [point, line];
}

export function DrawVectorLine(
  v1: Vector,
  v2: Vector,
  color: string
): [tip: Circle, line: VectorLine] {
  const point = new Circle(0.2, v2, color);
  const line = new VectorLine(v1, point.GetPos());

  point.Draw();
  line.Draw();

  return [point, line];
}

export function DrawWorldVector(
  v1: Vector,
  color: string
): [tip: Circle, line: VectorLine] {
  const point = new Circle(0.2, v1, color);
  const line = new VectorLine(grid.origin, point.GetPos());

  point.Draw();
  line.Draw();

  return [point, line];
}
