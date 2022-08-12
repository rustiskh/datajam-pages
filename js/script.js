// // Фрейм видео
// var yt_frame = document.querySelector('.video-card__player'),
// 	video_btn = document.querySelector('.button_circle');
//   video_btn.addEventListener('click',play);

//   video_placeholder = document.querySelector('.frame-video__placeholder');
//   video_placeholder.addEventListener('click',play);
  
// function play(){
// 	yt_frame.contentWindow.postMessage(JSON.stringify({
//                 'event': 'command',
//                 'func': 'playVideo',
//                 'args': []
//             }),'*');
//           video_placeholder.style.display="none";
//           video_btn.style.display="none";  
// }

// Блок FAQ
document.addEventListener("DOMContentLoaded", function () {
  var faqItems = document.querySelectorAll(".faq-card");

  faqItems.forEach((faqItem) => {
    faqItem.addEventListener("click", function () {
      faqItems.forEach((item) => {
        if (item !== faqItem) {
          item.classList.remove("faq-card--active");
        } 
      });

      faqItem.classList.toggle("faq-card--active");
    });
  });
});