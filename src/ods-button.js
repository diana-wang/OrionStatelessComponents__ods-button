// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";
import buttonProperties from './generated/componentProperties-css.js';
import dotsProperties from './generated/dotsProperties-css.js';
import styleCss from "./style-css.js";

class OdsButton extends LitElement {
  constructor() {
    super();
    this.string = "";
    this.type = "primary";
    this.context = "false";
    this.disabled = "false";
    this.active = "false";
    this.getButtonType = this.getButtonType.bind(this);
    this.getButtonState = this.getButtonState.bind(this);
    this.getButtonContext = this.getButtonContext.bind(this);
    
    // adds event based on activelly being touched
    this.addEventListener('touchstart', function() {
      this.classList.add('is-touching');
    });
  }

  static get properties() {
    return {
      string: {
        type: String
      },
      type: {
        type: String
      },
      disabled: {
        type: String
      },
      active: {
        type: String
      },
      context: {
        type: String
      }
    };
  }

  getButtonType(type) {
    return type === "secondary" ? "button--secondary" : "";
  }

  getButtonState(active) {
    return active === "true" ? "is-active" : "";
  }

  getButtonContext(context) {
    return context === "true" ? "button--enclosed" : "";
  }

  isDisabled(disabled, active) {
    return disabled === "true" || active === "true";
  }

  render() {
    return html`
      ${buttonProperties}
      ${dotsProperties}
      ${styleCss}

      <button
        aria-labelledby='odsButtonString'
        aria-label='${this.string}'
        title='${this.string}'
        class="button ${this.getButtonType(this.type)} ${this.getButtonState(this.active)} ${this.getButtonContext(this.context)}"
        ?disabled="${this.isDisabled(this.disabled, this.active)}"
      >
        <span id='odsButtonString'>
          ${this.string}
        </span>

        <span class="dancingDots ${this.getButtonState(this.active)}">
          <div class="dots">
            <div class="block">
              <div></div>
            </div>
            <div class="block">
              <div></div>
              <div></div>
            </div>
            <div class="block">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </span>
      </button>
    `;
  }
}

customElements.define("ods-button", OdsButton);