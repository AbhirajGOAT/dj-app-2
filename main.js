song = "";
song_2 = "";

function preload()
{
	song = loadSound("Shehzada.mp3");
	song_2 = loadSound("Aa2.mp3" );
}

function setup(){
    canvas = createCanvas(500, 600);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,500,600);
}