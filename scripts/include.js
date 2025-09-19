// include.js
function loadInclude(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

window.onload = () => {
  loadInclude('site-header', '../includes/header.html');
  loadInclude('site-footer', '../includes/footer.html');
};