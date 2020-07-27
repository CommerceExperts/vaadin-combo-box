import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
class ComboBoxValidationDemos extends DemoReadyEventEmitter(ComboBoxDemo(PolymerElement)) {
  static get template() {
    return html`
    <style include="vaadin-component-demo-shared-styles">
      :host {
        display: block;
      }
    </style>
    <h3>Required</h3>
    <vaadin-demo-snippet id="required" when-defined="vaadin-combo-box">
      <template preserve-content="">
        <vaadin-combo-box label="Label" required="" error-message="Please choose one option" clear-button-visible=""></vaadin-combo-box>
        <script>
          window.addDemoReadyListener('#required', function(document) {
            const comboBox = document.querySelector('vaadin-combo-box');
            comboBox.items = ['Option one', 'Option two', 'Option three'];
          });
        &lt;/script>
      </template>
    </vaadin-demo-snippet>
`;
  }

  static get is() {
    return 'combo-box-validation-demos';
  }
}
customElements.define(ComboBoxValidationDemos.is, ComboBoxValidationDemos);
