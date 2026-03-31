/**
 * Minimal CSInterface for CEP panels (evalScript bridge).
 */
function CSInterface() {}

CSInterface.prototype.evalScript = function (script, callback) {
  if (window.__adobe_cep__) {
    window.__adobe_cep__.evalScript(script, callback);
  } else if (callback) {
    callback("CEP runtime not available (open this panel inside Illustrator).");
  }
};

CSInterface.prototype.getSystemPath = function (pathType) {
  if (window.__adobe_cep__) {
    return window.__adobe_cep__.getSystemPath(pathType);
  }
  return "";
};

CSInterface.prototype.getHostEnvironment = function () {
  if (window.__adobe_cep__) {
    return JSON.parse(window.__adobe_cep__.getHostEnvironment());
  }
  return {};
};
