document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('emailInput').value;
    localStorage.setItem('email', email);
    displayEmail(email);
  });
  
  window.onload = function() {
    var email = localStorage.getItem('email');
    if (email) {
      displayEmail(email);
    }
  };
  
  function displayEmail(email) {
    var emailDisplay = document.getElementById('emailDisplay');
    emailDisplay.innerHTML = email + ' <button onclick="removeEmail()">Eliminar</button>';
  }
  
  function removeEmail() {
    localStorage.removeItem('email');
    document.getElementById('emailDisplay').innerHTML = '';
  }
  