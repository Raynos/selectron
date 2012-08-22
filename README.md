# selectron

Keep track of the currently selected thing

## Example

``` js
var selectron = require("selectron")

var sel = selectron()
    , ul = document.getElementById("list")

ul.addEventListener("click", function (evt) {
    if (evt.target.tagName === "LI") {
        sel.select(evt.target)
    }
})

sel.on("select", function (li) {
    li.classList.add("selected")
})

sel.on("unselect", function (li) {
    li.classList.remove("selected")
})
```

## Installation

`npm install selectron`

## Contributors

 - Raynos

## MIT Licenced