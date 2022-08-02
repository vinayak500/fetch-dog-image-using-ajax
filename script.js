function fetchRandomDogImage(){
    // var xhrRequest = new XMLHttpRequest();

    // xhrRequest.onload = function(){
    //          console.log(xhrRequest.response);
    //          var responseJSON = JSON.parse(xhrRequest.response);
    //          var iamgeUrl = responseJSON.message;
    //          $('#dog-image').attr('src' , iamgeUrl);
    // };
    // xhrRequest.onerror = function(){
    //     console.log("Request failed");
    // };
    // //synchronous - false
    // xhrRequest.open('get' ,'https://dog.ceo/api/breeds/image/rdom' , true);
    // xhrRequest.send('');




// $.ajax({
//     url:'https://dog.ceo/api/breeds/image/random',
//     method:'GET',
//     //response is in data
//     success : function(data){
//        // var responseJSON = JSON.parse(xhrRequest.response);
//        //no need of parsing , it is already in JSON format
//         var iamgeUrl = data.message;
//         $('#dog-image').attr('src' , iamgeUrl);
//     }
// }).fail(function(){
//     console.log('Request failed');
// });



// ultimately jquery will be making xhrRequest
$.get('https://dog.ceo/api/breeds/image/random' ,  function(data){
     var iamgeUrl = data.message;
     $('#dog-image').attr('src' , iamgeUrl);
 }).fail(function(){
     console.log('Request failed');
 });
}






$('#fetch-image-button').click(fetchRandomDogImage);