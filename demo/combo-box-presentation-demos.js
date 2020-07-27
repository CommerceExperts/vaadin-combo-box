import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
class ComboBoxPresentationDemos extends DemoReadyEventEmitter(ComboBoxDemo(PolymerElement)) {
  static get template() {
    return html`
    <style include="vaadin-component-demo-shared-styles">
      :host {
        display: block;
      }
    </style>
    <h3>Customizing drop down item with item renderer</h3>
    <vaadin-demo-snippet id="customizing-with-item-renderer" when-defined="vaadin-combo-box">
      <template preserve-content="">
        <vaadin-combo-box label="Users" item-label-path="name"></vaadin-combo-box>
        <script>
          window.addDemoReadyListener('#customizing-with-item-renderer', function(document) {
            const users = [
              {name: 'Gabriella', photo: 'https://randomuser.me/api/portraits/women/43.jpg'},
              {name: 'Rudi', photo: 'https://randomuser.me/api/portraits/men/77.jpg'},
              {name: 'Hamsa', photo: 'https://randomuser.me/api/portraits/men/35.jpg'},
              {name: 'Jacob', photo: 'https://randomuser.me/api/portraits/men/76.jpg'}
            ];
            const comboBox = document.querySelector('vaadin-combo-box');
            comboBox.items = users;
            comboBox.renderer = function(root, owner, model) {
              if (!root.firstElementChild) {
                root.innerHTML = '<img class="photo" style="width: 21px; vertical-align: bottom;"/>' +
                '<sub class="name" style="margin-left: 0.5em"></sub>';
              }
              root.querySelector('.photo').src = model.item.photo;
              root.querySelector('.name').textContent = model.item.name;
            };
          });
        &lt;/script>
      </template>
    </vaadin-demo-snippet>

    <h3>Customizing item with template</h3>
    <p>
      The content can be provided declaratively using templates. This feature might be
      removed in near future.
    </p>
    <vaadin-demo-snippet id="customizing-with-item-template" when-defined="vaadin-combo-box">
      <template preserve-content="">
        <vaadin-combo-box label="Element" item-label-path="name" item-value-path="symbol" style="width: 240px;">
          <template>
            <b>[[item.name]], <sub>[[item.number]]</sub>[[item.symbol]]</b><br>
            array index: [[index]]
          </template>
        </vaadin-combo-box>
        <script>
          window.addDemoReadyListener('#customizing-with-item-template', function(document) {
            document.querySelector('vaadin-combo-box').items = elementsJson;
          });
        &lt;/script>
      </template>
    </vaadin-demo-snippet>
`;
  }

  static get is() {
    return 'combo-box-presentation-demos';
  }
}
customElements.define(ComboBoxPresentationDemos.is, ComboBoxPresentationDemos);
