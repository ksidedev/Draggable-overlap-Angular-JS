
var divs = $('.shape').resizable().draggable({
  drag: function(){
      var d0 = divs.eq(0).position(),
          d1 = divs.eq(1).position(),
          x11 = d0.left,
          y11 = d0.top,
          x12 = d0.left + divs.eq(0).width(),
          y12 = d0.top + divs.eq(0).height(),
          x21 = d1.left,
          y21 = d1.top,
          x22 = d1.left + divs.eq(1).width(),
          y22 = d1.top + divs.eq(1).height(),
          x_overlap = Math.max(0, Math.min(x12,x22) - Math.max(x11,x21))
          y_overlap = Math.max(0, Math.min(y12,y22) - Math.max(y11,y21));
          overlapArea = x_overlap * y_overlap
          over(overlapArea, x_overlap, y_overlap)
        //   console.log('d0: ', d0)
        //   console.log('d1:', d1)

          if (d0.left > d1.left) {
            $('.overlap-area').css('left','auto');
            $('.overlap-area').css('right','0');
          }

          if (d1.left > d0.left) {
            $('.overlap-area').css('left','0');
            $('.overlap-area').css('right','auto');
          }

          if (d0.top > d1.top) {
            $('.overlap-area').css('bottom','0');
            $('.overlap-area').css('top','auto');
          }

          if (d0.top < d1.top){
            $('.overlap-area').css('top','0');
            $('.overlap-area').css('bottom','auto');
          }
          //$('#overlap').text('x_overlap:' +  x_overlap + 'y_overlap' + y_overlap );
          $('.overlap-area').css('height', y_overlap )
          $('.overlap-area').css('width', x_overlap)
          // $('.overlap-unit').text(overlapArea)
  }
});
