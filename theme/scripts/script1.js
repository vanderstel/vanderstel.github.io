$(document).ready(function() {

	$('.filter').click(function(e) {
		$('.project').css('opacity', '1')
		var filter = $(this).attr('data-filter')
		if (filter !== 'all') {
			// Why is .fadeTo(500, 0.1) not working here?
			$('div.project').not(`.${filter}`).css('opacity', '0.2')
		}

	})

	$('.na-li').hover(
		function() {
			$(this).siblings().css('display', 'inline')
		},
		function() {
			$(this).siblings().css('display', 'none')
		}
	)

	$('#academic').addClass('active')

	$('#academic').click(function() {
		$('.content').show()
		$('#academic').addClass('active')
		$('.technical').hide()
		$('#technical').removeClass('active')
	})

	$('#technical').click(function() {
		$('.technical').show()
		$('#technical').addClass('active')
		$('.content').hide()
		$('#academic').removeClass('active')
	})
})
