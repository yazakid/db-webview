import {createMessageQueue, createContainer} from './lib/jsc-dom/src/local.js';
import WorkerManager from './lib/worker-manager';

const IS_IN_JSC = window.webkit && window.webkit.messageHandlers.JSBridge;

if (!IS_IN_JSC) {
    /*****get worker instance */
    var workerManager = new WorkerManager(['./worker.js'],{
        url: location.href
    });

    var workerInstance = workerManager.getWorkerInstance(0);

    /*****get worker instance */
} else {
    var workerInstance = {
        postMessage: function (message, others) {
            window.webkit.messageHandlers.JSBridge.postMessage(message, others)
        },
        isBridgeMode: true,
        addEventListener: window.addEventListener.bind(window)
    };
}
var localQueue = createMessageQueue(workerInstance, null, {});
var container = createContainer(localQueue, document.getElementById('app'));
