### WiFi Settings

!!! note
    The ESP32-WROOM can only connect to a 2.4GHz WiFi network.

In the Settings Menu, select the WiFi settings. Up to 4 sets of WiFi credentials can be saved.

![WiFi Network Menu Options](assets/sfe-datalogger-wifi-settings.png)
/// caption
Enter WiFi Networks
///

Once you are in the WiFi Network menu, you can enable/disable WiFi and save the WiFi network credentials. Once connected to a 2.4GHz WiFi network, you can synchronize the date and time, connect to an IoT service to log data, and update the latest firmware over-the-air. Since the WiFi is turned on by default, you will simply need to save the WiFi network's name and password.

* **Enabled** - Enable or Disable the WiFi Network connection
* **Network Name** - The SSID of the WiFi network
* **Password** - The Password to connect to the WiFi network
* **Network 2 Name** - Alternative network 2 SSID
* **Network 2 Password** - Alternative network 2 Password
* **Network 3 Name** - Alternative network 2 SSID
* **Network 3 Password** - Alternative network 3 Password
* **Network 4 Name** - Alternative network 2 SSID
* **Network 4 Password** - Alternative network 4 Password

When finished, you will need to exit the menus so that the DataLogger IoT saves the changes. Send a ```b``` to exit out this menu, ```b``` to exit out of the DataLogger IoT settings, and ```x``` to exit out of the main menu.

Press the reset button or cycle power to restart the DataLogger IoT. You can also go through the menu and reset the device through software as well. Once the board is reset, the DataLogger will attempt to connect to a WiFi network. If you are successful, the output will indicate that the board connected to a WiFi network and will update the current time through a NTP Client.

#### Using a NFC to Set WiFi Credentials

If you have a [Qwiic Dynamic NFC/RFID Tag](https://www.sparkfun.com/products/21274) connected to the board's Qwiic connector, you can easily update your WiFi credentials! Just make sure to save the WiFi credentials to the tag.

If you saved your preferences to a JSON file on your microSD card's root directory, you can also save your WiFi credentials and load the system settings from the menu as well!
