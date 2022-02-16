/**
 * Converts a coordinate pair or decimal value into radians, degrees, and coordinates on a unit circle
 * @param {number | [number, number]}value The value can be either the coorindate of a point on the unit table, or a value in degrees or radians
 * @returns {{degrees: number, radians: number, coords: [number, number]}} The same point on the unit circle in radians, degrees, and coordinates
 */
export const unitCircle = (value: [number, number] | number) => {
  let degrees, radians, coords;
  if(typeof(value) == 'number'){
    if(value > 2 * Math.PI){
      degrees = value;
      radians = (value * Math.PI / 180)
      coords = [Math.cos(radians), Math.sin(radians)]
    } else {
      radians = value;
      degrees = (value * 180) / Math.PI
      coords = [Math.cos(radians), Math.sin(radians)]
    }
  } else {
    coords = value;
    radians = Math.acos(coords[0])
    degrees = (radians * 180) / Math.PI
  }
  return {degrees: degrees, radians: radians, coords: coords}
}