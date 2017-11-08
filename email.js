var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['email.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li>"
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "<html>\r\n    <head>\r\n        <style>\r\n            body {\r\n                font-size: 18px;\r\n            }\r\n\r\n            th {\r\n                font-weight: bold;\r\n            }\r\n\r\n            li {\r\n                margin-bottom: 8px;\r\n            }\r\n\r\n            .title {\r\n                font-size: 24px;\r\n                font-color: red;\r\n            }\r\n        </style>\r\n    </head>\r\n    <body>\r\n        <table>\r\n            <tr>\r\n                <th>Name</th>\r\n                <td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <th>Zip</th>\r\n                <td>"
    + alias4(((helper = (helper = helpers.zip || (depth0 != null ? depth0.zip : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zip","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n        </table>\r\n\r\n        <div class=\"title\">Answers</div>\r\n\r\n        <ul>\r\n";
  stack1 = ((helper = (helper = helpers.stuff || (depth0 != null ? depth0.stuff : depth0)) != null ? helper : alias2),(options={"name":"stuff","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.stuff) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </ul>\r\n    </body>\r\n</html>";
},"useData":true});
