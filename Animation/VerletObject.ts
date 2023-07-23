import { Vector } from "../Vector/Vector";
export abstract class VerletObject {
  protected current_pos: Vector = new Vector(0, 0);
  protected old_pos: Vector = new Vector(0, 0);
  protected acceleration?: Vector;

  constructor(c_pos: Vector) {
    this.acceleration = new Vector(0, 0);
    this.current_pos.Assign(c_pos);
    this.old_pos.Assign(c_pos);
  }

  public UpdatePosition(dt: number): void {
    const velocity = this.current_pos.Sub(this.old_pos);

    this.old_pos = Vector.fromPoint(this.current_pos.point);

    this.current_pos = this.current_pos
      .Add(velocity)
      .Add(this.acceleration!)
      .Scale(dt * dt);
  }

  public Accelerate(acc: Vector): void {
    this.acceleration = this.acceleration?.Add(acc);
  }
}
