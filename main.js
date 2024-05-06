let modalContent = document.getElementById("modal-content");
let mainSection = document.getElementById("main");

document.getElementById("modal-btn").addEventListener("click", function () {
    modalContent.classList.remove("hidden");
    mainSection.classList.add("opacity-30");
    mainSection.classList.add("bg-blend-multiply");
})

document.getElementById("cancel-btn").addEventListener("click", function(){
    modalContent.classList.add("hidden");
    mainSection.classList.remove("opacity-30");
    mainSection.classList.remove("bg-blend-multiply");
})