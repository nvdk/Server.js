/*! @license ©2015 Ruben Verborgh - Multimedia Lab / iMinds / Ghent University */

/** An ErrorRdfView represents a 500 response in HTML. */

var HtmlView = require('../HtmlView');

// Creates a new ErrorHtmlView
function ErrorHtmlView(settings) {
  if (!(this instanceof ErrorHtmlView))
    return new ErrorHtmlView(settings);
  HtmlView.call(this, 'Error', settings);
}
HtmlView.extend(ErrorHtmlView);

// Renders the view with the given settings to the response
ErrorHtmlView.prototype._render = function (settings, request, response) {
  this._renderTemplate('error/error', settings, response);
};

module.exports = ErrorHtmlView;