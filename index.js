var EventEmitter = require("events").EventEmitter.prototype
    , extend = require("xtend")
    , partial = require("ap").partial

module.exports = selectron

function selectron() {
    var sel = tie
        , selected

    sel.select = select
    sel.unselect = unselect

    extend(sel, EventEmitter)
    EventEmitter.constructor.call(sel)

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

    function tie(thing) {
        return partial(select, thing)
    }
}