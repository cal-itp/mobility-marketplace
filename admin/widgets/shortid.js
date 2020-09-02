import htm from "https://unpkg.com/htm@3.0.4?module";

const html = htm.bind(h);

const ShortId = createClass({
  render() {
    if (!this.props.value) {
      this.generateId();
    }

    const {
      forID,
      classNameWrapper,
      value,
    } = this.props;

    return html`
      <input
        type="text"
        className=${classNameWrapper}
        style=${{color:"#cdcdcd"}}
        value=${value || ""}
        id=${forID}
        disabled />
      `;
  },

  generateId() {
    const id = Math.random().toString(36).substring(2, 9);
    this.onChange(id);
  },

  onChange(value) {
    this.props.onChange(value);
  }
});

export default ShortId;
