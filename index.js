var EventEmitter = require("events").EventEmitter

module.exports = selectron

function selectron() {
    var sel = new EventEmitter()
        , selected

    sel.select = select
    sel.unselect = unselect

    return sel

    function select(thing) {
        unselect()

        selected = thing

        selected.select && selected.select()
        sel.emit("select", selected)
    }

    function unselect() {
        if (selected) {
            selected.unselect && selected.unselect()
            sel.emit("unselect", selected)
        }

        selected = null
    }
}