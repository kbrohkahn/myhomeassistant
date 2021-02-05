import {
    LitElement, html
} from 'https://unpkg.com/@polymer/lit-element@^0.5.2/lit-element.js?module';

class VideoBackgroundCard extends LitElement {
static get properties() {
    return {
    hass: Object,
    config: Object,
    }
}

_render({ hass, config }) {
    var url = "https://kevin.broh-kahn.com/hassio/videos/";
    if (config.local)
    {
        url = "http://localhost/videos/";
    }
    // var url = 'file:///C:\\Users\\kevin\\OneDrive\\Development\\Hassio\\videos\\';
    url += config.fileName;

    return html`
    <style>
        .bg-video{
            width: 100vw;
            height: 100vh;
        }
    </style>
    <video autoplay loop muted class='bg-video'>
        <source src="${url}" type="video/mp4">
    </video>
    `;
}

setConfig(config) {
    if (!config.fileName) {
        throw new Error('You need to define file name');
    }

    this.config = config;
}

getCardSize() {
    return 0;
}
}
customElements.define('video-background-card', VideoBackgroundCard);