function toggler(btnSelector, targetSelector, openClass) {
  const btn = document.querySelector(btnSelector);
  const target = document.querySelector(targetSelector);
  btn.addEventListener("click", () => {
    target.classList.toggle(openClass);
  });
}
