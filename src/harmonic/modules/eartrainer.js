import $ from 'jquery'
import context from './audiosetup.js'
import { setClasses, audio } from './data.js'
import { pitch, invert } from './trichords.js'
import { getRandomInt } from './utils.js'
import { BufferLoader } from './bufferloader.js'


function incrementCounter() {
  var counter = parseInt($('.counter').text());
  counter = counter+1;
  $('.counter').text(counter);
}

export function newTrichord() {
  var trichords = new Array()
  for (var i = 0; i < localStorage.length; i++){
    var key = localStorage.key(i)
    if (key in setClasses){
      if (localStorage.getItem(key) == 'true'){ // need STRING 'true'
        trichords.push(key)
      }
    }
  }
  var trichord = invert(trichords[getRandomInt(0,trichords.length)])
  var pitches = pitch(trichord)
  localStorage.setItem('currentTrichord', trichord)
  localStorage.setItem('currentPitches', JSON.stringify(pitches))
  console.log(audio[pitches[0]])
  for (var i = 0; i < pitches.length; i++) {
    $(`audio[data-pitch="${i}"]`).attr('src', audio[pitches[i]])
  }
}

function playPitches(pitches) {
  var srcs = []
  for (var i = 0; i < pitches.length; i++) {
    if (pitches[i]) {
      srcs.push($(`audio[data-pitch="${i}"]`).attr('src'))
    }
  }
  var bufferLoader = new BufferLoader(context, srcs, finishLoading)
  bufferLoader.load()
}


export function finishLoading(bufferList){
  for (var i = 0; i < bufferList.length; i++) {
    var source = context.createBufferSource()
    source.buffer = bufferList[i]
    source.connect(context.destination)
    source.start(0)
  }
}


export function eartrainer() {
  $('.counter').text(0)
  $('.new-chord').click(function(){
    $('.answer').text('Show answer')
    $('.counter').text(0)
    newTrichord()
  })

  $('.play').click(function(){
    console.log(localStorage.getItem('currentTrichord'))
    var pitches = JSON.parse(localStorage.getItem('currentPitches'))
    if ($(this).hasClass('top')) {
      playPitches([0,1,1])
    } else if ($(this).hasClass('bottom')) {
      playPitches([1,1,0])
    } else if ($(this).hasClass('outer')) {
      playPitches([1,0,1])
    } else {
      playPitches([1,1,1])
    }
    incrementCounter()
  })

  $('.answer').click(function(){
    var isTn = false
    for (var key in setClasses) {
      if (setClasses[key] == localStorage.getItem('currentTrichord')) {
        $(this).text(`(${key})`)
        isTn = true
      }
    }
    if (!isTn) {
      $(this).text(`(${localStorage.getItem('currentTrichord')})`)
    }
  })
}
