export class EventBusService {
    subscriptions: {[eventName: string]: any[]} = {};

    constructor() {
        this.subscriptions['all'] = [];
    }

    sendMessage(eventName: string, data: any) {
        const subscribers = this.subscriptions['all'];
        if (eventName !== 'all') {subscribers.concat(this.subscriptions[eventName]); }
        if (subscribers && subscribers.length > 0) {
            subscribers.forEach(sub => sub.eventBusMessageReceived(data));
        }
    }

    registerForEvent(eventName: string, subscriber: any) {
        const subscriptionList = this.subscriptions[eventName];
        if (!subscriptionList) {this.subscriptions[eventName] = []; }
        this.subscriptions[eventName].push(subscriber);
    }
}