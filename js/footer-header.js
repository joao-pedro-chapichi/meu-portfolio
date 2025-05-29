// Carrega o header
fetch('../pages/components/header.html')
  .then(res => res.text())
  .then(data => document.getElementById('header').innerHTML = data);

// Carrega o footer
fetch('../pages/components/footer.html')
  .then(res => res.text())
  .then(data => document.getElementById('footer').innerHTML = data);