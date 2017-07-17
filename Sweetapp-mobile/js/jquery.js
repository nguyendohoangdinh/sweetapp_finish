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
var Validate = {
  init: function(){
    this.validateEmail();
  },
  validateEmail: function(){
    $("#infomation-member").on("click", function(e){
      e.preventDefault();
      var erro = 0;
      var numCode1 = $('input[class="num-code1"]').val()
      var numCode2 = $('input[class="num-code2"]').val()
      var regexNumric = new RegExp(/^\+?[0-9(),.-]+$/);
      if (!regexNumric.test(numCode1) || !regexNumric.test(numCode2)) {
        $(".alert-code").show();
        ++erro;
      } else {
        $(".alert-code").hide();
      }
      if(!erro > 0){
        $('section').submit();
        alert('Nhap thong tin chinh xac!!!!');
      }
    });
  },
};