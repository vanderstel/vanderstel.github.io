import $ from 'jquery'
import { newTrichord } from './eartrainer.js'


const checkboxOptions = {
  setLS: function($) {
    if ($.prop("checked")){
      localStorage.setItem($.val(), true)
    } else {
      localStorage.setItem($.val(), false)
    }
  },
  setChecked: function() {
    $('input[type="checkbox"]').each(function(){
      if (localStorage.getItem($(this).val()) == 'true'){
        $(this).prop("checked", true)
      } else $(this).prop("checked", false)
    })
  },
  anyChecked: function() {
    var any = false
    $('input[type="checkbox"]').each(function(){
      if ($(this).prop("checked")) any = true
    })
    return any
  }
}


function disableStart() {
  if (checkboxOptions.anyChecked()){
    $('.start').removeClass('disabled')
  } else $('.start').addClass('disabled')
}


export function checkboxInterface() {

  let { setLS, setChecked, anyChecked } = checkboxOptions

  $(document).ready(function(){
    setChecked()
    disableStart()
    if (typeof(Storage) == 'undefined') console.log("Your browser does not support local storage")
    else console.log("Your browser supports local storage")
  })

  $('.select-all').click(function(){
    $('input[type="checkbox"]').each(function(){
      $(this).prop("checked", true)
      setLS($(this))
    })
    disableStart()
    $('.trichord-eartrainer').addClass('hidden')
  })

  $('.unselect-all').click(function(){
    $('input[type="checkbox"]').each(function(){
      $(this).prop("checked", false)
      setLS($(this))
    })
    disableStart()
    $('.trichord-eartrainer').addClass('hidden')
  })

  $('input[type="checkbox"]').change(function(){
    disableStart()
    setLS($(this))
    $('.trichord-eartrainer').addClass('hidden')
  })


  $('.start').click(function(){
    $('.trichord-eartrainer').removeClass('hidden')
    $(this).addClass('disabled')
    newTrichord()
    $('.answer').text('Show answer')
    $('.counter').text(0)
  })
}
