export default class Data<T> {
    data: T
    listeners: ((data: T) => void)[] = []

    constructor(data: T) {
        this.data = data
    }

    listen(listener: (data: T) => void) {
        this.listeners.push(listener)
    }

    update(data: T) {
        if (this.data === data) return //no change, so no need for update

        this.data = data
        for (let listener of this.listeners) {
            listener(this.data)
        }
    }
}