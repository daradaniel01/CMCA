function greet(userName){
    // alert("Welcome" + " " + userName)
    alert(`Welcome ${userName}`)
  }
  
  // document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('menu').addEventListener('click', () => {
      document.getElementById('menu').style.display = 'none'
      document.getElementById('closeMenu').style.display = 'block'
      document.querySelector('.nav-items').classList.remove('close-nav-items')
      document.querySelector('.nav-items').classList.add('open-nav-items')
    })
    
    document.getElementById('closeMenu').addEventListener('click', () => {
      document.getElementById('closeMenu').style.display = 'none'
      document.getElementById('menu').style.display = 'block'
      document.querySelector('.nav-items').classList.remove('open-nav-items')
      document.querySelector('.nav-items').classList.add('close-nav-items')
    })
    
  // })