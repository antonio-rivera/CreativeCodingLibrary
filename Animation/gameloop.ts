import "./file.css";
import { ctx, canvas } from "../../Library/Shared/init";
import { Circle } from "../../Library/Shapes/Circle/Circle";
import { Vector } from "../../Library/Vector/Vector";

const points: Circle[] = [];

const c1 = new Circle(0.2, new Vector(-5, 0), "blue");
const c2 = new Circle(0.2, new Vector(-5, -2), "blue");
const c3 = new Circle(0.2, new Vector(-5, -4), "blue");

points.push(c1);
points.push(c2);
points.push(c3);

const a = new Vector(1, 0); //Acceleration vector
const stepDt = 0.1; //dt for Verlet integration
var lastFrameTime = 0;

function Update(now: DOMHighResTimeStamp) {
  const deltaTime = (now - lastFrameTime) / 1000;
  lastFrameTime = now;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let index = 0; index < points.length; index++) {
    points[index].Draw();
    points[index].Accelerate(a);
    points[index].UpdatePosition(stepDt, deltaTime);
  }
  requestAnimationFrame(Update);
}

requestAnimationFrame(Update);
