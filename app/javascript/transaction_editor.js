;
(function (window) {
  function init (config) {
    var oThis = this;
    var jUserToUser = $("#kind_user_to_user")
      , jForm       = $("#transaction_editor_form");

    // var jKind = jForm.find('.j-tx-kind:checked');
    // tx_kind = jKind.val();

    //console.log("tx_kind",tx_kind);
    if(jForm.find('#kind_user_to_user:checked') ){
      console.log("#kind_user_to_user  is true")
    }
    if(jForm.find('#kind_user_to_comapny:checked') ){
      console.log("#kind_user_to_company  is true")
    }
    if(jForm.find('#kind_company_to_user:checked')){
      console.log("#kind_company_to_user  is true")
    }
    $(".slider-with-input").on('input change',function () {
      console.log("it changed")
    })

  }








  $(document).ready(function () {
    init();
  });

})(window);