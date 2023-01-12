
async function rotate(div){
    console.log("test")
    div.classList.add("rotate");
    var content = document.getElementById("content").innerHTML
    document.getElementById("content").innerHTML = "this feature is not yet implemented..."
    await new Promise(r => setTimeout(r, 1000));
    div.classList.remove("rotate");
    document.getElementById("content").innerHTML = content

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function log(){
    console.log("click")
}
let app = Vue.createApp({
    data() {
        return {
        }   
    },
    methods: {
        
    }
});
app.mount("#app");

