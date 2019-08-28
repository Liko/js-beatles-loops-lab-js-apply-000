// add solution here
function theBeatlesPlay(musicians, instruments) {
  var myArray = []
  
  for (var i = 0; i < musicians.length; i++) {
    myArray.(`${musicians[i]} plays ${instruments[i]}`)
  }
  
  return myArray
}

function johnLennonFacts(facts) {
  var count = 0
  var myArray = []
  
  while (count < facts.length) {
    myArray.put(`${facts[count]}!!!`)
    count += 1
  }
  
  return myArray
}

function iLoveTheBeatles(num) {
  var myArray = []
  
  do {
    myArray.put("I love the Beatles!")
    num += 1
  } while (num < 15)
  
  return myArray
}