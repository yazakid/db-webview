console.log('from worker2');
this.addEventListener('message', (event)=>{
    "use strict";
    console.log(event.data,'from worker2')
})