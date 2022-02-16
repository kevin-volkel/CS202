import {trig} from './trig'
import {unitCircle} from './unit'

export class AIMS {
  /**
   * Equivalent to 3.14
   */
  static pi = 3.14;

  /**
   * A collection of formulas to sovle for the area of 2d shapes
   */
  static areas = {
    /**
     * Solves for the area of a triangle
     * @param {number} base The base of the triangle
     * @param {number} height The height of the triangle
     * @returns {number} The area of the triangle
     */
    triangle(base: number, height: number): number {
      return (base * height) / 2;
    },
    /**
     * Solves for the area of a rectangle
     * @param {number} length The top or bottom of the rectangle
     * @param {number} width The left or right of the rectangle
     * @returns {number} The area of the rectangle
     */
    rectangle(length: number, width: number): number {
      return length * width;
    },
    /**
     * Solves for the area of a trapezoid
     * @param {number} height The height of the trapezoid
     * @param {number} base1 The top or bottom of the trapezoid
     * @param {number} base2 The side opposite of base1
     * @returns {number} The area of the trapezoid
     */
    trapezoid(height: number, base1: number, base2: number): number {
      return 0.5 * height * (base1 + base2);
    },
    /**
     * Solves for the area of a parallelogram
     * @param {number} {number} height The height of the parallelogram
     * @param {number} {number} base The base of the parallelogram
     * @returns {number} {number} The area of the parallelogram
     */
    parallelogram(height: number, base: number) {
      return base * height;
    },
    /**
     * Solves for the area of the circle
     * @param {number} radius The radius of the circle
     * @returns {number} The area of the circle
     */
    circle(radius: number) {
      return AIMS.pi * radius ** 2;
    },
    /**
     * Solves for the area of a square
     * @param {number} side A single side of the square
     * @returns {number} The area of the square
     */
    square(side: number) : number {
      return side * side
    }
  };

  /**
   * A collection of formulas to solve for volume and surface area of 3d solids
   */
  static solids = {
    volume: {
      /**
       * Solves for the volume of a right circular cone
       * @param radius The radius of the cone
       * @param height The height of the cone
       * @returns The volume of the right circular cone
       */
      circCone(radius: number, height: number): number {
        return (1 / 3) * AIMS.pi * radius ** 2 * height;
      },
      /**
       * Solves for the volume of a square pyramid
       * @param base The area of the base of the pyramid
       * @param height The height of the pyramid
       * @returns The volume of the pyramid
       */
      pyramid(base: number, height: number): number{
        return (1/3) * base * height
      },
      /**
       * Solves for the volume of a sphere
       * @param radius Radius of the sphere
       * @returns The volume of the sphere
       */
      sphere(radius : number): number{
        return (4/3) * AIMS.pi * radius ** 3
      },
      /**
       * Solves for the volume of a right circular cylinder
       * @param radius The radius of the cylinder
       * @param height The height of the cylinder
       * @returns The area of the right circular cylinder
       */
      circCyl(radius: number, height: number): number{
        return AIMS.pi * radius ** 2 * height
      },
      /**
       * Solves for the volume of the right prism
       * @param base The area of the base of the right prism
       * @param height The height of the right prism
       * @returns The volume of the right prism
       */
      rightPrism(base: number, height: number): number{
        return base * height
      },
    },
    surfArea: {
      /**
       * Solves for the surface area of a right circular cone
       * @param {number} radius The radius of the cone
       * @param {number} slant The slant height of the cone
       * @returns {number} The surface area of the right circular cone
       */
      circCone(radius: number, slant: number): number {
        return AIMS.pi * radius * slant + AIMS.pi * radius ** 2
      },
      /**
       * Solves for the surface area of a square pyramid
       * @param {number} base The area of the base of the pyramid
       * @param {number} perimeter The perimiter of the base of the pyramid
       * @param {number} slant The slant height of the pyramid
       * @returns {number} The surface area of the pyramid
       */
      pyramid(base: number, perimeter: number, slant: number): number{
        return base + 0.5 * perimeter * slant
      },
      /**
       * Solves for the surface area of a sphere
       * @param {number} radius The radius of the sphere
       * @returns {number} The surface area of the sphere
       */
      sphere(radius : number): number{
        return 4 * AIMS.pi * radius ** 2
      },
      /**
       * Solves for the surface area of a right circular cylinder
       * @param {number} radius The radius of the cylinder
       * @param {number} height The height of the cylinder
       * @returns {number} The surface area of the right circular cylinder
       */
      circCyl(radius: number, height: number): number{
        return 2 * AIMS.pi * radius * (height + radius)
      },
      /**
       * Solves for the surface area of a right prism
       * @param {number} base The area of the base of the right prism
       * @param {number} height The height of the right prism
       * @param {number} perimeter The perimeter of the base of the right prism
       * @returns {number} The surface area of the right prism
       */
      rightPrism(base: number, height: number, perimeter: number): number{
        return 2 * base + perimeter * height
      },
    }
  };

