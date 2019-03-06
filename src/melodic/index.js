import $ from 'jquery'
import { data as mp3_info } from './modules/data.js'
import renderVF from './modules/vfrender.js'


$(document).ready(function(){

	//const chapter = $(this).data('chapter');
	var chapter = $('.new-mel').data('chapter');
	const mp3_num = Object.keys(mp3_info[chapter]).length;
	var prev = new Array(4);
	console.log('belllweewfw')

	$('.new-mel').click(function(e){
		$('.answer').text('Show answer');
		$('.counter').text(0);
		if ($('.mel').hasClass('hidden')){
			$('.mel').removeClass('hidden');
		}
		var n = Math.floor(Math.random() * mp3_num);
		var old_n = n;
		var i = 0;
		while (prev[n] == 'x' && i < mp3_num){
			n = ((n+1) % mp3_num);
			i = i+1;
		}
		if (i == mp3_num){
			$('.mel').empty();
			var p = $('<p></p>').html('You have listened to all melodies from this chapter. Please refresh your browser window to start over.');
			$('.mel').append(p);
		} else {
			prev[n] = 'x';
			var start = mp3_info[chapter][n].start;
			var meter = mp3_info[chapter][n].meter;
			var dur = mp3_info[chapter][n].dur;
			var acc = mp3_info[chapter][n].acc;
			var dot = mp3_info[chapter][n].dot;
			$('.answer').data('exercise', mp3_info[chapter][n].num);
			renderVF(meter,start,dur,acc,dot);
			$('audio').attr('src', mp3_info[chapter][n].src);
		}
	});


	$('.play').click(function(){
		const audio = document.querySelector('audio');
		audio.currentTime = 0;
		audio.play();
		var counter = parseInt($('.counter').text());
		counter = counter+1;
		$('.counter').text(counter);
	});


	$('.answer').click(function(){
		var exercise = $(this).data('exercise');
		$(this).text(`Exercise ${exercise}`);
	});

});
