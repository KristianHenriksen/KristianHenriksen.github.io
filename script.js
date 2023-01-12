
async function rotate(div){
    console.log("test")
    div.classList.add("rotate");
    await new Promise(r => setTimeout(r, 1000));
    div.classList.remove("rotate");

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function log(){
    console.log("click")
}


