$(document).ready(function(){

  $('.parent-type').change(function(e){
    if ($(this).is(':checked')){
        $(`input.${e.target.defaultValue}`).each(function(e){
            // sessionStorage.setItem(`setting-${$(this).attr('value')}`, true)
            $(this).prop('checked', true)
        })
    } else {
        $(`input.${e.target.defaultValue}`).each(function(e){
            $(this).prop('checked', false)
            // sessionStorage.removeItem(`setting-${$(this).attr('value')}`)
        })
    }
  })

  $('input').not('.parent-type').change(function(e){
    if ($(this).is(':checked')){
      // sessionStorage.setItem(`setting-${e.target.defaultValue}`, true)
      let allChecked = true
      $(`input.${$(this).attr('class').split(' ')[0]}`).each(function(){
        if (!$(this).prop('checked')){allChecked = false}
      })
      if (allChecked){
        $(`input[value=${$(this).attr('class').split(' ')[0]}]`).prop('checked', true)
      }
    } else {
      // sessionStorage.removeItem(`setting-${e.target.defaultValue}`)
      $(`input[value=${$(this).attr('class').split(' ')[0]}]`).prop('checked', false)
    }
  })

  $('.expand-settings').click(function(){
    $('.settings-popup').fadeToggle({'duration':200})
  })
})
