
const menuBtn = document.getElementById("menu_btn");
const menuFullbar = document.getElementById("menu-fullbar");
const menuCloseBtn = document.getElementById("menu-close-btn");

// Open sidebar
menuBtn.addEventListener("click", () => {
    menuFullbar.classList.remove("hide");
});

// Close when clicking X
menuCloseBtn.addEventListener("click", () => {
    menuFullbar.classList.add("hide");
});

// Close when clicking the dark overlay 
menuFullbar.addEventListener("click", (e) => {
    if (e.target === menuFullbar) {
        menuFullbar.classList.add("hide");
    }
});

// Shop dropdown in sidebar 
const shopSidebarContainer = document.getElementById("shop_ul_sidebar_container");
const shopSidebarList = document.getElementById("shop_ul_sidebarId");

if (shopSidebarContainer && shopSidebarList) {
    shopSidebarContainer.addEventListener("click", (e) => {
        e.stopPropagation();
        shopSidebarList.classList.toggle("show");
    });
}
