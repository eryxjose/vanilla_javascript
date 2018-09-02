
// 
// https://github.com/DavidVujic/vanillajs-components/blob/master/src/app.js#L19

app.listItem = (function(templates) {
    function render(props, done) {
        templates.load('./listItem.html', props, function(el) {
            el.textContent = props.data;
            el.addEventListner('click', props.onClick);
            if (done) {
                done(el);
            }
        });
    }

    return {
        render: render
    };

}(templates));