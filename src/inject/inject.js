
var GIF      = "image/gif",
    GIFV_EXT = ".gifv";

// check if the content is "image/gif" regardless of the url extension
if(document.contentType === GIF) {
      
  // stop loading that shit        
  window.stop();
  
  var path   = location.pathname,
      origin = location.origin,
      // helper method for replacing the url extension
      replaceExtension = function (ext) {
          return origin + path.substr(0, path.lastIndexOf(".")) + ext;
      };

  location.replace(replaceExtension(GIFV_EXT));
}
