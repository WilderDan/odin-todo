class Note {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }
}

export default Note;
