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

  return textArr
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