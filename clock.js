var slider;
var angle;
function setup() {
 createCanvas(1000,1000);
 background(0);
 angleMode(DEGREES);
 slider=createSlider(0, 180, 90, 0.01);
}
function draw () {
    // drawClock();
    fiboExperiment();
    // tenPrint();
    // pattern2();
   	// drawRecursionTree(200);
}
function recursionTree(step) {
    stroke(255);
    line(0,0,0,step);
    translate(0,step);
    if(step>4){
    push();
    rotate(angle);
    recursionTree(step*0.7);
    pop();
    // push();
    // rotate(2*angle);
    // recursionTree(step*0.5);
    // pop();
    // push();
    // rotate(-2*angle);
    // recursionTree(step*0.5);
    // pop();
    push();
    rotate(-angle);
    recursionTree(step*0.7);
    pop();
    }
}

function drawRecursionTree(step) {
    background(0);
    translate(width/2,height);
    rotate(180);
    angle=slider.value();
    recursionTree(step);
    // rotate(angle)
    // recursionTree(step)
    // rotate(-angle)
    // recursionTree(step)

}

















n1=1; n2=0; f=''+n2; tx=0;ty=0; space=20; space2=20;
function fiboExperiment() {
    translate(900,700);
    strokeWeight(6);
    point(0,0);
    strokeWeight(2)
    rotate(90);
    background(0);
    stroke(255);
    noFill();
    drawPattern();
    if(f.length<=5000){
    f=''+n2+n1;
    let temp=n2;
    n2=f;
    n1=temp;
    }
}

function tenPrint(){
    stroke(255);
    if(random(1)>=0.5){
        // stroke(random(255),random(255),random(255));
        // strokeWeight(random(2,8));
        line(tx,ty,tx+space,ty+space);
    }else{
        // strokeWeight(random(2,8));
        // stroke(random(255),random(255),random(255));
        line(tx,ty+space,tx+space,ty);
    }
    tx+=space;
    if(tx>width){
        tx=0;
        ty+=space2;
    }
}

x=[0,0,0];
function drawClock() {
    background(0);
    fill(255);
    noStroke();
    //text(hour()+':'+minute()+':'+second(),10,200);
    translate(200, 200);
    noFill();

    push();
    rotate(x[0]++);
    let hourAngle = map(hour()%12, 0, 12, 0, 360);
    stroke(255,100,150);
    strokeWeight(4);
    arc(0, 0, 300, 300, 0, hourAngle);
    pop();

    push();
    rotate(x[1]--*1.5);
    let minuteAngle = map(minute(), 0, 60, 0, 360);
    stroke(150,100,255);
    strokeWeight(4);
    arc(0, 0, 280, 280, 0, minuteAngle);
    pop();

    push();
    rotate(x[2]++*3);
    let secondAngle = map(second(), 0, 60, 0, 360);
    stroke(100,255,150);
    strokeWeight(4);
    arc(0, 0, 260, 260, 0, secondAngle);
    pop();

    rotate(-90);

    push();
    rotate(minuteAngle);
    stroke(150,100,255);
    strokeWeight(4);
    line(0, 0, 100, 0);
    pop();
    
    push();
    rotate(hourAngle);
    stroke(255,100,150);
    strokeWeight(4);
    line(0, 0, 70, 0);
    pop();

    push();
    rotate(secondAngle);
    stroke(100,255,150);
    strokeWeight(2);
    line(0, 0, 110, 0);
    pop();

    stroke(255);
    point(0, 0);
}

function drawPattern() {
    f.split('').forEach((element,i,w) => {
        line(0,0,0,2.5);
        translate(0,2.5);
        if(element==0){
            if(!((i+1)%2)){
                stroke(255,100,150);
                rotate(-90);
            }else{
                stroke(100,15,255);
                rotate(90);
            }
        }
    });
}

time=0; pattern2point=[];
function pattern2() {
    stroke(255);
    noFill();
    translate(height/2,width/2);
    //scale(0);
    let dt=0.3;
    let x=cos(time)+cos(6*time)/2+sin(14*time)/3;
    let dx= (-sin(time)-3*sin(6*time)+14*cos(14*time)/3)*dt;
    let y=sin(time)+sin(6*time)/2+cos(14*time)/3;
    let dy =( cos(time)+3*cos(6*time)/2-14*sin(14*time)/3)*dt;
    pattern2point.push({'x':x, 'y':y});
    x=x+dx;
    y=y+dy;
    time=time+dt;
    if(time>360)
        time=0;
    joinPoints();
}

function joinPoints() {
    beginShape();
    for(let v in pattern2point){
    //stroke(random(255),random(255),random(255));
    vertex(100*pattern2point[v].x, 100*pattern2point[v].y);
    //console.log(v)
}
endShape();
//pattern2point=[];
}