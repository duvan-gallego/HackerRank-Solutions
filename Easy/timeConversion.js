



// Split 12h time in hh, mm, ss, AM/PM
const splitTimeString = (time) => {

  if (!time) return

  const timeSplitted = time.trim().split(":")

  const hh = timeSplitted[0]
  const mm = timeSplitted[1]
  const ss = timeSplitted[2].slice(0, 2);
  const AMPM = timeSplitted[2].slice(2, 4);

  return {
    hh, mm, ss, AMPM
  }
}



const timeConversion = (s) => {

  const { hh, mm, ss, AMPM } = splitTimeString(s);
  let timeConverted = ''

  if (AMPM == 'AM') {

    if (hh == '12') {
      timeConverted += '00'
    } else {
      timeConverted += hh
    }
  } else {
    let HH = 0;

    if (hh == 12) {
      timeConverted += hh
    } else {
      timeConverted += parseInt(hh) + 12
    }
  }

  timeConverted += `:${mm}:${ss}`


  return timeConverted
}



console.log(timeConversion('12:01:45AM'))