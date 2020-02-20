// file simple_extension/main.js

define([
    'base/js/namespace'
], function(
    Jupyter
) {
    function load_ipython_extension() {

        var handler = function () {
            var cell_content = Jupyter.notebook.get_cells()[3].get_text();
            var tokens = cell_content.split("=")
            var power = tokens[1].trim()
            console.log(power)
            if(power < 0) {
                alert("We are not interested in negative powers just yet!");
            } else if (power < 5) {
                alert("Ok, now try with a larger power! (Maybe greater than 5...)");
            }  else {
                alert("Now we're talking! Large powers! (Greater than 5");
            }

        };

        var action = {
            icon: 'fa-flag-o', // a font-awesome class used on buttons, etc
            help    : 'Show an alert',
            help_index : 'zz',
            handler : handler
        };
        var prefix = 'get_field';
        var action_name = 'get-and-validate-field';

        var full_action_name = Jupyter.actions.register(action, action_name, prefix); // returns 'my_extension:show-alert'
        Jupyter.toolbar.add_buttons_group([full_action_name]);
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});
