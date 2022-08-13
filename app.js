// Jag älskar att skriva kommentarer med // och inte HTML-varianten...

let listOfNumbers = [62, 131, 33, -235, 162];
let FirstArrayLength = listOfNumbers.length;

console.log("NewArray före: " + listOfNumbers);
console.log("Så många nummer storlekssorteras: " + FirstArrayLength);

function SortArrayByBiggest(listOfNumbers) {
  let newArray = [];
  // Jag ville använda while(newArray != []) men då kraschade kompilatorn
  for (let j = 0; j < FirstArrayLength; j++) {
    let max = listOfNumbers[0]; // Dessa deklareras och/eller tilldelas om vid varje körning i loopar?
    let GetArrayPos;
    for (let i = 0; i < listOfNumbers.length; i++) {
      // Ändra >= till <= för att sortera åt andra hållet!
      if (listOfNumbers[i] >= max) {
        max = listOfNumbers[i];
        GetArrayPos = i; // Hämta position för element i Array som skall splicas
      }
    }
    newArray.push(max); // Lägg till senast största siffra
    listOfNumbers.splice(GetArrayPos, 1); // Plocka bort element i Array i position i
  }
  return newArray;
}
console.log("NewArray efter: " + SortArrayByBiggest(listOfNumbers));
