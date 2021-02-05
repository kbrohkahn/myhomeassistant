class CountdownCard extends HTMLElement {
    set hass(hass) {
      if (!this.content) {
        const card = document.createElement('ha-card');
        // card.header = 'Example card';
        card.style.background = 'none';
        this.content = document.createElement('div');
        this.content.style.padding = '0 16px 16px';
        card.appendChild(this.content);
        this.appendChild(card);
      }
  
      const entityId = this.config.entity;
      const state = hass.states[entityId];
      const stateStr = state ? state.state : 'unavailable';
  
      this.alarmDate = new Date(Date.parse(stateStr));
      
      setInterval(() => this.updateRemainingTime(), 1000);
    }

    updateRemainingTime() {
      var remainingTime = new Date(this.alarmDate  - new Date());

      var hours = remainingTime.getHours().toString();
      var minutes = remainingTime.getMinutes().toString();
      var seconds = remainingTime.getSeconds().toString();
  
      if (hours <= 9) {
          hours = "0" + hours;
      }
      if (minutes <= 9) {
          minutes = "0" + minutes;
      }
      if (seconds <= 9) {
          seconds = "0" + seconds;
      }
  
      this.content.innerHTML = hours + minutes + seconds;
      // this.content.innerHTML = this.alarmDate + " and " + new Date() + " and " + Date.now();

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
  
  customElements.define('countdown-card', CountdownCard);