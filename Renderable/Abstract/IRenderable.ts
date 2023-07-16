import { Vector } from "../../Vector/Vector";

export interface IRenderable {
  Draw(): void;
}

export interface IMoveable {
  GetPos(): Vector;
}

export interface IRenderableMovable {
  // SetPos(position: Vector): void;
  Draw(): void;
  GetPos(): Vector;
}
