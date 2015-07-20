var hbs = require('express-hbs');

module.exports = function() {
  hbs.registerHelper('grouped_each', function(every, context, options) {
    var out = '',
      subcontext = [],
      i;
    if (context && context.length > 0) {
      for (i = 0; i < context.length; i++) {
        if (i > 0 && i % every === 0) {
          out += options.fn(subcontext);
          subcontext = [];
        }
        subcontext.push(context[i]);
      }
      out += options.fn(subcontext);
    }
    return out;
  });

  hbs.registerHelper("debug", function(optionalValue) {
    console.log("Current Context");
    console.log("====================");
    console.log(this);

    if (optionalValue) {
      console.log("Value");
      console.log("====================");
      console.log(optionalValue);
    }
  });
};
