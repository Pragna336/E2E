function goHome(){
    window.location.href = "home_page.html";
}

function showTab(id){
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c=>c.classList.remove("active"));

    event.target.classList.add("active");
    document.getElementById(id).classList.add("active");
}

