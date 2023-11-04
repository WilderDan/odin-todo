class Note {
  constructor(id, title, description) {
    this._id = id;
    this.title = title;
    this.description = description;
  }

  get id() {
    return this._id;
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
