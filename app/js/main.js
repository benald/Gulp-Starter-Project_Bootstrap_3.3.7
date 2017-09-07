// Page Load Spinner
// ============================================================================
// $(window).load(function () {

// 	if (!Modernizr.touch) {
// 		$('#Overlay').fadeOut('1000');
//     	$('#Wrapper').fadeIn('1000');
// 	}

// });

// Sticky Header
// ------------------------------------------------------------------------
$(window).scroll(function () {

	if ($(this).scrollTop() > 1) {
		$('#Header').addClass("sticky");
	}
	else {
		$('#Header').removeClass("sticky");
	}

});

// Scripts and Initialisations
// ============================================================================

$(document).ready(function () {
	// Enable buttons
	$('button').attr('data-uk-button', '');
    // Navigation
    $('.current').removeClass('current').addClass('uk-active');
    $('.link').removeClass('link').addClass('uk-link');
    $('.section').removeClass('section').addClass('uk-section');
	// Accordion
	$('.uk-accordion .uk-accordion-title').append('<i class="uk-icon-chevron-down uk-float-right"></i>');
    // Forms
    $('form').addClass('uk-form');
    $('form.userform').removeClass('userform');
    $('form.message').removeClass('message');
    $('form fieldset').attr('data-uk-margin', '').removeClass('fieldset');
	$('form .field').addClass('uk-form-row');
	$('form label').addClass('uk-form-label');
	$('form .optionset label').removeClass('uk-form-label');
	$('form .middleColumn').addClass('uk-form-controls');
    $('form input[type=text], form input[type=email], form input[type=password], form textarea, form select').addClass('uk-form-large uk-width-1-1');
	$('form input[type=checkbox]').removeClass('uk-form-large uk-width-1-1');
    $('form input[type=submit]').addClass('uk-button uk-button-primary');
    $('form input[type=reset]').addClass('uk-button-alert');
	$('form .Actions button').addClass('uk-form-large uk-width-1-1');
	$('form .Actions input').addClass('uk-form-large uk-width-1-1');

	// SEARCH - autocomplete
	var options = {
		url: "brand-autocomplete.json",

		getValue: "value",
		placeholder: "Start typing the brand name",

		list: {
			match: {
				enabled: true
			},
			sort: {
				enabled: true
			},
			showAnimation: {
				type: "fade", //normal|slide|fade
				time: 400,
				callback: function() {}
			},

			hideAnimation: {
				type: "slide", //normal|slide|fade
				time: 400,
				callback: function() {}
			}
		}
	};
    
	//$("#Form_NewListingForm_Brand_Holder input").attr("ID", "provider-json");
	//$("#provider-json").easyAutocomplete(options);

	// enable table styles
	$('table').addClass('uk-table uk-table-condensed uk-table-striped');

	// Format time
	var times = $('.format-time');
	times.each(function() {
		$(this).text(displayGmtAsLocalTime($(this).text()));
	});

	// Add class if li has child ul
	$('.uk-offcanvas .uk-nav li').each(function () {
		if ($(this).find('ul').length) {
			$(this).addClass("uk-parent");
			$(">a:eq(0)", this).before('<i class="fa fa-plus-square-o"></i>');
			$(">span:eq(0)", this).before('<i class="fa fa-2x fa-plus-square-o"></i>');
		}
	});

	// Expand or collapse depending on state
	$('.uk-offcanvas .uk-nav li.uk-parent > i.fa').on('click', function () {
		var element = $(this).parent('li');
		if (element.hasClass('uk-active')) {
			element.removeClass('uk-active');
			element.find('li').removeClass('uk-active');
			element.find('ul').slideUp();
			$('>i.fa', element).removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
		}
		else {
			element.addClass('uk-active');
			element.children('ul').slideDown();
			element.siblings('li').children('ul').slideUp();
			element.siblings('li').removeClass('uk-active').find('>i.fa').removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
			element.siblings('li').find('li').removeClass('uk-active').find('>i.fa').removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
			element.siblings('li').find('ul').slideUp();
			$('>i.fa', element).removeClass('fa-plus-square-o').addClass('fa-minus-square-o');
		}
	});
	$('.uk-offcanvas .uk-nav li.uk-active').parents('li').find('> i.fa').trigger('click');
});

function displayGmtAsLocalTime(gmtTime) {
	var utcDate = moment.utc(gmtTime);
	return utcDate.local().format("LT dddd Do MMM YYYY");
}

function goBack() {
	window.history.back();
}
