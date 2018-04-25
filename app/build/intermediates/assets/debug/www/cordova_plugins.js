cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-hybrid.HybridBridge",
    "file": "plugins/cordova-plugin-hybrid/www/HybridBridge.js",
    "pluginId": "cordova-plugin-hybrid",
    "clobbers": [
      "HybridBridge"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-hybrid": "1.0.0"
};
// BOTTOM OF METADATA
});