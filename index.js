var katzDeliLine = [];

var ticketNumber = 0

function takeANumber(katzDeliLine){
  ticketNumber = ticketNumber + 1
 katzDeliLine.push(ticketNumber);
  return `Welcome, ticket #${ticketNumber}`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    var serving = katzDeliLine.shift();
      return `Currently serving ${serving}.`;
  } else {return 'There is nobody waiting to be served!'}
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return 'The line is currently empty.'
  }
    
    var numberName = [];
    
  for (let i = 0; i < katzDeliLine.length; i++){
    numberName.push(`${i + 1}. ${katzDeliLine[i]}`)
   }
   return `The line is currently: ${numberName.join(', ')}`
}