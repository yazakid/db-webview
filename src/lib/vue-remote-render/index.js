// import { patch } from "virtual-dom";
function patch(a,b,c,d){
    console.log(a,b,c,d)
}

export default function (vm) {
    vm.__patch__ = patch;
    vm._update(vm._render(), true);
}