$(document).ready(function(){

	$('.filter').click(function(e){
		$('.project').show()
		var filter = $(this).attr('data-filter')
		if (filter !== 'all'){
			$('div.project').not(`.${filter}`).hide()
		}

	})

	$('.na-li').hover(
		function(){
			$(this).siblings().css('display', 'inline')
		},
		function(){
			$(this).siblings().css('display', 'none')
		}
	)

	$('#academic').addClass('active')
	
	$('#academic').click(function(){
		$('.content').show()
		$('#academic').addClass('active')
		$('.technical').hide()
		$('#technical').removeClass('active')
	})

	$('#technical').click(function(){
		$('.technical').show()
		$('#technical').addClass('active')
		$('.content').hide()
		$('#academic').removeClass('active')
	})
})