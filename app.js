var numInshape = 1;
function generate()
{
    var circle = document.getElementById("circle");
    var square = document.getElementById("square");
    var rectangle = document.getElementById("rectangle");
    let n = document.getElementById("number").value;

    for(let i=0; i<n; i++)
    {
        var shape = document.createElement("div");
        shape.innerHTML = numInshape++;
    
    if(square.checked)
    {
        shape.classList.add("sqaure");
    }
    else if (circle.checked)
     {
        shape.classList.add("circle");
    } else if(rectangle.checked)
     {
        shape.classList.add("rectangle");
    }
 }
}