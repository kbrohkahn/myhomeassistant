class LightGroupCard extends HTMLElement {
    set hass(hass) {
        const entityId = this.config.entity;

        if (!this.content) {
            const card = document.createElement('ha-card');
            card.style.height = '100%';
            card.style.backgroundColor = 'transparent';
            card.header = '';
            
            this.content = document.createElement('div');
            this.content.style.height = '100%';
            this.content.style.opacity = '0.2';
            this.content.style.borderRadius = '8px';

            card.appendChild(this.content);
            this.appendChild(card);
        }
        
        const state = hass.states[entityId];
        
        if (state ? state.state == "on" : false) {
            const colorArray = state ? state.attributes.rgb_color : null
    
            if (colorArray) {
                this.content.style.backgroundColor = "rgb(" + colorArray[0] + ", " + colorArray[1] + ", " + colorArray[2] + ")";
                this.content.style.border = "none";
            } else {
                this.content.style.backgroundColor = "transparent";
                this.content.style.border = "1px solid rgb(211, 211, 211)";
            }
            
            this.content.addEventListener('click', event => {
                this._fire('hass-more-info', { entityId: entityId });
            });
        } else {
            this.content.style.backgroundColor = "transparent";
            this.content.style.border = "1px solid rgb(211, 211, 211)";
          
            this.content.addEventListener('click', event => {
                this._fire('toggle', { entityId: entityId });
            });
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

customElements.define('light-group-card', LightGroupCard);