const pop=document.getElementById("pop");
window.onpointermove=event=>{
    const{clientX,clientY}=event;
    pop.animate({
        left:`${clientX}px`,
        top:`${clientY}px`
    },{duration:3000, fill:"backwards"});
}