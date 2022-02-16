/**
 * An object resembling a right triangle:
 *  * o: the leg opposite of the angle
 *  * a: the leg next to the angle
 *  * h: the hypotenuse of the triangle
 */
export interface Triangle {
  o : number,
  a : number,
  h : number
}

/**
 * A list of all trig functions (sin, cos, tan, csc, sec, cot)
 */
export enum Functions {
  sin,
  cos,
  tan,
  csc,
  sec,
  cot
}

/**
 * Solves for an angle using a trig function
 * @param {Triangle} tri A right triangle
 * @param {Functions} func A trig function
 * @returns {number } The angle in radians
 */
export const trig = (tri : Triangle, func: Functions) => {
  const {o, a, h} = tri
  switch(func) {
    case Functions.sin:
      return Math.sin(o / h)
    case Functions.cos:
      return Math.cos(a / h)
    case Functions.tan:
      return Math.tan(o / a)
    case Functions.csc:
      return Math.sin(o / h) ** -1
    case Functions.sec:
      return Math.cos(a / h) ** -1
    case Functions.cot:
      return Math.tan(o / a) ** -1
  }
}