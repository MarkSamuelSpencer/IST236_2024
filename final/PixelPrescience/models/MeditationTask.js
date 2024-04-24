class Task {
    constructor(id, type, title, imageUrl, description, internal) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description
        this.internal = internal
    }

    toString() {
        return `${this.title} - Type: ${this.type} - Image URL: ${this.imageUrl} - Description: ${this.description}`;
    }
}

export default Task;