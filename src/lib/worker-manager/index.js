/**
 * @description worker管理类，方便涉及多进程执行类
 */
import WorkerData from './worker-data';
export default class WorkerManager {
    constructor (workerURLs: Array<string>, settings:JSON){
        this.workers = workerURLs.map((url)=>new Worker(url+"?bom="+btoa(JSON.stringify(settings))));
    }
    send (message: WorkerData){
        this.workers[message.pid].postMessage(message.data);
    }
    create (workerBundleURL: string) {
        //TODO: 去重
        this.workers.push(
            new Worker(workerBundleURL)
        );
    }
    getWorkerInstance(id: number){
        return this.workers[id]
    }
}