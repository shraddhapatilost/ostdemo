var global_actions = [
  {
  action_name: "Upvote",
    action_kind : "user to user",
    value_bt : "5",
    commission : "20.00"
  },
  {
    action_name:"Reward",
    action_kind : "company to user",
    value_bt : "2",
    commission : "NA"
  },
  {
    action_name:"Purchase",
    action_kind : "user to user",
    value_bt : "8",
    commission : "1.00"
  },
  {
    action_name:"Download",
    action_kind : "user to company",
    value_bt : "1",
    commission : "NA"
  }]

  var kind_map = {
    "user to user" : "kind_user_to_user",
    "user to company" : "kind_user_to_company",
    "company to user" : "kind_company_to_user"
  }
  ;

  $(document).ready(function () {
    init();
  });

  function init (config) {
    appendList();
    bindEvents();

  }

  function appendList() {
    $('#listid').html("");

    for (var i = 0; i < global_actions.length; i++) {

      var name = global_actions[i].action_name;
      var action_kind = global_actions[i].action_kind;
      var value_bt = global_actions[i].value_bt;
      var commission = global_actions[i].commission;

      $("#listid").append("<div class=\"transaction-cell col-12\" >\n" +
        "                  <div class=\"row\">\n" +
        "                  <div class=\"col-3 name-field\">"+name+"<br><div class=\" type-field font-weight-light\" >"+ action_kind+"</div></div>\n" +
        "                  <div class=\"col-3 value-bt-field\">"+value_bt+"</div>\n" +
        "                  <div class=\"col-3 p-0 commission-field\">"+commission+"</div>\n" +
        "                  <div class=\"col-3\">\n" +
        "                  <button class=\"showApiCallBtn btn btn-info slider-btn\">\n" +
        "                  <span class=\"align-middle\">API Call</span>\n" +
        "                  </button>\n" +
        "                  <button href=\"javascript:void(0)\" class=\"rounded-circle \" id=\"rc"+i+"\" data-result-id=\"{{id}}\" title=\"Edit\">\n" +
        "          edit    </button>"+
        "                  </div></div></div>");
    }
  }

  function bindEvents() {
    $("#create_transaction_btn").on('click',function () {
      $("#createActionModal").modal('show');
    });

    $('.add-action').on('click', function() {
      var newData = getFormData();
      global_actions.push(newData);
      appendList();
      $('#commission_percent_slider').slider('setValue',0);

      $("#transaction_editor_form")[0].reset();


    });

    $(".close").on("click",function () {
      $('#edit_commission_percent_slider').slider('setValue',0);
      $("#edit_action_form")[0].reset();
      $('#commission_percent_slider').slider('setValue',0);

      $("#transaction_editor_form")[0].reset();

    })
    $(".cancel-action").on("click",function () {
      $('#commission_percent_slider').slider('setValue',0);
      $("#transaction_editor_form")[0].reset();
      $('#edit_commission_percent_slider').slider('setValue',0);
      $("#edit_action_form")[0].reset();

    })
    $("#listid").on('click','.rounded-circle',function () {
      $("#editActionModal").modal('show');
      var id = $(this).attr('id')

      console.log("id",id)
      id = id.substring(2);
      $("#actionId").val(id);
      console.log("global_actions",global_actions[id]);
      setFormData(global_actions[id]);

    })

    $(".update-action").on('click',function () {

      var id = $("#actionId").val();
      var newData = getEditFormData();
      global_actions[id] = newData;
      appendList();
      $('#edit_commission_percent_slider').slider('setValue',0);

      $("#edit_action_form")[0].reset();

    })

  }

  function getFormData(){
      var jForm       = $("#transaction_editor_form");
      var newEntry ={};

      newEntry.action_name = $("#transaction_name").val();
      newEntry.action_kind = $('.j-tx-kind:checked').val();
      newEntry.value_bt = $('.action-amount').val();
      newEntry.commission = $('#commission_percent_slider').val();

      return newEntry;
  }

  function getEditFormData(){
      var jForm       = $("#transaction_editor_form");
      var newEntry ={};
      newEntry.action_name = $("#transaction_edit_name").val();
      newEntry.action_kind = $('.j-edit-tx-kind:checked').val();
      newEntry.value_bt = $('#edit_value_in_bt').val();
      newEntry.commission = $('#edit_commission_percent').val();
      return newEntry;
  }

  function setFormData(data) {
      var kind = kind_map[data.action_kind];
      console.log("kind",kind)
      $("#"+kind).prop("checked",true);
      $("#transaction_edit_name").val(data.action_name);
      $("#edit_value_in_bt").val(data.value_bt);

      if(data.commission !== "NA"){
        console.log('commission',data.commission);
        $('#edit_commission_percent_slider').slider('setValue',data.commission);
        $('#edit_commission_percent').val(data.commission);
      }
      else{
        $('#edit_commission_percent').val("1");
        }
    }
