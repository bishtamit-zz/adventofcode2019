// const wire1 = "R7,D5";
const wire1 = "R75,D30,R83,U83,L12,D49,R71,U7,L72";
const wire2 = "U62,R66,U55,R34,D71,R55,D58,R83";

const getCoordinates = wire => {
  let at = [0, 0];
  let coordinates = [];
  coordinates.push(at.slice(0));

  let wireArray = wire.split(",");

  wireArray.forEach(element => {
    if (element.includes("L")) {
      for (let i = 0; i < Number(element.slice(1)); i++) {
        at[0] = at[0] - 1;
        coordinates.push(at.slice(0));
      }
    } else if (element.includes("R")) {
      for (let i = 0; i < Number(element.slice(1)); i++) {
        at[0] = at[0] + 1;
        // console.log(at)
        coordinates.push(at.slice(0));
        // console.log(coordinates)
      }
    } else if (element.includes("U")) {
      for (let i = 0; i < Number(element.slice(1)); i++) {
        at[1] = at[1] + 1;
        coordinates.push(at.slice(0));
      }
    } else if (element.includes("D")) {
      for (let i = 0; i < Number(element.slice(1)); i++) {
        at[1] = at[1] - 1;
        coordinates.push(at.slice(0));
      }
    }
  });

  return coordinates;
};

const findCommonPoints = (arrayA, arrayB) => {
  commonPoints = [];
  console.log(Array.isArray(arrayA));
  console.log(Array.isArray(arrayB));
  console.log(Array.isArray(commonPoints));
  arrayA.forEach(element => {
    val = arrayB.find(val => {
      element === val;
    });
    console.log(val);
  });
};

wire_c1 = getCoordinates(wire1);
wire_c2 = getCoordinates(wire2);

findCommonPoints(wire_c1, wire_c2);
