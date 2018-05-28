// Font Style
$('button').on('click', function(e) {
  var $this = $(this),
      action = $this.data("action");
  
  var aShowDefaultUI = false, aValueArgument = null;
  if($this.data('show-default-ui'))
    aShowDefaultUI = $this.data('show-default-ui');
  
  if($this.data('value-args'))    
    aValueArgument = $this.data('value-args');
  
  if($this.data('action') == 'createLink')
    aValueArgument = prompt("Please specify URL (including http protocol)", 'http://www.');
  
  if($this.data('action') == 'insertImage')
    aValueArgument = prompt("Please specify Image URL (including http protocol)", 'http://www.'); 
  
  document.execCommand(action, aShowDefaultUI, aValueArgument);
});


// Font Formatting Selects
$('select').on('change', function() {
  var $this = $(this),
      action = $this.data("action"),
      aValueArgument = $this.val(),     
      aShowDefaultUI = false;
  
  if($this.data('show-default-ui'))
    aShowDefaultUI = $this.data('show-default-ui'); 
  
  document.execCommand(action, aShowDefaultUI, aValueArgument);
});


// Image handling
$('img').on('click', function() {
  var $this = $(this);
  $this.toggleClass('right');
});