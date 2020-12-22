function onSidebarLinkClick(tab) {
  var container = document.querySelector('[data-id=' + tab + ']')
  var buttonsList = container.querySelectorAll('.js-sidebar-button')
  var content = container.querySelector('.js-documentation-content')
  var dropdownWrapper = container.querySelector('.js-dropdown-wrapper')
  var dropdown = container.querySelector('.js-dropdown')
  var dropdownButton = container.querySelector('.js-dropdown-btn')
  var documentationRow = container.querySelector('.js-documentation-row')
  var documentationRowTop
  var isDesktop
  
  function stickyNavigation() {
    documentationRowTop = documentationRow.offsetTop
      
    if (window.scrollY >= documentationRowTop) {
      dropdownWrapper.classList.add('fixed')
    } else {
      dropdownWrapper.classList.remove('fixed')
    }

  }
  
  function onResize() {
    if (window.innerWidth > 900) isDesktop = true
    else isDesktop = false
  }
  
  function scrollToSection(section) {
    var section = document.getElementById(section)
    var sectionTop = section.offsetTop
    var contentTop = content.offsetTop

    if(isDesktop) content.scrollTop = sectionTop - contentTop
    else {
      section.scrollIntoView()
      window.scrollTo({top: section.offsetTop - 97, behavior: 'smooth'})
    }
  }
  
  function highlightLink(selectedButton) {
    buttonsList.forEach(function(button) {
      button.classList.remove('active')
    })
    selectedButton.classList.add('active')
  }
  
  function setListeners() {
    buttonsList.forEach(function(button) {
      button.addEventListener('click', function() {
        highlightLink(button)
        dropdown.classList.remove('open')
        dropdownButton.textContent = button.textContent
        scrollToSection(button.dataset.section)
      })
    })

    dropdownButton.addEventListener('click', function() {
      dropdown.classList.toggle('open')
    })
    
    window.addEventListener('resize', onResize)

    window.addEventListener('scroll', stickyNavigation)
  }

  function init() {
    setListeners()
    onResize()
  }
  init()
}
onSidebarLinkClick('sanitizers-docs')
onSidebarLinkClick('ethereum-docs')
onSidebarLinkClick('express-docs')

function staticDocsDropdown() {
  var dropdownWrappersList = document.querySelectorAll('.js-dropdown-wrapper')
  var tabs = document.querySelectorAll('[data-name="documentation"]')

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      dropdownWrappersList.forEach(function(dropdown) {
        dropdown.classList.remove('fixed')
      })
    })
  })
}
staticDocsDropdown()
