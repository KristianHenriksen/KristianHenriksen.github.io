let app = Vue.createApp({
    data() {
        return {
            contentID : ["content1", "content2", "content3", "content4"],
            current:0,
        }   
    },
    methods: {
        change(current){
            console.log("start")
            if (current == "0"){
                this.contentID.forEach(element => document.getElementById(element).style.display="");
            }else{
                this.contentID.forEach(element => document.getElementById(element).style.display="none");
                console.log(current)
                document.getElementById(this.contentID[parseInt(current)]).style.display="";
                this.current=current
                console.log("success")
            }
        }
        
    }
});
app.mount("#app");