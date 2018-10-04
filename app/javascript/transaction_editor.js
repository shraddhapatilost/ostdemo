;
(function (window) {
  function init (config) {
    var oThis = this;
    var jUserToUser = $("#kind_user_to_user")
      , jForm       = $("#transaction_editor_form");


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


    $("#transaction_editor_submit_btn").on("click",function () {

      var newData = getFormData();
      console.log("newData", newData);
      global_actions.push(newData);
      console.log("global_actions",global_actions);

    });
    $("#transaction_editor_cancel_btn").on("click",function () {


    })
  }



  function getFormData(){
    var jForm       = $("#transaction_editor_form");
    var newEntry ={};

    newEntry.action_name = $("#transaction_name").val();
    newEntry.action_kind = $('.j-tx-kind:checked').val();
    newEntry.value_bt = $('.j-action-amount-setting').val();
    newEntry.commission = $('.j-action-amount-setting').val();

    return newEntry;
  }







  $(document).ready(function () {
    init();
  });

})(window);