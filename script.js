let radios = document.querySelectorAll('input[type="radio"]');
let body = document.querySelector('body')

for(const radio of radios){
    radio.addEventListener('change', function(){
        console.log(radio.value);
        switch(radio.value){
            case'1' : body.style.backgroundColor='#afa'; break;
            case'2' : body.style.backgroundColor = '#faa'; break;
            case'3' : body.style.backgroundColor = '#aaf'; break;
            default: rgb(200,255,200);
        };

    });
} 

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  let btn_prev = document.querySelector('#gallery .buttons .prev');
  let btn_next = document.querySelector('#gallery .buttons .next');
  let images = document.querySelectorAll('#gallery .photos img');
  let i = 0;
  images[0].style.display = 'block';

btn_prev.onclick = function(){
    images[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}
btn_next.onclick = function(){
    images[i].style.display = 'none';
    i = i + 1;
    if(i >=images.length){
        i = 0;
    }
    images[i].style.display = 'block';
}


document.getElementById('feedbackForm').addEventListener('submit', function (event) {
  event.preventDefault();
  let formData = new FormData(this);
  let feedbackData = {};
  formData.forEach(function (value, key) {
      feedbackData[key] = value;
  });
  feedbackData['userId'] = 1;
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
  })
  .then(response => response.json())
  .then(data => {
      console.log('Успешно отправлено:', data);
      this.reset();
  })
  .catch(error => {
      console.error('Ошибка:', error);
  });
});