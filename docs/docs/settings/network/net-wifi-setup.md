# WiFi Settings

In the Settings Menu, select the WiFi settings. Up to 4 sets of WiFi credentials can be saved.

Once you are in the WiFi Network menu, you can enable/disable WiFi and save the WiFi network credentials. Once connected to a 2.4GHz WiFi network, you can synchronize the date and time, connect to an IoT service to log data, and update the latest firmware over-the-air. Since the WiFi is turned on by default, you will simply need to save the WiFi network's name and password.

<figure>
![WiFi Network Menu Options](/img/sfe-datalogger-wifi-settings.png)
<figcaption>Enter WiFi Networks</figcaption>
</figure>

The WiFi system of the DataLoggerIoT can store up to four sets of WiFi creditials, but only one is required for connected operation. When connecting to the WiFi network, the DataLoggerIoT will attempt to locate and connect to a specified WiFi network, until a valid network is found. Having multi networks allows the DataLoggerIoT to move between locations and continue to operate without any user interaction.

## WiFi Configuration

The following configuration properties are provided for the WiFi connection:

|Setting|Description|
|--|--|
|**Enabled**|Enable or Disable the WiFi Network connection|
|**Network Name**|The SSID of the WiFi network|
|**Password**|The Password to connect to the WiFi network|
|**Network 2 Name**|Alternative network 2 SSID|
|**Network 2 Password**|Alternative network 2 Password|
|**Network 3 Name**|Alternative network 2 SSID|
|**Network 3 Password**|Alternative network 3 Password|
|**Network 4 Name**|Alternative network 2 SSID|
|**Network 4 Password**|Alternative network 4 Password|

When settings are changed, the DataLoggerIoT should be restarted to have the new settings take effect.

:::note

The ESP32-WROOM can only connect to a 2.4GHz WiFi network.

:::

## Using a NFC to Set WiFi Credentials

If you have a [Qwiic Dynamic NFC/RFID Tag](https://www.sparkfun.com/products/21274) connected to the board's Qwiic connector, you can easily update your WiFi credentials! Just make sure to save the WiFi credentials to the tag.

If you saved your preferences to a JSON file on your microSD card's root directory, you can also save your WiFi credentials and load the system settings from the menu as well!
