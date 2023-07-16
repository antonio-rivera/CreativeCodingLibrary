import { CartesianGrid } from "../../Library/Grid/Concrete/CartesianGrid";
export const canvas = <HTMLCanvasElement>document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
export const ctx = canvas.getContext("2d")!;
export const grid = new CartesianGrid(50, canvas.width, canvas.height);
