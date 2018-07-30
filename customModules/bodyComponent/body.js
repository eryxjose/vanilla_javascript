/*global templates */

app.body = (function (templates) {

    function render(data, done) {
      templates.load('./body.html', function (el) {
        el.querySelector('.cursor').innerHTML = data;
  
        if (done) {
          done(el);
        }
      });
    }
  
    return {
      render: render
    };
  
  }(templates));