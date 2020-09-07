class TargetingComputerClockCard extends Polymer.Element {
  
    static get template() {
      return Polymer.html`
            <style>
          @font-face {
            font-family: ag-stencil;
            src: url(AG-Stencil.ttf);
          }

          :host {
            cursor: pointer;
          }
          .content {
            border: solid yellow 2px;
            background: black;
            border-radius: 16px;
          }
          #time {
            font-family: 'Allerta Stencil', 'Courier New', sans-serif;
            font-size: 72px;
            padding: 0 16px;
            line-height: normal;
            color: #dd0000;
          }
        </style>
        <ha-card>
          <div class="content">
            <div id="time"></div>
          </div>
        </ha-card>
       `
    }
    
    static get properties() {
      return {
        _hass: Object
      }
    }
    
    ready() {
      super.ready();
      this.time = this.$.time;
      
      this._updateTime();
      setInterval(() => this._updateTime(), 1000);
    }
    
    setConfig(config) {
      this.config = config;
    }
    
    set hass(hass) {
      this._hass = hass;
    }
  
    _updateTime(force = false) {
      this.Digital = new Date();
      var hours = this.Digital.getHours().toString();
      var minutes = this.Digital.getMinutes().toString();
      var seconds = this.Digital.getSeconds().toString();
  
      if (hours <= 9) {
          hours = "0" + hours;
      }
      if (minutes <= 9) {
          minutes = "0" + minutes;
      }
      if (seconds <= 9) {
          seconds = "0" + seconds;
      }
  
      //this.time.innerHTML = hours + ":" + minutes + ":" + seconds;
      this.time.innerHTML = hours + minutes + seconds;
    }
  
    // The height of your card. Home Assistant uses this to automatically
    // distribute all cards over the available columns.
    getCardSize() {
      return 3;
    }
  }
  
  customElements.define('targeting-computer-clock-card', TargetingComputerClockCard);