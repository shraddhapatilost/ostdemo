
  var metamakMsgsModal;

  window.addEventListener("load",function() {
	  metamakMsgsModal = $("#metamaskMsgs");
	  if(window.web3 !== undefined && web3.currentProvider && web3.currentProvider.isMetaMask){
		  if(web3.eth.accounts == 0){showModal("Please Unlock MetaMask before you proceed");}
		}
    else {
			showModal("Please ensure that you have installed MetaMask before you proceed");
		}
  });

  function showModal(msg){
    metamakMsgsModal.modal('show');
    metamakMsgsModal.find('.modal-body').html(msg);
  }

  $(document).ready(function(){

    $("body").on('click','.indexItems',function(e){
      var url = $(this).attr('href');
      url = url.replace("./views/", "");
      setCookie(url);
    });

    function setCookie(urlValue){
      Cookies.set('url', urlValue,{path:'/app'});
    }

    $(".clearHome").on('click',function(){
      destroyCookie();
    });

    function destroyCookie(){
      Cookies.clear("url",{path   : '/app'});
      var recentPage = Cookies.get("url");
    }

    $("#executeCodeBtn").on('click',function (){
      var _html = document.getElementsByTagName('pre')[0].innerHTML;
    });

  });

