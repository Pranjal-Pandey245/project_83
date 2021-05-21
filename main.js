var mouse_event="empty";
var l_p_m_x;
var l_p_m_y;
var c_p_m_x;
var c_p_m_y;

canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
ctx.strokeStyle="black";
ctx.lineWidth=2;

var screen_width= screen.width;
    new_width= screen.width-70;
    new_height= screen.height-300;

    if(screen_width<992){
        document.getElementById("my_canvas").width=new_width;
        document.getElementById("my_canvas").height=new_height;
        document.body.style.overflow="hidden";
    }

canvas.addEventListener("mousedown",  my_mousedown);
canvas.addEventListener("mousemove",  my_mousemove);
canvas.addEventListener("mouseup",  my_mouseup);

function my_mouseup(){
    mouse_event="mouseup";
}

function my_mousedown(){
    color=document.getElementById("c_i").value;
    width=document.getElementById("w_i").value;

    mouse_event="mousedown";
}

function my_mousemove(e){
    c_p_m_x= e.clientX-canvas.offsetLeft;
    c_p_m_y= e.clientY-canvas.offsetTop;

    if (mouse_event=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(l_p_m_x, l_p_m_y);
    console.log(l_p_m_x, l_p_m_y);
    ctx.lineTo(c_p_m_x, c_p_m_y);
    ctx.stroke();
    }
    l_p_m_x=c_p_m_x;
    l_p_m_y=c_p_m_y;
}

canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop;

        color=document.getElementById("c_i").value;
        width=document.getElementById("w_i").value;
    }

    canvas.addEventListener("touchmove", my_touchmove);  

    function my_touchmove(e)
    {
         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle =color;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        
        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

