let get_file = document.querySelector("#get_file");

get_file.addEventListener("click",()=>{
    $.get("/get_file/",()=>{
        console.log("done")
    })
})






