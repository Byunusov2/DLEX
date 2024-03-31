function buttonColor_zero() {
    document.getElementById("button_zero").style.backgroundColor= 'Cyan';
    buttonColor.style.color= 'Cyan';

}


function buttonColor() {
    document.getElementById("button").style.backgroundColor= 'Cyan';
    buttonColor.style.color= 'Cyan';

}

function buttonColors() {
    document.getElementById("button_two").style.backgroundColor= 'Cyan';
    buttonColor.style.color= 'Cyan';

}


function buttonColor_first() {
    document.getElementById("button_first").style.backgroundColor= 'Cyan';
    buttonColor.style.color= 'Cyan';

}



function buttonColor_two() {
    document.getElementById("button_three").style.backgroundColor= 'Cyan';
    buttonColor.style.color= 'Cyan';

}

function buttonColor_three() {
    document.getElementById("button_four").style.backgroundColor= 'Cyan';
    buttonColor.style.color= 'Cyan';

}

const btns = document.querySelectorAll('.Get')
btns.forEach(Get => {
    window.addEventListener('mousemove', (e) => {
        let x = e.pageX - Get.offsetLeft
        let y = e.pageY - Get.offsetTop
        Get.style.setProperty('--x', `${x}px`)
        Get.style.setProperty('--y', `${y}px`)
    })
})

const sign = document.querySelectorAll('.sign_button')
sign.forEach(sign_button => {
    window.addEventListener('mousemove', (e) => {
        let x = e.pageX - sign_button.offsetLeft
        let y = e.pageY - sign_button.offsetTop
        sign_button.style.setProperty('--x', `${x}px`)
        sign_button.style.setProperty('--y', `${y}px`)
    })
})

const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
   
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
    
        const scrollY = window.scrollY || document.documentElement.scrollTop;
      
        scrollY > 400 ? this.show() : this.hide();
      });

      document.querySelector('.btn-up').onclick = () => {

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();

  const refreshButton = document.querySelector('.logo');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)

