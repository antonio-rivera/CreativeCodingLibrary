import "./file.css";
import { ctx, canvas, grid } from "../../../Library/Shared/init";
import { Circle } from "../../../Library/Shapes/Circle/Circle";
import { Vector } from "../../../Library/Vector/Vector";
// const points: Circle[] = [];

const c = new Circle(0.2, new Vector(-5, 0), "blue");

var lastFrameTime = 0;

let movement = 5;
function Update(now: DOMHighResTimeStamp) {
  const deltaTime = (now - lastFrameTime) / 1000;
  lastFrameTime = now;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  grid.Draw();
  c.Draw();
  c.SetPos(new Vector(5 * Math.cos(movement), 5 * Math.sin(movement)));
  movement = movement + 0.1 * deltaTime;

  requestAnimationFrame(Update);
}

requestAnimationFrame(Update);
