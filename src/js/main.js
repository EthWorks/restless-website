(function() {
  var packagesButtons = document.querySelectorAll('.js-package-btn');

  function showSelectedPackage(package) {
    document.querySelector('.installation__content.visible').classList.remove('visible');
    document.getElementById(package + '-content').classList.add('visible');
  }
  
  function highlightSelectedPackageButton(button) {
    document.querySelector('.js-package-btn.active').classList.remove('active');
    button.classList.add('active');
  }
  
  packagesButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      showSelectedPackage(button.dataset.target);
      highlightSelectedPackageButton(button);
    })
  });
})();

(function() {
  var installationButton = document.querySelectorAll('.js-installation-btn');
  
  installationButton.forEach(function(button) {
    button.addEventListener('click', function() {
      console.log(button.dataset.target)
    })
  });

})();
