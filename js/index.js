if (window.location.hash.length > 1) {
  document.querySelector(".item2").value = decodeURIComponent(window.location.hash.slice(1));
}
document.querySelector(".item2").addEventListener("keyup", (e) => {
  window.location.hash = encodeURIComponent(document.querySelector(".item2").value);
});
