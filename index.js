var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
 cats.push("Ralph");
 return cats
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    return cats
}
function destructivelyRemoveLastCat() {
    cats.pop("Garfield")
    return cats
}
function destructivelyRemoveFirstCat() {
    cats.shift("Milo")
    return cats
}
function appendCat(name) {
    var name= [...cats, "Broom"]
    return name
}
function prependCat(name) {
    var name= ["Arnold", ...cats]
    return name
}
function removeLastCat() {
    var caats= cats.slice(0, cats.length-1)
    return caats
}
function removeFirstCat() {
    var catts= cats.slice(1)
    return catts
}