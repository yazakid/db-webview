1. delete `<script src=/js/chunk-vendors.js></script>` in `index.html`
2. add `importScripts('http://localhost:8000/js/chunk-common.js');
        importScripts('http://localhost:8000/js/chunk-vendors.js');` to `worker.js`
3. add `var window={}` to  `chunk-common.js`
4. modify  `./worker.js` to `./js/worker.js` in `index.js`