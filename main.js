function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {


        image(video, 50, 50, 560, 410);
        
        stroke(0);
        fill(255,50,0);
        ellipse( 50, 60, 80, 80);
        ellipse( 590, 60, 80, 80);
        ellipse( 590, 430, 80, 80);
        ellipse( 50, 430, 80, 80);
        fill(0, 255, 155)
        noStroke();
        
        ellipse( 95, 40, 70, 70);   
        ellipse( 145, 40, 70, 70);   
        ellipse( 195, 40, 70, 70);   
        ellipse( 245, 40, 70, 70);   
        ellipse( 295, 40, 70, 70);   
        ellipse( 345, 40, 70, 70);   
        ellipse( 395, 40, 70, 70);
        ellipse( 445, 40, 70, 70);
        ellipse( 495, 40, 70, 70);
        ellipse( 545, 40, 70, 70);
        
        ellipse( 50, 130, 90, 90);
        ellipse( 50, 190, 90, 90);
        ellipse( 50, 250, 90, 90);
        ellipse( 50, 310, 90, 90);
        ellipse( 50, 370, 90, 90);        

        ellipse( 590, 130, 90, 90);
        ellipse( 590, 190, 90, 90);
        ellipse( 590, 250, 90, 90);
        ellipse( 590, 310, 90, 90);
        ellipse( 590, 370, 90, 90);  
        
        ellipse( 95, 450, 70, 70);   
        ellipse( 145, 450, 70, 70);   
        ellipse( 195, 450, 70, 70);   
        ellipse( 245, 450, 70, 70);   
        ellipse( 295, 450, 70, 70);   
        ellipse( 345, 450, 70, 70);   
        ellipse( 395, 450, 70, 70);
        ellipse( 445, 450, 70, 70);
        ellipse( 495, 450, 70, 70);
        ellipse( 545, 450, 70, 70);
}

function take_snapshot() {
    save('selfie.png');
}
    
