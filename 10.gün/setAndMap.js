const names = new Set("tayfun","ahmet","mehmet")
names.add("arife")
names.add("selim")
names.add("tural")
names.add("hello!")
console.log(names);

const namesSet = new Set()

for(let name of names) {
    namesSet.add(name)
}
namesSet.delete("ahmet")
console.log(namesSet.size);

