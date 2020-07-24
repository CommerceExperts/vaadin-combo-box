const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="material-combo-box" theme-for="vaadin-combo-box">
  <template>
    <style include="material-field-button">
      :host {
        display: inline-flex;
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }

      [part="toggle-button"]::before {
        content: var(--material-icons-dropdown);
      }

      :host([opened]) [part="toggle-button"] {
        transform: rotate(180deg);
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
