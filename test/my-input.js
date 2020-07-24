/*
  This custom element is needed for testing the "attr-for-value" feature of
  <vaadin-combo-box-light>
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
class MyInput extends Polymer.Element {
  static get template() {
    return Polymer.html`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <iron-input id="input" bind-value="{{customValue}}">
      <input>
    </iron-input>
`;
  }

  static get is() {
    return 'my-input';
  }

  static get properties() {
    return {
      customValue: {
        type: String,
        notify: true
      }
    };
  }
}
window.customElements.define('my-input', MyInput);
