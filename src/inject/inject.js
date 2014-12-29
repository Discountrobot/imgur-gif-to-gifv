
var GIF      = "image/gif",
    GIFV_EXT = ".gifv";

// sigh ...
if(document.contentType === GIF) {
      
  // stop loading that shit        
  window.stop();
  
  var path   = location.pathname,
      origin = location.origin,
      replaceExtension = function (ext) {
          return origin + path.substr(0, path.lastIndexOf(".")) + ext;
      };

  location.replace(replaceExtension(GIFV_EXT));
}