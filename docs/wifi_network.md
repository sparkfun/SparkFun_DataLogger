---
icon: material/wifi
---



To take advantage of syncing the DataLogger to the Network Time Protocol (NTP), logging data to an IoT service, or updating firmware OTA, you will need to connect to a 2.4GHz WiFi network.

**Note**  The DataLogger IoT boards can only connect to a 2.4GHz WiFi network.

Open a Serial Terminal, connect to the COM port that your DataLogger enumerated to, and set it to  **115200** baud. In this case, we connected to **COM13**. Press any key to enter the Main Menu. Type <kbd>1</kbd> to enter the Settings menu. Then send a <kbd>4</kbd> to configure the WiFi settings.

![WiFi Network Menu Options](assets/SparkFun_Datalogger_IoT_WiFi_Network_Menu.JPG)

Send a ```2``` to set the WiFi Network Name. You'll be prompted to set the network name. In this case, the network name is `sparkfun`. Once you enter the name, hit the ```enter``` key.

![Configure WiFi Network](assets/Configure_WiFi_Network.PNG)

Send a ```2``` to set the WiFi  password. You'll be prompted to set the password. As you send the password, each character will be masked by a asterisk (i.e. &ast;) Once you enter the name, hit the ```enter``` key.

![Configure WiFi Password](assets/Configure_WiFi_Password.PNG)

Follow the prompts to exit out of the menu properly so that the DataLogger IoT saves the settings.

![Output Save Settings Confirmation](assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG)
>

Once you see the message `[I] Saving System Settings` and data on the output, hit the reset button on the board. You can also use the menu to perform a device restart, however you will need to ensure that you receive the message indicating that the settings were saved before restarting the device.

Once the device has restarted, the DataLogger will provide an output as it is initializing. If the WiFi credentials are saved properly, you will receive a message indicating that your chosen network is connected to your WiFi network. If the time source is set to the default NTP client, you will also notice that the time will be synced to the latest date and time!

![WiFi Startup](assets/WiFi_Connected_NTP_Synced.PNG)
