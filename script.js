// Minimal working JS (keeps mobile menu + year)
(function(){
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  if(menuBtn && mobileNav){
    menuBtn.addEventListener("click", ()=>{
      mobileNav.hidden = !mobileNav.hidden;
    });
  }
})();
