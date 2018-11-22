$(document).ready(function(){

	

	$(".panel__rw").on( 'click', '.fa-heart', function(){

		var social__number = $(this).parent().parent().parent().children().eq(1).find(".social__number");
        var counter = social__number.text();
		counter = parseInt(counter);
		social__number.text(counter + 1);
		//$(this).toggleClass('blue');
        return false;
    });

   $(".panel__rw").on( 'click', '.fa-heart', function(e){
       $(this).parent().attr('class','card__like card__like--red');
       e.preventDefault();
      
       return false;
    });

   $("#form__twit").on('submit',function(e){

   		var texto = $(this).find("#comment").val();

   		if( texto == ""){
   			alert("Debe ingresar un comentario");
   			return false;
   		}
 
   		$("#panel__twits").append(
   			'<div class="twit__post col-md-12 col-sm-12 col-xs-12">'
   			+'<div class="card__profile-container--twt  col-md-1 col-sm-2 col-xs-2">'
			+'<img class="card__profile" src="./assets/img/blanquito.jpg" alt="">'
			+'</div>'
			+'<div class="col-md-8 col-sm-8 col-xs-8">'
			+'<h5><strong>Blanquito</strong> @blanquito_perro</h5>'
			+'</div>'
			+'<div class="col-md-1 col-sm-1 col-xs-1 twit__trash">'
			+'<a href="#" class="fas fa-times-circle twit__trash--icon"></a>'
			+'</div>'
			+'<div class="col-md-11 col-sm-11 col-xs-11 twit__coment">'
			+ texto
			+'</div>'
			+'<div class="col-md-12 col-sm-12 col-xs-12">'
			+'<div class="col-md-1 col-sm-1 col-xs-1">'
			+'<span class="card__like">'
			+'<i class="fas fa-heart"></i>'
			+'</span>'
			+'</div>'
			+'<div class="col-md-1 col-sm-1 col-xs-1">'
			+'<div class="social__number">0</div>'
			+'</div>'
			+'<div class="col-md-1 col-sm-1 col-xs-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">'
			+'<span class="social__coment" >'
			+'<i class="far fa-comment-alt"></i>'
			+'</span>'
			+'</div>'
			+'<div class="col-md-1 col-sm-1 col-xs-1">'
			+'<span class="social__retweet" >'
			+'<i class="fas fa-retweet"></i>'
			+'</span>'
			+'</div>'
			+'</div>'
			+'</div>'
   		);

   		$(this).find("#comment").val("");

   		e.preventDefault();
   });

   $(".panel__rw").on( 'click', '.twit__trash--icon', function(){
      $(this).parent().parent().remove();
    })



	// $(".twit").click('submit',function(e){
	// 	var text = $('#comment').val();
	// 	event.preventDefault();
	// 	$("this").append(
	// 			'<div class="col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-md-4 col-sm-4 col-xs-4 colright">'
	// 			+'<div class="twit__coment">'
	// 			+'text'
	// 			+'</div>'
	// 			+'</div>')

	// });




	// $(".twit__down-btn").click('submit',function(e){
	// 	$(this).append()
	// 	event.preventDefault();
	// });

	// $(".social__coment").click('click',function(e){
	// 	event.preventDefault();
	// });


	


	// $(".panel__rw").on( 'click', '.card', function(e){
	// 	$(this).toggleClass("card--open");
 //        e.preventDefault();
	// });

	
});