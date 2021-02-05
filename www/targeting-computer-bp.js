class TargetingComputer extends HTMLElement {
    set hass(hass) {
        const entityId = this.config.entity;

        if (!this.card) {
            this.card = document.createElement('ha-card');

            this.card.innerHTML = `
<style>
ha-card {
  height: 100%;
}

#main {
  border: solid 2px yellow;
  border-radius: 64px;
  position: relative;
  height: 100%;
  box-sizing: border-box;
}

.square {
  border: solid yellow 2px;
  position: absolute;
  border-top: none;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: steps(8);
  
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@keyframes square1 {
  // to {transform: translate(-50%, -50%) scale(3,3);}
  to {width: 100%; height: 200%;}
}

#square1 {
  width: 50%;
  height: 100%;
  border-bottom: none;
  animation-name: square1;
}

@keyframes square2 {
  // to {transform: translate(-50%, -50%) scale(3,3);}
  to {width: 50%; height: 100%;}
}

#square2 {
  width: 16.6%;
  height: 33.3%;
  animation-name: square2;
}

@keyframes square3 {
  // to {transform: translate(-50%, -50%) scale(3,3);}
  to {width: 16.6%; height: 33.3%;}
}

#square3 {
  width: 5.6%;
  height: 11.3%;
  animation-name: square3;
}

@keyframes square4 {/
  // to {transform: translate(-50%, -50%) scale(3,3);}
  to {width: 5.6%; height: 11.3%;}
}

#square4 {
  width: 1.9%;
  height: 3.8%;
  animation-name: square4;
}

@keyframes square5 {
  // to {transform: translate(-50%, -50%) scale(3,3);}
  to {width: 1.9%; height: 3.8%;}
}

#square5 {
  width: 0.7%;
  height: 1.4%;
  animation-name: square5;
}

@keyframes square6 {
  // to {transform: translate(-50%, -50%) scale(3,3);}
  to {width: 3%; height: 6%;}
}

#square6 {
  width: 1.5%;
  height: 3%;
  animation-name: square6;
}

#red {
  border-left: solid #dd0000 4px;
  border-right: solid #dd0000 4px;
  position: absolute;
  left: 18%;
  right: 18%;
  top: 0;
  bottom: 0;
}

.diagonal {
  top: 0;
  bottom: 0;
  position: absolute;  
}

.diagonal.upward {
    background: linear-gradient(to bottom right, transparent calc(50% - 1px), yellow, transparent calc(50% + 4px) );
}

.diagonal.downward {
    background: linear-gradient(to bottom left, transparent calc(50% - 1px), yellow, transparent calc(50% + 4px) );
}

.diagonal1 {
  left: 25%;
  right: 25%;
}

.diagonal2 {
  left: 5%;
  right: 5%;
}

.diagonal3 {
  left: -70%;
  right: -70%;
}
</style>

<div id='main'>
  <div class='square' id='square1'></div>
  <div class='square' id='square2'></div>
  <div class='square' id='square3'></div>
  <div class='square' id='square4'></div>
  <div class='square' id='square5'></div>
  
  <div class='diagonal upward diagonal1'></div>
  <div class='diagonal downward diagonal1'></div>
  <div class='diagonal upward diagonal2'></div>
  <div class='diagonal downward diagonal2'></div>
  <div class='diagonal upward diagonal3'></div>
  <div class='diagonal downward diagonal3'></div>

  <div id='red'></div>
</div>`;

            this.appendChild(this.card);
            
            // this.card.addEventListener('click', event => {
            //     this._fire('hass-more-info', { entityId: entityId });
            // });
        }
        
        // const state = hass.states[entityId];
        
        // this.temperature.textContent = state.attributes.temperature + "°F";
        // this.humidity.textContent = "Humid: " + state.attributes.humidity + "%";
        // this.weather.textContent = state.state;
        // this.wind.textContent = state.attributes.wind_speed + " mph " + state.attributes.wind_bearing + "°";
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
        // if (!config.entity) {
        //     throw new Error('You need to define an entity');
        // }
        this.config = config;
    }

    // The height of your card. Home Assistant uses this to automatically
    // distribute all cards over the available columns.
    getCardSize() {
        return 3;
    }
}

customElements.define('targeting-computer-card', TargetingComputer);