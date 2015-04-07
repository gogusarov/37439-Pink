(function() {
  function viewport() {
    var e = window,
        a = 'inner';
      if ( !( 'innerWidth' in window ) ) {
        a = 'client';
        e = document.documentElement || document.body;
      }
    return e[a+'Width'];
  }
  
  
  window.addEventListener('resize', function() {
    var viewportSize = viewport();
    if (viewportSize < 1200) {
      var wrapper = document.querySelector(".comment-wrapper");
      wrapper.style.left = 0 + "px";
    } 
  });
    
})();