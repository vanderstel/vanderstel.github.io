import { setClasses, inverted } from './data.js'
import { getRandomInt } from './utils.js'

export function invert(trichord) {
  let bool = getRandomInt(0,2)
  if (bool) return trichord
  else return setClasses[trichord]
}


export function pitch(trichord) {
  var trans = getRandomInt(0,24)
  var triArray = new Array()
  for (var i = 0; i < trichord.length; i++) {
    triArray.push(parseInt(trichord[i])+trans+53)
  }
  return triArray
}
