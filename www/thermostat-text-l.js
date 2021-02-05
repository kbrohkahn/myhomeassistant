class ThermostatTextCard extends HTMLElement {
    set hass(hass) {
        const entityId = this.config.entity;

        if (!this.temperature) {
            const root = this.shadowRoot;
            const element = document.createElement('div');
            element.style.backgroundColor = 'transparent';
            element.style.padding = '4px';
            element.style.textAlign = 'center';
            element.style.color =  "var(--state-icon-color, #bbb)";
            element.header = '';
            
            
            if (this.config.useBackground) {
                element.style.backgroundColor = "var(--primary-background-color)";
            }
            
            const temperatureDiv = document.createElement('div');
            this.temperature = document.createElement('label');
            temperatureDiv.appendChild(this.temperature);
            element.appendChild(temperatureDiv);
            
            const humidityDiv = document.createElement('div');
            this.humidity = document.createElement('label');
            humidityDiv.appendChild(this.humidity);
            element.appendChild(humidityDiv);
            
            const targetDiv = document.createElement('div');
            this.target  = document.createElement('label');
            targetDiv.appendChild(this.target);
            element.appendChild(targetDiv);
            
            const fanDiv = document.createElement('div');
            this.fan  = document.createElement('label');
            fanDiv.appendChild(this.fan);
            element.appendChild(fanDiv);
            
            this.appendChild(element);
            
            element.addEventListener('click', event => {
                this._fire('hass-more-info', { entityId: entityId });
            });
        }
        
        const state = hass.states[entityId];
        
        this.temperature.textContent = state.attributes.current_temperature;
        this.humidity.textContent = hass.states['sensor.hallway_thermostat_humidity'].state + "%";

        // if (state.attributes.target_temp_high) {
        //     this.target.textContent = state.attributes.target_temp_low  + state.attributes.target_temp_high ;
        // } 
        // else if (state.attributes.temperature) {
        // }
        // else {
        //     this.target.textContent = "N/A";
        // }

        if (state.state == "cool") {
            // this.style.color =  "hsl(240, 100%, 50%)";
            this.target.textContent = "< " + state.attributes.temperature + "°";
        } else if (state.state == "heat") {
            // this.style.color =  "hsl(0, 100%, 50%)";
            this.target.textContent = state.attributes.temperature + "° <";
        } else {
            this.target.textContent = "Off";
        }

        if (state.attributes.hvac_action) {
            if (state.attributes.hvac_action.toLowerCase() === "running") {
                this.target.style.color =  "var(--state-icon-active-color, #bbb)";
            }
        }

        if (state.attributes.fan_mode) {
            this.fan.textContent = state.attributes.fan_mode;
            if (state.attributes.fan_action.toLowerCase() === "running") {
                this.fan.style.color =  "var(--state-icon-active-color, #bbb)";
            }
        }
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

customElements.define('thermostat-text-card', ThermostatTextCard);