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
  background: black;  
  border: solid 2px yellow;
  border-radius: 16px;
  position: relative;
  height: 100%;
  box-sizing: border-box;
}

.square {
  border: solid yellow 2px;
  position: absolute;
  border-top: none;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes square1 {
  to  {top: 0%; bottom: 0%; left: -40%; right: -40%}
}

#square1 {
  top: 0%;
  bottom: 0%;
  left: 21%;
  right: 21%;
  border-bottom: none;
  animation-name: square1;
}

@keyframes square3 {
  to  {top: -9%; bottom: -9%; left: 21%; right: 21%;}
}

#square3 {
  top: 37%;
  bottom: calc(37% - 3px);
  left: 43%;
  right: 43%;
  animation-name: square3;
}

@keyframes square4 {
  to  {top: 37%; bottom: calc(37% - 3px); left: 43%; right: 43%;}
}

#square4 {
  top: 47%;
  bottom: calc(47% - 3px);
  left: 48%;
  right: 48%;
  animation-name: square4;
}

@keyframes square5 {
  to  {top: 47%; bottom: calc(47% - 3px); left: 48%; right: 48%;}
}

#square5 {
  top: 48%;
  bottom: 48%;
  left: 49%;
  right: 49%;
  animation-name: square5;
}

@keyframes square6 {
  to  {top: 48%; bottom: calc(48% - 3px); left: 49%; right: 49%;}
}

#square6 {
  top: calc(50% - 1px);
  bottom: calc(50% - 1px);
  left: calc(50% - 3px);
  right: calc(50% - 3px);
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
  left: 10%;
  right: 10%;
}

.diagonal3 {
  left: -35%;
  right: -35%;
}
</style>
            
<div id='main'>
  <div class='square' id='square1'></div>
  <div class='square' id='square3'></div>
  <div class='square' id='square4'></div>
  <div class='square' id='square5'></div>
  <div class='square' id='square6'></div>
  
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