// add solution here
function theBeatlesPlay(musicians, instruments) {
  myArray = []
  
  for (var i = 0; i < musicians.length; i++) {
    myArray.put(`${musicians[i]} plays ${instruments[i]}`)
  }
  
  return myArray
}

function johnLennonFacts(facts) {
  count = 0
  myArray = []
  
  while (count < facts.length) {
    myArray.put(`${facts[count]}!!!`)
    count += 1
  }
  
  return myArray
}

function iLoveTheBeatles(num) {
  myArray = []
  
  do {
    myArray.put("I love the Beatles!")
  }
}