const chooseStations  = function (stations) {
  let goodStations = [];
  
  for(x in stations){
    if( stations[x][1] >= 20 && (stations[x][2] === 'school' ||stations[x][2] === 'community centre') ){

      goodStations.push(stations[x][0]);
    }
  }
  return goodStations;
}

const stations = [
  ['A', 10, 'school'],
  ['B', 9, 'restaurant'],
  ['C', 21, 'community centre'],
  ['D', 15, 'school'],
  ['E', 50, 'restaurant'],
  ['F', 20, 'school'],
  ['G', 40, 'community centre'],
  ['H', 50, 'school'],
];


console.log(chooseStations(stations));