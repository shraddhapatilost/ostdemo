var metamakMsgsModal ;

window.addEventListener("load",function() {
	metamakMsgsModal = $("#metamaskMsgs");
	if(window.web3 !== undefined && web3.currentProvider && web3.currentProvider.isMetaMask){
	  console.log("metamask is installed")
		if(web3.eth.accounts == 0)
		{
			
			showModal("Please Unlock Metamask before you proceed");
		}
		}else {
			console.log("metamask is not installed");
			showModal("Please ensure that you have installed metamask before you proceed...");
		}
  });

  function showModal(msg)
  {
	  	console.log("in showModal");
	  	metamakMsgsModal.modal('show');
		metamakMsgsModal.find('.modal-body').html(msg);
  }
$(document).ready(function(){

	$("body").on('click','.indexItems',function(e){
		//e.preventdefault();
		// console.log("in here");
		var url = $(this).attr('href');
		//url = url.substring(2);
		url = url.replace("./views/", "");
		// console.log("url", url);
		setCookie(url);
	});

	function setCookie(urlValue){	
		// console.log(url)
		Cookies.set('url', urlValue,{path:'/app'});
		// console.log("in setCookie")
		// console.log(Cookies.get("url"));

	};

	$(".clearHome").on('click',function(){
		
		destroyCookie();
	});

	function destroyCookie(){
		console.log("in clearhome click");
	    	Cookies.clear("url",{path   : '/app'});  
    	var recentPage = Cookies.get("url");
    	console.log("after clear recentPage",recentPage);
          
    };

    $("#executeCodeBtn").on('click',function (){
    	var _html = document.getElementsByTagName('pre')[0].innerHTML;
    	console.log(_html);
    });
   

})

