!!! note
    The ESP32-WROOM can only connect to a 2.4GHz WiFi network. Unfortunately, 5GHz is not supported on the ESP32-WROOM module.

To take advantage of syncing DataLogger to the Network Time Protocol (NTP), logging data to an IoT service, or updating firmware OTA, you will need to connect to a 2.4GHz WiFi network.

In the Settings Menu, send a <kbd>4</kbd> to configure the WiFi settings.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_WiFi_Network_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_WiFi_Network_Menu.JPG" width="1000" height="667"></a>
</div>

Send a <kbd>2</kbd> to set the WiFi Network Name. You'll be prompted to set the network name. In this case, the network name is `sparkfun`. Once you enter the name, hit the <kbd>enter</kbd> key.

<div style="text-align: center">
  <a href="../assets/Configure_WiFi_Network.PNG">
  <img src="../assets/Configure_WiFi_Network.PNG" width="1000" height="667" alt="Configure WiFi Network"></a>
</div>

Send a <kbd>2</kbd> to set the WiFi  password. You'll be prompted to set the password. As you send the password, each character will be masked by a asterisk (i.e. &ast;) Once you enter the name, hit the <kbd>enter</kbd> key.

<div style="text-align: center">
  <a href="../assets/Configure_WiFi_Password.PNG">
  <img src="../assets/Configure_WiFi_Password.PNG" width="1000" height="667" alt="Configure WiFi Password"></a>
</div>

Follow the prompts to exit out of the menu properly so that the DataLogger IoT saves the settings.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG" width="1000" height="667" alt="Save Settings Menu"></a>
</div>

Once you see the message `[I] Saving System Settings` and data on the output, hit the reset button on the board. You can also use the menu to perform a device restart, however you will need to ensure that you receive the message indicating that the settings were saved before restarting the device.

Once the device has restarted, the DataLogger will provide an output as it is initializing. If the WiFi credentials are saved properly, you will receive a message indicating that your chosen network is connected to your WiFi network. If the time source is set to the default NTP client, you will also notice that the time will be synced to the latest date and time!

<div style="text-align: center">
  <a href="../assets/WiFi_Connected_NTP_Synced.PNG">
  <img src="../assets/WiFi_Connected_NTP_Synced.PNG" width="1000" height="667" alt="Configure WiFi Password"></a>
</div>
