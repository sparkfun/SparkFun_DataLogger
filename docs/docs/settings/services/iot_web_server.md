
# IoT Web Server

As of firmware v01.02.00, log files can be viewed and downloaded over a WiFi network! This saves you time by allowing you to download the files without the need to disconnect the DataLogger IoT and manually remove microSD card.

The following is covered by this document:

* How a user configures and uses the HTTP connection
* Use examples

## IoT Web Server Connection Setup

To connect to the ESP32's IoT Web Server, the following information is needed:

* The server name/address
* _[optional]_ A username - if required
* _[optional]_ A password - if required

### IoT Web Server Menu System

We'll need to adjust the settings for the IoT Web Server.

For users that are interested in using the menu system, open a Serial Terminal, connect to the COM port that your DataLogger enumerated to, and set it to **115200** baud. In this case, we connected to **COM13**. Press any key to enter the Main Menu. Type ```1``` to enter the Settings menu. Then select the IoT Web Server Menu. When the menu system for the IoT Web Server is presented, the following options are displayed:

![IoT Web Server Options](/img/sparkfun_datalogger_iot_web_server_menu.jpg)

The options are:

* Enable/Disable the connection
* Username
* Password
* Enable/Disable mDNS support
* mDNS name

At a minimum, you will just need to enable the connection. However, we recommend enabling mDNS support if it is supported in your network.

Once all these values are set, the system will serve the log files in your local 2.4GHz WiFi network following the JSON information structure noted below in this document.

## JSON File Entries

If a JSON file is being used as an option to import settings into the DataLogger IoT, the following entries are used for the IoT web server:

```json
"IoT Web Server": {
  "Enabled": false,
  "Username": "",
  "Password": "",
  "mDNS Support": false,
  "mDNS Name": "dataloggerAD6B8"
},
```

Where:

* `Enabled` - Set to `true` to enable the connection.
* `Username` - Web server user name if being used.
* `Password` - Web server password if being used.
* `mDNS Support` - Set to `true` if multicast DNS is supported. This allows you to enter the address as "`http://dataloggerXXXXX.local`" (where `XXXXX` is generated from the last 5x characters from your board ID) rather than typing the exact IP address of the ESP32.
* `mDNS Name` - Multicast DNS name. In this case, the default name was set to `dataloggerAD6B8`. This name will be different depending on your DataLogger IoT's board ID so `AD6B8` will be different for your board.

> To load the values by the system at startup using a JSON file and microSD card, you will need to [configure the Save Settings](settings/general/gen-save-settings.md). This JSON file will be created with the "**Save to Fallback**" option. Make sure to enable the MQTT Client as well.

## Connect and Download Log File

To use this feature, ou will need to make sure that the ESP32 is on the same network as your computer in order to access the log files. Addionally, when authentication is enabled, some browsers might require a second login depending on user settings.

### Using a local server name

Once the web server is enabled and the settings are saved, you will need to reboot the DataLogger IoT. As the DatLogger initializes, it will connect to your WiFi Network. Take note of the mDNS address, in this case, it was "`http://dataloggerAD6B8.local`".

![DataLogger IoT Initializing, WiFi Connected, Web Server Enabled](/img/sparkfun_datalogger_iot_initializing_wifi_connected_iot_web_server_enabled_v01p02p00.jpg)

Once the DataLogger IoT has finished initializing, open web browser. Connect the DataLogger IoT by entering the address "`http://dataloggerXXXXX.local`", where `XXXX` is the last 5x characters of your board ID. You will be presented with the log files available on the microSD card. Click on a log file to download and save it to your computer.

![Viewing Available Log Files through a Web Browser](/img/iot_web_server-chrome_browser-available_log_files.jpg)

### Using the DataLogger IoT IP Address

If mDNS is not supported on your network, you can also enter the IP address of the Datalogger IoT into a web browser to view and download the log files. You can view the IP address when the DataLogger IoT is initializing. If you have administrative privileges to the WiFi Network, you can also view the IP address through your  WiFi router as well.

![Viewing Available Log Files through a Web Browser using IP Address](/img/iot_web_server-chrome_browser-available_log_files_ip_address.jpg)

Now that you have downloaded the log files, try graphing the data on a spreadsheet!
