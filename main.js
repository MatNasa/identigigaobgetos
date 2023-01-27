var status = "" ;
var objects = [] ;
var img = "" ;
function preload () {
    img = loadImage("perritos.jpg");
 }

 function setup () {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector( 'cocossd', modelLoaded );
    document.getElementById("status").innerHTML = "status detectando objetos" ;
   }

function modelLoaded () {
   console.log("modelo cargado");
   status = true ;
   objectDetector.detect( img, gotResult );
}

function gotResult ( error, results ) {
   if (error) {
      console.error( error );
   }

   else{
      console.log( results );
      objects = results ;
   }
}

 function draw () {
   image( img, 0, 0, 640, 420 );
   if (status != "" ) {
      for (index = 0 ; index < objects.length; index++) {
         fill( "#ff0000" ) ;
         percent = floor( objects[index].confidence*100 );
         text( objects[index].label +" "+ percent + "%", objects[index].x + 15 , objects[index].y + 15  );
         noFill();
         stroke( "#ff0000" );
         rect( objects[index].x, objects[index].y, objects[index].width, objects[index].height );
         console.log( index );
      }
   }
 }
