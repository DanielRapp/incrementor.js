incrementor.js
==============

A minuscule (282 bytes gzipped) tool for automatic incrementation hooks.

Examples
---

### Basic example

Just assign the `data-incrementor` attribute to the button and `data-incrementable` to the output, connect them with a label, and incrementor.js does the rest.

```html
<button data-incrementor="follow">Follow</button>
<span data-incrementable="follow">99</span> followers.
```

### Toggle example

The `data-toggle` attribute, popularized by Twitter Bootstrap, is also supported.

```html
<button data-incrementor="star" data-toggle="button">Star</button>
<span data-incrementable="star">1336</span> stargazers.
```

Install
---

Simply use [bower](http://twitter.github.com/bower/)
```
bower install incrementor
```

Contact
---

If you have any questions or suggestions that doesn't fit GitHub, send them to [@DanielRapp](https://twitter.com/danielrapp)
