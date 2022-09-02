const finalPosition = function (moves) {
  let x = 0 ,y = 0;
  for(let direction in moves){
    if (moves[direction] === 'north') x += 1;
    if (moves[direction] === 'south') x -= 1;
    if (moves[direction] === 'east') y += 1;
    if (moves[direction] === 'west') y -= 1;
  }
  return [y,x]
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));