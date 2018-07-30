/*global templates */

app.logView = (function (templates, terminal) {

    function render(data, done) {
  
      templates.load('./logView.html', function (el) {
  
        terminal.render(data, function (child) {
          el.appendChild(child);
  
          if (done) {
            done(el);
          }
        });
      });
  
    }
  
    return {
      render: render
    };
  
  }(templates, vanilla.terminal));