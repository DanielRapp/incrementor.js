(function() {
  var increment = function(el, diff) {
    var currentIncrementation = parseInt(el.innerHTML, 10) || 0;
    el.innerHTML = currentIncrementation + diff;
  };

  var toggle = function(incrementable, active) {
    if (active) {
      increment(incrementable, -1);
      // Fix Bootstrap compatibility issues
      if ($().button === null)
        incrementor.classList.remove('active');
    }
    else {
      increment(incrementable, 1);
      if ($().button === null)
        incrementor.classList.add('active');
    }
  };

  var incrementors = document.querySelectorAll('[data-incrementor]');
  Array.prototype.forEach.call(incrementors, function(incrementor) {
    incrementor.addEventListener('click', function() {
      var label = this.getAttribute('data-incrementor')
        , selector = '[data-incrementable="'+label+'"]'
        , incrementable = document.querySelector(selector)
        , toggleable = this.getAttribute('data-toggle') !== null;

      if (toggleable) toggle(incrementable, this.classList.contains('active'));
      else increment(incrementable, 1);
    });
  });
})();
