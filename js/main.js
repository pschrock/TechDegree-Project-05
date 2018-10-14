

baguetteBox.run('.gallery', {
  captions: true,
  titleTage: false
});


//Search
// Variables
const $srch = $('#search');
const $child = $('.list a');

//each key typed triggers evaluation
$srch.keyup(function () {
  const $crntsrch = $srch.val().toLowerCase();
  $child.each(function () {
    const $str = $(this).attr('data-caption').toLowerCase();


//compare text input for match with 'data-caption'
    if ($str.indexOf($crntsrch) < 0) {

//show only images that match
      $(this).hide();
    } else {
      $(this).show();
    }
  });
});
