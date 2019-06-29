import { Subject } from 'rxjs';

export class StateService {
    constructor() {}
    private state$ = new Subject();
    private clients: HTMLElement[] = [];

    public registerClient(client: HTMLElement) {
        this.clients.push(client);
    }

    public setState(state: string) {
        for(const client of this.clients) {
            client.setAttribute('state', state);
        }
    }
}