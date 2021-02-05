class TemperatureSensorCard extends HTMLElement {
  set hass(hass) {
    const entityId = this.config.entity;

    if (!this.temperature) 
    {
      const root = this.shadowRoot;
      const element = document.createElement('div');
      element.style.backgroundColor = 'transparent';
      element.style.padding = '4px';
      element.style.textAlign = 'center';
      element.header = '';

      if (this.config.useBackground) {
        element.style.backgroundColor = "var(--primary-background-color)";
      }

      this.temperature = document.createElement('label');
      // this.temperature.style.fontSize = '20px';
      element.appendChild(this.temperature);

      this.appendChild(element);

      element.addEventListener('click', event => {
        this._fire('hass-more-info', { entityId: entityId });
      });

      const batteryLevel = hass.states[entityId.replace('temperature', 'power')].state;
      if (batteryLevel < 20)
      element.animate([
        // keyframes
        { opacity: '0%' }, 
        { opacity: '100%' }, 
        { opacity: '0%' }
      ], { 
        // timing options
        duration: batteryLevel * 100,
        iterations: Infinity,
        easing: "ease-in-out"
      });
    }

    const state = hass.states[entityId];

    if (this.config.includeUnits) {
      this.temperature.textContent = state.state + " " + state.attributes.unit_of_measurement 
    } else {
      this.temperature.textContent = state.state;
    }

    var hue = ((25 - parseFloat(state.state)) * 36) % 360;
    this.temperature.style.color = "hsl(" + hue.toString() + ", 50%, 50%)";
  }

  _fire(type, detail, options) {
    //const node = this.shadowRoot;
    options = options || {};
    detail = (detail === null || detail === undefined) ? {} : detail;

    const event = new Event(type, {
      bubbles: options.bubbles === undefined ? true : options.bubbles,
      cancelable: Boolean(options.cancelable),
      composed: options.composed === undefined ? true : options.composed
    });
    event.detail = detail;
    this.dispatchEvent(event);
    return event;
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    this.config = config;
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    return 3;
  }
}

customElements.define('temperature-sensor-card', TemperatureSensorCard);