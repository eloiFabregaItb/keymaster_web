export const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÇÑ"

export const letterMap = {
	"À":"A",
	"Á":"A",
	"Â":"A",
	"Ã":"A",
	"Ä":"A",
	"Å":"A",
	"Æ":"A",
	"Ç":"Ç",
	"È":"E",
	"É":"E",
	"Ê":"E",
	"Ë":"E",
	"Ì":"I",
	"Í":"I",
	"Î":"I",
	"Ï":"I",
	"Ð":"D",
	"Ñ":"Ñ",
	"Ò":"O",
	"Ó":"O",
	"Ô":"O",
	"Õ":"O",
	"Ö":"O",
	"Ø":"O",
	"Ù":"U",
	"Ú":"U",
	"Û":"U",
	"Ü":"U",
	"Ý":"Y",
	"à":"A",
	"á":"A",
	"â":"A",
	"ã":"A",
	"ä":"A",
	"å":"A",
	"ç":"Ç",
	"è":"E",
	"é":"E",
	"ê":"E",
	"ë":"E",
	"ì":"I",
	"í":"I",
	"î":"I",
	"ï":"I",
	"ð":"O",
	"ñ":"Ñ",
	"ò":"O",
	"ó":"O",
	"ô":"O",
	"õ":"O",
	"ö":"O",

	"A":"A",
	"B":"B",
	"C":"C",
	"D":"D",
	"E":"E",
	"F":"F",
	"G":"G",
	"H":"H",
	"I":"I",
	"J":"J",
	"K":"K",
	"L":"L",
	"M":"M",
	"N":"N",
	"O":"O",
	"P":"P",
	"Q":"Q",
	"R":"R",
	"S":"S",
	"T":"T",
	"U":"U",
	"V":"V",
	"W":"W",
	"X":"X",
	"Y":"Y",
	"Z":"Z",

	'a':"A",
	'b':"B",
	'c':"C",
	'd':"D",
	'e':"E",
	'f':"F",
	'g':"G",
	'h':"H",
	'i':"I",
	'j':"J",
	'k':"K",
	'l':"L",
	'm':"M",
	'n':"N",
	'o':"O",
	'p':"P",
	'q':"Q",
	'r':"R",
	's':"S",
	't':"T",
	'u':"U",
	'v':"V",
	'w':"W",
	'x':"X",
	'y':"Y",
	'z':"Z",

}


export function calculateSCM(username, textId, time, wpm, errors){

  const a = Number(Number(time).toString(16).split("").filter(x=>!isNaN(x)).join(""))

  let b = 123
  const keys = Object.keys(errors)
  for(let i=0;i<keys.length;i++){
    const key = keys[i]
    const value = errors[key]
    const parsed = Number(key) * Number(value.err)

    b+= (i%2===0 ? parsed : -parsed)
  }
  b=Math.abs(b)

  const c = (textId * 17 + 12345) % 100000;
  const d = (wpm * 31 + 6789) % 100000;
  const e = username.split("").map(x=>x.charCodeAt(0)).reduce((acc,v)=>(acc*33+v)%1000)

  const checksum = a+b+c+d+e
  return checksum

}
