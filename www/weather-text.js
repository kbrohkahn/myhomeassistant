class WeatherTextCard extends HTMLElement {
    set hass(hass) {
        const entityId = this.config.entity;

        if (!this.temperature) {
            const root = this.shadowRoot;
            const card = document.createElement('ha-card');
            card.style.backgroundColor = 'transparent';
            card.style.padding = '4px';
            card.style.textAlign = 'center';
            card.header = '';
            
            if (this.config.useBackground) {
                card.style.backgroundColor = "var(--primary-background-color)";
            }
            
            const temperatureDiv = document.createElement('div');
            this.temperature = document.createElement('label');
            this.temperature.style.fontSize = '24px';
            temperatureDiv.appendChild(this.temperature);
            card.appendChild(temperatureDiv);
            
            const weatherDiv = document.createElement('div');
            this.weather  = document.createElement('label');
            weatherDiv.appendChild(this.weather);
            card.appendChild(weatherDiv);
            
            const humidityDiv = document.createElement('div');
            this.humidity = document.createElement('label');
            humidityDiv.appendChild(this.humidity);
            card.appendChild(humidityDiv);
            
            const windDiv = document.createElement('div');
            this.wind  = document.createElement('label');
            windDiv.appendChild(this.wind);
            card.appendChild(windDiv);
            
            this.appendChild(card);
            
            card.addEventListener('click', event => {
                this._fire('hass-more-info', { entityId: entityId });
            });
        }
        
        const state = hass.states[entityId];
        
        this.temperature.textContent = state.attributes.temperature + "°F";
        this.humidity.textContent = "Humid: " + state.attributes.humidity + "%";
        this.weather.textContent = state.state;
        this.wind.textContent = state.attributes.wind_speed + " mph " + state.attributes.wind_bearing + "°";
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

customElements.define('weather-text-card', WeatherTextCard);