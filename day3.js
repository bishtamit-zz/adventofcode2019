const wire1 = "R75,D30,R83,U83,L12,D49,R71,U7,L72";
const wire2 = "U62,R66,U55,R34,D71,R55,D58,R83";

const getCoordinates = wire => {
  let at = [0, 0];
  let coordinates = [];
  coordinates.push(at);

  let wireArray = wire.split(",");

  wireArray.forEach(element => {
    // console.log(element, at);
    if (element.includes("L")) {
      at[0] = at[0] - Number(element.slice(1,));
    } else if (element.includes("R")) {
      at[0] = at[0] + Number(element.slice(1,));
    } else if (element.includes("U")) {
      at[1] = at[1] + Number(element.slice(1,));
    } else if (element.includes("D")) {
      at[1] = at[1] - Number(element.slice(1,));
    }
    coordinates.push(at);
    console.log(at);
  });

  //   console.log(coordinates);

  return [coordinates];
};

getCoordinates(wire1)
console.log('')
getCoordinates(wire2)
