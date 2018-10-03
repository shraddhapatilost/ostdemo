;
(function (window) {
  function init (config) {
    var oThis = this;
    var jUserToUser = $("#kind_user_to_user")
      , jForm       = $("#transaction_editor_form");

    // var jKind = jForm.find('.j-tx-kind:checked');
    // tx_kind = jKind.val();

    //console.log("tx_kind",tx_kind);
    // if(jForm.find('#kind_user_to_user:checked') ){
    //   console.log("#kind_user_to_user  is true")
    // }
    // if(jForm.find('#kind_user_to_comapny:checked') ){
    //   console.log("#kind_user_to_company  is true")
    // }
    // if(jForm.find('#kind_company_to_user:checked')){
    //   console.log("#kind_company_to_user  is true")
    // }

    jForm.find('.j-tx-kind').change( function () {
      toggleCommissionsRow();


    });
    jForm.find('.j-action-amount-setting').change(function () {
      toggleActionAmountRow();
    });
    function toggleActionAmountRow(){
      var jEl       = jForm.find('.j-action-amount-setting:checked')
        , val       = jEl.val()
      ;
      console.log("val",val);
      if(val === "true"){
        jForm.find("#j-action-amount-wrap").slideUp(300);
      }
      else{
        jForm.find("#j-action-amount-wrap").slideDown(300);

      }
    }

     function toggleCommissionsRow () {


      var jEl       = jForm.find('.j-tx-kind:checked')
        , val       = jEl.val()
      ;

      if ( "user_to_user" === val ) {
        jForm.find("#commission-options-row").slideDown( 300 );
      } else {
        jForm.find("#commission-options-row").slideUp( 300 );
      }

    }
    // $(".slider-with-input").on('input change',function () {
    //   console.log($('#commission_percent_slider').val());
    //   var sliderResult =  $('#commission_percent_slider').val()
    //   $("#slider-result").val(sliderResult);
    // })

    $('#commission_percent_slider').slider({
      formatter: function(value) {
        return 'Current value: ' + value;
      }
    });

    var jCommission             = $("#commission_percent");
    var jValueInFiat            = $("#value_in_fiat");
    console.log("jCommission",jCommission.length);
    var vCommission = jCommission.val()
      , vFiat       = jValueInFiat.val()
    console.log("vCommission",vCommission);

    // var jValueInOst             = $("#value_in_ost");
    // cInFiat     = vFiat.times( vCommission ).div( 100 );
    //
    // oThis.jCInBt.setVal( toBt( cInBt ) );
    //
    //  function toBt ( bt ) {
    //   var oThis = this;
    //
    //   if ( oThis.isNaN( bt ) ) {
    //     return NaN;
    //   }
    //   bt = BigNumber( bt );
    //   return BigNumber( bt.toFixed(P_BT, P_BT_ROUND_ROUNDING_MODE) );
    // }

  }








  $(document).ready(function () {
    init();
  });

})(window);