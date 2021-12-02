function sendmail() {
	var msg = document.getElementById("message").value; 
	// document.getElementByTagId("send-msg")[0].setAttribute("href", 
	// "mailto:hm.bensarghin@gmail.com?subject=Feedback for webdevelopersnotes&body="+msg);
	window.open("mailto:hm.bensarghin@gmail.com?subject=Feedback for webdevelopersnotes&body="+msg);

	//alert(msg);
}