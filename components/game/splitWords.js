import { letterMap } from "~/utils/letters.js"


//separa el texto en un array tipo
//[["h","o","l","a"],[" "],["m","u","n","d","o"]]
export function splitText(text) {
  const textArr = []

  const words = text.split(" ")

  for (let i = 0; i < words.length; i++) {
    textArr.push(words[i].split("").map(x => ({ char: x, err: 0 })))
    if (i < words.length - 1) {
      textArr.push([{ char: " ", show: "·", err: 0 }])
    }
  }

  return textArr.flatMap(x=>x.length>20 ? splitLongArray(x) : [x])
}



export function getErrorsForWords(textArr){


  const resultData = {}

  let charIndex = 0
  for (const word of textArr) {
    for (const {char,err} of word) {
      const originalChar = letterMap[char] //char without punctuation

      if(err){
        resultData[charIndex] = {
          char,
          letter:originalChar,
          err
        }
      }

      charIndex++
    }
  }

  return resultData
}






export function splitBigText(text){
	const min = 80

	const words = text.split(" ").flatMap(word=>word.split("\n")).flatMap(x=>x===""?[]:x)

  // const words = prewords.flatMap(x=> x.length > 20 ? splitLongWord(x) : x)

	const texts = []
	let buffer = ""

	for (const word of words) {
		if(buffer===""){
			buffer = word
		}else{
			buffer += " " + word
		}


		if(buffer.length>min){
			texts.push(buffer)
			buffer = ""
		}
	}

	if(buffer.length>0){
		texts.push(buffer)
	}

	return texts

}


function splitLongWord(word, segmentLength = 20) {
  const segments = [];
  for (let i = 0; i < word.length; i += segmentLength) {
    segments.push(word.slice(i, i + segmentLength));
  }
  return segments;
}

function splitLongArray(arr, segmentLength = 20) {
  const segments = [];
  // Loop over the array in chunks
  for (let i = 0; i < arr.length; i += segmentLength) {
    // Extract a subarray of the specified segment length
    const subarray = arr.slice(i, i + segmentLength);
    segments.push(subarray);
  }
  return segments;
}
