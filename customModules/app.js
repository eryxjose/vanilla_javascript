(function (navigation, logView, terminal) {

    var printTargets = [];
  
    loadLeftMenu();
    loadMainView();
    loadLogView();
  
    function loadLeftMenu() {
      var props = {
        data: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4'
        ],
        onClick: function (e) {
          print(e);
          loadMainView(e);
        }
      };
  
      navigation.render(props, function (el) {
        document.querySelector('#left-menu').appendChild(el);
      });
    }
  
    function loadMainView(e) {
      var container = document.querySelector('#main');
      var data = 'vanilla components';
  
      if (e) {
        container.removeChild(container.firstChild);
        data = e.target.textContent;
      }
  
      terminal.render(data, function (el) {
        container.appendChild(el);
      });
    }
  
    function loadLogView() {
      var data = 'events:';
  
      logView.render(data, function (el) {
        printTargets.push(el.querySelector('.cursor'));
        document.querySelector('#vanilla-terminal').appendChild(el);
      });
    }
  
    function print(e) {
      var message = e.type + ' : ' + e.target.nodeName + ' : ' + e.target.innerHTML;
  
      printTargets.forEach(function (element) {
        element.innerHTML += '<br/>' + message;
      });
    }
  
  }(app.nav, app.logView, app.terminal));