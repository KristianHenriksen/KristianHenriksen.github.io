
async function rotate(div){
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



window.onload = () => {
    document.getElementById('AboutMain').scrollLeft += 500;
    document.getElementById('AboutMain').classList.add('appear')
    console.log("onload happened")

  };
