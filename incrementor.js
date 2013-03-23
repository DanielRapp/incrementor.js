(function() {
  var increment = function(el, diff) {
    var currentIncrementation = parseInt(el.innerHTML, 10) || 0;
    el.innerHTML = currentIncrementation + diff;
  };

  var toggle = function(incrementable, active) {
    increment(incrementable, active ? -1 : 1);
    // Fix Bootstrap compatibility issues
    if ($().button === null)
      incrementor.classList.toggle('active');
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
