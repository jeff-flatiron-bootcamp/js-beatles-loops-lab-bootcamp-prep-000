// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var returnArray = [];  
  for(let counter = 0; counter <= musicians.length-1; counter++)
  {
    returnArray.push(`${musicians[counter]} plays ${instruments[counter]}`);
  }
  return returnArray;
}

function johnLennonFacts(facts)
{
  let counter = 0;
<<<<<<< HEAD
  while(facts[counter] !== undefined)
  {
    facts[counter] = facts[counter] + '!!!';
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(number)
{
  let returnArray = [];
  do
  {
    returnArray.push("I love the Beatles!");
    number++;
  } while(number < 15)
  return returnArray;
  
}
=======
  while(facts[counter] !== 'undefined')
  {
    facts[counter] = facts[counter] + '!!!';
  }
  return facts;
}
>>>>>>> eb806e1b69526a8fd4ceb0595d1c491d56d11706
