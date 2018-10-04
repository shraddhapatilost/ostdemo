global_actions = [
  {
  action_name: "Upvote",
    action_kind : "user to user",
    value_bt : "5",
    commission : "1.00%"
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
    commission : "1.00%"


  },
  {
    action_name:"Download",
    action_kind : "user to company",
    value_bt : "1",
    commission : "NA%"


  }]


;
(function (window) {
  function init (config) {
    for (var i = 0; i < global_actions.length; i++) {
      console.log("global_actions", global_actions[i]);
      var name = global_actions[i].action_name;
      var action_kind = global_actions[i].action_kind;
      var value_bt = global_actions[i].value_bt;
      var commission = global_actions[i].commission;

      $("#listid").append("<div class=\"transaction-cell col-12\" >\n" +
        "                    <div class=\"row\">\n" +
        "                        <div class=\"col-3 name-field\">"+name+"<br><div class=\" type-field font-weight-light\" >"+ action_kind+"</div></div>\n" +
        "                        <div class=\"col-3 value-bt-field\">"+value_bt+"</div>\n" +
        "                        <div class=\"col-3 p-0 commission-field\">"+commission+"</div>\n" +
        "<div class=\"col-3\">\n" +
        "    <button class=\"showApiCallBtn btn btn-info slider-btn\">\n" +

        "      <span class=\"align-middle\">API Call</span>\n" +
        "    </button>\n" +
        "    "+
        "<button href=\"javascript:void(0)\" class=\"rounded-circle \" data-result-id=\"{{id}}\" title=\"Edit\">\n" +

        "          edit    </button>"+
        "                    </div></div></div>");
    }
  }








$(document).ready(function () {
  init();
});

})(window);