  /**
   * A collection of formula relating to coordinate geometry
   */
  static coordGeom = {
    /**
     * Solves for the distance of two points
     * @param {number} x1 The x coordinate of the first point
     * @param {number} y1 The y coordinate of the first point
     * @param {number} x2 The x coordinate of the second point
     * @param {number} y2 The y coordinate of the second point
     * @returns {number} The distance between two points
     */
    dist (x1 : number, y1: number, x2: number, y2: number) : number {
      return ( (x2 - x1) ** 2 + (y2 - y1) ** 2 ) ** 0.5
    },
    /**
     * Finds the midpoint between two points
     * @param {number} x1 The x coordinate of the first point
     * @param {number} y1 The y coordinate of the first point
     * @param {number} x2 The x coordinate of the second point
     * @param {number} y2 The y coordinate of the second point
     * @returns {[string, string]} The midpoint between two points
     */
    mid (x1 : number, y1: number, x2: number, y2: number) : [string, string] {
      const newX = (x2 + x1) / 2
      const newY = (y2 + y1) / 2
      return [`${newX}`, `${newY}`]
    },
    /**
     * Solves for the slope of a line connected by two points
     * @param {number} x1 The x coordinate of the first point
     * @param {number} y1 The y coordinate of the first point
     * @param {number} x2 The x coordinate of the second point
     * @param {number} y2 The y coordinate of the second point
     * @returns {number} The slope of a line
     */
    slope (x1: number, y1: number, x2: number, y2: number) : number{
      return (y2 - y1) / (x2 - x1)
    }
  }
  /**
   * Uses the quadratic formula to find the two points where x could equal 0
   * @param {number} a The coefficient with a variable squared
   * @param {number} b The coefficient with a variable
   * @param {number} c The coefficient without a variable
   * @returns {[number, number]} The two points x could equal
   */
  static quad (a: number, b: number, c: number) : [number, number] {
    const x1 = (-1 * b + (b ** 2 - 4 * a * c) ** 0.5) / 2 * a
    const x2 = (-1 * b - (b ** 2 - 4 * a * c) ** 0.5) / 2 * a
    return [x1, x2]
  }

  /**
   * A collection of equations that solve for various variables 
   */
  static linForm = {
    /**
     * Solves for the slope of a line
     * @param {number} x1 The x coordinate of the first point
     * @param {number} y1 The y coordinate of the first point
     * @param {number} x2 The x coordinate of the second point
     * @param {number} y2 The y coordinate of the second point
     * @returns {number} The slope of the line 
     */
    pointSlope(x1: number, y1: number, x2: number, y2: number) : number {
      return (y2 - y1) / (x2 - x1)
    },
    /**
     * Solves for the slope of a line from standard / general form
     * @param {number} a The coefficient of x
     * @param {number} b The coefficient of y
     * @returns {number} The slope of the line
     */
    standard(a: number, b: number) : number {
      return -a / b
    },
    /**
     * When given an x value, slope, and y-intercept, find the corresponding y value
     * @param {number} x The x coordinate
     * @param {number} m The slope of the line
     * @param {number} b The y-intercept of the line
     * @returns {number} The y value of the point
     */
    slopeInter(x: number, m: number, b: number) : number {
      return m * x + b
    }
  }
  /**
   * Solves for the hypotenuse of the right triangle using the pythagorean theorem
   * @param {number} a The first leg of the right triangle
   * @param {number} b The second leg of the right triangle
   * @returns {number} The hypotenuse of the right triangle
   */
  static pythag = (a: number, b: number) => {
    return (a ** 2 + b ** 2) ** 0.5
  }

  static trig = trig;
  static unit = unitCircle;
}

AIMS.pi;