import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
class ComboBoxThemeVariantsDemos extends DemoReadyEventEmitter(ComboBoxDemo(PolymerElement)) {
  static get template() {
    return html`
    <style include="vaadin-component-demo-shared-styles">
      :host {
        display: block;
      }
    </style>
    <h3>Text align</h3>
    <vaadin-demo-snippet id="text-align" when-defined="vaadin-combo-box">
      <template preserve-content="">
        <vaadin-combo-box value="Left" theme="align-left"></vaadin-combo-box>
        <vaadin-combo-box value="Center" theme="align-center"></vaadin-combo-box>
        <vaadin-combo-box value="Right" theme="align-right"></vaadin-combo-box>
        <script>
          window.addDemoReadyListener('#text-align', function(document) {
            const comboBox = document.querySelectorAll('vaadin-combo-box');
            comboBox[0].items = ['Left', 'Right', 'Center'];
            comboBox[1].items = ['Left', 'Right', 'Center'];
            comboBox[2].items = ['Left', 'Right', 'Center'];
          });
        &lt;/script>
      </template>
    </vaadin-demo-snippet>

    <h3>Small size</h3>
    <vaadin-demo-snippet id="small-size" when-defined="vaadin-combo-box">
      <template preserve-content="">
        <vaadin-combo-box label="Label" theme="small"></vaadin-combo-box>
        <script>
          window.addDemoReadyListener('#small-size', function(document) {
            const comboBox = document.querySelectorAll('vaadin-combo-box');
            comboBox[0].items = ['Option one', 'Option two', 'Option three'];
          });
        &lt;/script>
      </template>
    </vaadin-demo-snippet>
`;
  }

  static get is() {
    return 'combo-box-theme-variants-demos';
  }
}
customElements.define(ComboBoxThemeVariantsDemos.is, ComboBoxThemeVariantsDemos);
