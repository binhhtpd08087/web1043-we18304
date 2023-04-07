$(document).ready(function() {
    // Khởi tạo thanh trượt
    $('.slider-wrapper').slick({
      dots: true,
      prevArrow: '<button class="slick-prev"></button>',
      nextArrow: '<button class="slick-next"></button>',
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }]
    });
  
    // Thêm hiệu ứng chuột vào hình ảnh
    $('.slider-item img').mouseover(function() {
      $(this).addClass('hover');
    });
  
    // Loại bỏ hiệu ứng chuột khi chuột rời khỏi hình ảnh
    $('.slider-item img').mouseout(function() {
      $(this).removeClass('hover');
    });
  
    // Thêm một sự kiện nhấp chuột vào các dấu chấm
    $('.slider-dot').click(function() {
      var index = $(this).index();
      $('.slider-wrapper').slick('slickGoTo', index);
    });
  
    // Cập nhật dấu chấm đang hoạt động khi slide thay đổi
    $('.slider-wrapper').on('afterChange', function(event, slick, currentSlide) {
      $('.slider-dot').removeClass('active');
      $('.slider-dot').eq(currentSlide).addClass('active');
    });
  });