const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="lumo-combo-box" theme-for="vaadin-combo-box">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-dropdown);
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
