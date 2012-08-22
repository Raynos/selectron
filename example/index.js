var selectron = require("../index")

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