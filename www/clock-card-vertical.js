class ClockCardVerical extends HTMLElement {
  set hass(hass) {
    if (!this.time) {
      const card = document.createElement('ha-card');
      const now = document.createElement('div');
      this.time = document.createElement('div');
      this.date = document.createElement('div');
      
      this.time.style.fontSize = "36px";
      this.date.style.fontSize = "18px";
      
      if (this.config.useBackground) {
        card.style.backgroundColor = "var(--primary-background-color)";
      }
      card.style.padding = '4px';
      
      now.appendChild(this.time);
      now.appendChild(this.date);
      
      card.appendChild(now);
      this.appendChild(card);
    }

    this._updateTime();
    setInterval(() => this._updateTime(), 500);
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    this.config = config;
  }
  
  
  
  

  _updateTime(force = false) {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var Digital = new Date();
    var hours = Digital.getHours();
    var minutes = Digital.getMinutes();
    var seconds = Digital.getSeconds();
    var day = Digital.getDate();
    var year = Digital.getFullYear();
    var month = Digital.getMonth() + 1;

    if (hours <= 9) {
        hours = "0" + hours;
    }
    if (minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (seconds <= 9) {
        seconds = "0" + seconds;
    }

    this.time.innerHTML = hours + ":" + minutes + ":" + seconds;
    this.date.innerHTML = days[Digital.getDay()] + ", " + month + "/" + day + "/" + year;
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    return 3;
  }
}



customElements.define('clock-card-vertical', ClockCardVerical);


