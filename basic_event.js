const EventEmiitter = require('events');
const customEventEmitter = new EventEmiitter()

// two most important methods are on and emit 
// on listens for an event 
// emits that event 
customEventEmitter.on('response',()=>{
    console.log('data received from server')
})

customEventEmitter.emit('response')