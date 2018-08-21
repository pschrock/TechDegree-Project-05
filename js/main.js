baguetteBox.run('.gallery', {
  captions: true,
  titleTage: false
});

$(document).ready(function() {
	$('#search').hideseek({
    list      :  '.hideseek-data',
    matches   :  true,
    attribute :  'data-caption'
  });
});
