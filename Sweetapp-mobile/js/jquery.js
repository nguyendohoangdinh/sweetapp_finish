$(document).ready(function(){
  $('#datetimepicker1').datetimepicker({
    format: 'L',
    icons: {
      next: "fa fa-chevron-right",
      previous: "fa fa-chevron-left"
    }
  });
  $('#pagetop').click(function(){
    $("html, body").animate({ scrollTop: 10 }, 100);
    return false;
  });
});