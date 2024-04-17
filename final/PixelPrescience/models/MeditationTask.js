class Task {
    constructor(id, type, title, imageUrl, description) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description
    }

    toString() {
        return `${this.title} - Type: ${this.type} - Image URL: ${this.imageUrl} - Description: ${this.description}`;
    }
}

export default Task;