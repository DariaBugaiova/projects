

// let divChange = document.getElementsByClassName("button-hide");
// // let button - document.getElementsByClassName("scroll-up");

// // [].forEach.call(divChange, function(el){
// // 	el.addEventListener("click", changeButton(), false);
// // });
// divChange[0].addEventListener("click", changeButton, false);
// function changeButton(divChange){
// 	[].forEach.call(divChange, function(){

// 		let button = this.getElementsByClassName("scroll-up")[0];
// 		let ariaShow = this.getAttributeByName("aria-expanded");
// 		if(ariaShow) return button.class = "glyphicon-chevron-down";
// 		button.class = "";
// 		button.class = "glyphicon-chevron-up";
// 	})
// }



$('.button-hide').on('click', function(){
    let icon = $(this).find('.scroll-up');
    if(icon.hasClass('glyphicon-menu-down')) {
        icon.removeClass('glyphicon-menu-down');
        icon.addClass('glyphicon-menu-up');
        // document.getElementsByClassName('card-body')[0].setAttribute("style", "display:none");	

    } else {
    	icon.removeClass('glyphicon-menu-up');
    	icon.addClass('glyphicon-menu-down');
    	// document.getElementsByClassName('card-body')[0].setAttribute("style", "display:block");
}
});