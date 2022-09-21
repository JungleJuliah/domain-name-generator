const pronoun = ["your", "the", "it", "my", "go"];
const adje = ["super", "economic", "easy", "smart", "best"];
const noun = ["pet", "health", "electronics", "finds", "mart"];

// let randpron = pronoun[(Math.floor(Math.random()*5)+1)]
// let randadje = adje[(Math.floor(Math.random()*5)+1)]
// let randnoun = noun[(Math.floor(Math.random()*5)+1)]
// NO NECESITO ALEATORIEDAD --> NECESITO EXHAUSTIVIDAD
function randname() {
  const domainlist = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adje.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let newname = `${pronoun[i]}${adje[j]}${noun[k]}.com`;
        domainlist.push(newname);
      }
    }
  }
  return domainlist;
}
console.log(randname());
