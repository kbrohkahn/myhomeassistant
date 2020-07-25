import logging
import json
from datetime import timedelta
from homeassistant.helpers.entity import Entity
from homeassistant.util import dt
from homeassistant.const import STATE_OK, STATE_UNKNOWN
from . import DOMAIN

_LOGGER = logging.getLogger(__name__)

SENSOR_SCAN_INTERVAL_SECS = 180
SCAN_INTERVAL = timedelta(seconds=SENSOR_SCAN_INTERVAL_SECS)


def setup_platform(hass, config, add_devices, discovery_info=None):
    add_devices([ChromecastDevicesSensor()])

class ChromecastDevicesSensor(Entity):

    def __init__(self):
        self._state = STATE_UNKNOWN
        self._chromecast_devices = []
        self._attributes = {
            'devices_json': [],
            'devices': [],
            'last_update': None
        }
        _LOGGER.debug('initiating sensor')

    @property
    def name(self):
        return 'Chromecast Devices'

    @property
    def state(self):
        return self._state

    @property
    def device_state_attributes(self):
        """Return the state attributes."""
        return self._attributes

    def update(self):
        import pychromecast
        # from cast/media_player.py but is missing cast_type
        # KNOWN_CHROMECAST_INFO_KEY = 'cast_known_chromecasts'
        # _LOGGER.info('KNOWN_CHROMECAST_INFO_KEY: %s', self.hass.data[KNOWN_CHROMECAST_INFO_KEY])
        _LOGGER.info('getting chromecast devices')

        self._chromecast_devices = pychromecast.get_chromecasts()
        _LOGGER.debug('Found chromecast devices: %s', self._chromecast_devices)
        chromecasts = []
        for casts in self._chromecast_devices:
            if type(casts) == list:
                for cast in casts:
                    _LOGGER.info("NIKLAS: %s %s", type(cast), cast.device)
                    device = {
                        'name': cast.device.friendly_name,
                        'cast_type': cast.cast_type,
                        'model_name': cast.model_name,
                        'uuid': str(cast.uuid),
                        'manufacturer': cast.device.manufacturer
                    }
                    chromecasts.append(device)
        self._attributes['devices_json'] = json.dumps(chromecasts, ensure_ascii=False)
        self._attributes['devices'] = chromecasts
        self._attributes['last_update'] = dt.now().isoformat('T')
        self._state = STATE_OK


