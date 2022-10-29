const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");


toggleBtn.addEventListener("click", function(){
    // // 1st way
    // if(sidebar.classList.contains("show-sidebar")){
    //     sidebar.classList.remove("show-sidebar")
    // }
    // else{
    //     sidebar.classList.add("show-sidebar");
    // }

    // 2nd way
    sidebar.classList.toggle("show-sidebar");
})
closeBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
})