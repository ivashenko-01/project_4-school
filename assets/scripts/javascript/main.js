const swiperAudience = new Swiper('.swiper-audience', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    grabCursor: true,
  
    // centeredSlides: 'auto',
    slidesPerView: 'auto',
    // spaceBetween: 30,
  
    autoplay: {
        delay: 6000,
        disableOnInteraction: true,
    },
  
    // pagination: {
    //     el: '.swiper-pagination',
    //   },
  
  });

// const swiperVariation = new Swiper('.swiper-variation', {
//     // Optional parameters
    
//     direction: 'horizontal',
//     loop: true,
    
//     grabCursor: true,
  
//     // centeredSlides: 'auto',
//     slidesPerView: 1.5,
//     // spaceBetween: 30,
  
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: true,
//     },
  
//     // pagination: {
//     //     el: '.swiper-pagination',
//     //   },

//     breakpoints: {

//         320: {
//             slidesPerView: 1,
//         },

//         600: {
//             slidesPerView: 3,
//         },

//         1024: {
//             slidesPerView: 3,
//         },

//       }

//   });