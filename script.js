
async function rotate(div){
    console.log("test")
    div.classList.add("rotate");
    var content = document.getElementById("content1").innerHTML
    document.getElementById("content1").innerHTML = "this feature is not yet implemented..."
    await new Promise(r => setTimeout(r, 1000));
    div.classList.remove("rotate");
    document.getElementById("content1").innerHTML = content

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function log(){
    console.log("click")
}


