// CommonJs, every file is module (by default)
// Modules - Encapsulated code (ony share minimum)
const names=require('./4-names')
console.log(names);
const say=require('./5-utils')
const data=require('./6-alternative-flavor')
console.log(data);
require('./7-mind-grenade')

// say(data.singleperson.name)
// say(data.items)
// say(data.items[0])
// say('susan')
// say(names.john)
// say(names.peter)
