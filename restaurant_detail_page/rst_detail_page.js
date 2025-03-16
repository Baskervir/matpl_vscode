function loadMenu() {
    fetch('rst_detail_menu.html').then(Response => Response.text()).then(data => document.querySelector(".restaurant_detail_preview_body").innerHTML = data);
}

function loadHmoe() {
    fetch('/variation/base_page.html').then(Response => Response.text()).then(data => document.querySelector(".restaurant_detail_preview_body").innerHTML = data);
}