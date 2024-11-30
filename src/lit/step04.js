import { LitElement, html } from "lit";

class NameTag extends LitElement {
  static properties = {
    name: {},
  };

  constructor() {
    super();

    this.name = "너의 이름은 뭐니?";
  }

  handleInput(e) {
    this.name = e.target.value;
  }
  hadleClick() {
    alert(this.name);
  }

  render() {
    return html`
      <p>안녕, ${this.name}</p>
      <input @input=${this.handleInput} type="text" placeHolser="이름을 입력해주세요" />
      <button @click=${this.hadleClick} type="button">click me</button>
    `;
  }
}

customElements.define("name-tag", NameTag);

app.append(document.createElement("name-tag"));
