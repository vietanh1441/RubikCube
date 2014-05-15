#pragma strict

var target : Transform;
var distance = 7.5;
var xSpeed = 125.0;
var ySpeed = 125.0;
var rightclicked : boolean = false;
 
private var x = 0.0;
private var y = 0.0;
 
@script AddComponentMenu("Camera-Control/Mouse Orbit")
 
 
function Start () {
    var angles = transform.eulerAngles;
    x = angles.y;
    y = angles.x;
    target = transform.parent;
}
 
function Update (){
   if (Input.GetMouseButtonDown(1))
   { 
 	  rightclicked = true; 
   } 
   if (Input.GetMouseButtonUp(1))
   { 
 	  rightclicked = false; 
   }


}
 
function LateUpdate () {
    if (target && rightclicked == true) {
        x += Input.GetAxis("Mouse X") * xSpeed * distance* 0.02;
        y += Input.GetAxis("Mouse Y") * ySpeed * distance* 0.02;
        
        var rotation = Quaternion.Euler(y, x, 0);
        var position = rotation * Vector3(0.0, 0.0, -distance) + target.position;
        
        
        transform.rotation = rotation;
        transform.position = position;
    }   
}