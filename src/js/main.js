(function() {
  var buttonsList = document.querySelectorAll('.js-tab-btn')

  function highlightSelectedButton(dataset) {
    var selectedButtonGroup = document.querySelectorAll('[data-name=' + dataset.name + ']')
    selectedButtonGroup.forEach(function(button) {
      button.classList.remove('active');
    })

    var selectedButtons = document.querySelectorAll('[data-target=' + dataset.target + ']')
    selectedButtons.forEach(function(button) {
      button.classList.add('active');
    })
  }

  function showSelectedContent(dataset) {
    var selectedContent = document.querySelectorAll('[data-id=' + dataset.target + ']')
    var selectedContentGroup = document.querySelectorAll('[data-group=' + dataset.name + ']')
    
    selectedContentGroup.forEach(function(content) {
      content.classList.add('hidden');
    })

    selectedContent.forEach(function(content) {
      content.classList.remove('hidden');
    })
  }
  
  buttonsList.forEach(function(button) {
    button.addEventListener('click', function() {
      var dataset = button.dataset;
      highlightSelectedButton(dataset)
      showSelectedContent(dataset)
    })
  })
})();
