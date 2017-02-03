$(function(){
	$(".navLk__item ").on('click', function(){
		var section = $(this).data('section');

		$(this).siblings().removeClass('navLk__item-active').end().addClass('navLk__item-active');

		$('.slideSection').addClass('hide');
		$('#'+section).removeClass('hide');

		return false;
	});
	$('#menu-toggle').on('click', function(){
		$('.navLk').slideToggle();
		return false;
	});

	$('.rate__buy').on('click', function(){
		$('.payment').show();
	});
	$('.payment__button2').on('click', function(){
		$('.payment').hide();
	});
	$('.rate__headerLink').on('click', function(){
		var tab = $(this).data('tab');
		$(this).siblings().removeClass('rate__headerLink-active').end().addClass('rate__headerLink-active');

		$('.rate__row').addClass('hide');
		$('#rate__row'+tab).removeClass('hide');
		return false;
	})
})
