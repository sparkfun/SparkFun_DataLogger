<!-- ---
icon: material/cog
--- -->

# Configuration

Configuring the settings is as easy as opening a serial menu. You can use any serial monitor or terminal emulator to quickly and easily change and store the DataLogger IoT settings via its USB-C interface.

## Serial Terminals

There are plenty of free alternatives out there to configure the DataLogger IoT. For the scope of this tutorial we will be using Tera Term.

* [Tera Term (Windows)](https://learn.sparkfun.com/tutorials/terminal-basics/all#tera-term-windows)
* [RealTerm (Windows)](https://learn.sparkfun.com/tutorials/terminal-basics/all#real-term-windows)
* [Minicom (Linux, Unix, MacOS)](https://manpages.ubuntu.com/manpages/trusty/man1/minicom.1.html)
* [Screen (Linux, Unix, MacOS)](https://learn.sparkfun.com/tutorials/terminal-basics/all#command-line-windows-mac-linux)

!!! note
     A serial terminal client that supports edit characters is required. Most if not all modern serial terminal programs will have the ability to support interactive edits. We have tested the DataLogger IoT with the Tera Term application, ```minicom``` command, and the ```screen``` command.

If this is the your first time using a terminal window, We recommend checking out the [Serial Terminal Basics](https://learn.sparkfun.com/tutorials/terminal-basics) tutortial.

The above guides will show you how to open the correct port for the DataLogger IoT and how to set the baud rate to **115200** baud. You can change the DataLogger IoT's baud rate through the configuration menus too should you need to.

!!! warning "Arduino IDE Serial Monitor -  **Not Recommended**"
    The Arduino IDE Serial Monitor is not intented for interacive user and should not be used with the DataLogger IoT. For users with an Arduino IDE, you could also use the Arduino Serial Monitor by setting the line ending to **Newline**. Users will also need to ```CTRL``` + ```Enter``` when sending any character to the DataLogger IoT. However, we recommend using one of the terminals mentioned earlier.

## Initialization and Serial Output

Connect the DataLogger IoT to a USB cable and connect to your computer. The addressable RGB LED will light up green as it initializes. As of firmware **v1.0.2.00 - build 00013e**, a **Startup Menu** was added to the system. This allows you to change the behavior of the DataLogger at start-up. This change only affects the current system session.

![Output when DataLogger IoT - 9DoF Start-up menu](assets/sparkfun_datalogger_iot-esp32_start-up_menu.jpg)
/// caption
Startup Menu Options
///

* 'n' - Normal startup
* 'a' - Disable I2C device auto load on startup
* 'l' - List the I2C devices supported. This device table is discarded after auto-load
* 'w' - Disable WiFi
* 's' - Disable preference restore during startup

The amount of time the start-up menu is displayed is adjustable. This settings can be configured in the **Settings/Application Settings** page, under the Advanced section.

You should see the following output when the board initializes:

![Output when DataLogger IoT - 9DoF is initializing](assets/sparkfun_datalogger_iot_initializing_v1p02p00.jpg)
/// caption
Startup Output Information
///

The messages in the serial terminal provide us with the DataLogger's configuration and will vary depending on the firmware version that is loaded on the board.

* The DataLogger IoT software version (in this case is **v01.02.00 - build 00013e**).
* As the DataLogger IoT is initializing, the system settings are being restored from the last saved preference.
* There no WiFi credentials and the board has failed to connect. This output will change once you provide the WiFi credentials and are able to connect to the network.
* There are 3x devices currently detected and they are connected through I<sup>2</sup>C through the Qwiic port and SPI. These are the on-board sensors for the DataLogger IoT. There may be more devices that are detected depending on the firmware and what is connected to the ports. Since these were recognized, they were loaded onto the DataLogger IoT.
* The current date and time is shown (by default), the date and time is set to **1-1-1970** and **00:00:00**). This value will change depending on the clock source through NTP, RTC, or a u-blox GNSS module.
* The time the board has been running will be shown in the uptime.
* The primary external time source that the board syncs is currently through the **NTP client**. This can be configured depending on your clock source.
* The board name (in this case, it was **SparkFun DataLogger IoT - 9DoF**)
* The board ID (in this case, it was **SFD16C8F0D1AD6B8**)
* The microSD card has been found, the type of memory card it is, the size of the memory card, how much memory is used, and how much is available.
* If there is a WiFi network name saved, the SSID will be shown along with information indicating whether the board was able to connect to the WiFi network. By default there is no SSID saved in memory.
* If there is a battery connected, the LiPo Battery Fuel Guage will indicate if there is one attached to the board.
* Parameters for low power mode will be provided indicating if deep sleep is enabled, sleep interval, and wake interval.
* Parameters for logging are also provided for the logging interval, the format for the serial output, format for the microSD card, current saved filename, and file rotation period.
* The board will also show the available IoT services that are enabled for the DataLogger IoT.
* Current settings to download log files via a web interface (included in firmware v01.02.00)
* Supported devices through Qwiic or SPI will be listed if they are connected.
* The output will finish by telling you what devices are connected to the DataLogger IoT again.

As of firmware v01.02.00, there is also a compact mode! By adjusting the setting, the ESP32 will output less at startup. This settings can be configured in the **Settings/Application Settings** page, under the Advanced section.

![Output when DataLogger IoT - 9DoF is initializing, compact](assets/sparkfun_datalogger_iot_initializing_compactv1p02p00.jpg)
/// caption
Compact Startup Mode Output
///

Once the DataLogger IoT has initialized, the DataLogger IoT will begin outputting comma separated values (CSV). This is the default output that is set for the DataLogger IoT - 9DoF. Of course, you will not have as many readings on the DataLogger IoT since the 6DoF IMU and magnetometer are not populated on that version of the board.

![CSV Output on the DataLogger IoT - 9DoF v01.02.00](assets/sparkfun_datalogger_iot_output_v1p02p00.jpg)
/// caption
CSV Output to the Serial Console
///

Depending on your DataLogger IoT preferences, your device may output as a JSON format like the image shown below.

![JSON Output on the DataLogger -IoT - 9DoF](assets/sparkfun_datalogger_iot_output_json_v01p02p00.jpg)
/// caption
JSON Output to the Serial Console
///

The data scrolling up the screen show what each device's output is along with their associated unit if it is available. Your mileage will vary depending on the board version that you have and what device is connected:

* `MAX17048.Voltage (V)`
* `MAX17048.State of Charge (%)`
* `MAX17048.Charge Rate (%/hr)`
* `ISM330.Accel X (milli-g)`
* `ISM330.Accel Y (milli-g)`
* `ISM330.Accel Z (milli-g)`
* `ISM330.Gyro X (milli-dps)`
* `ISM330.Gyro Y (milli-dps)`
* `ISM330.Gyro Z (milli-dps)`
* `ISM330.Temperature (C)`
* `MMC5983.X Field (Gauss)`
* `MMC5983.Y Field (Gauss)`
* `MMC5983.Z Field (Gauss)`
* `MMC5983.Temperature (C)`

The output will vary depending on what is connected so you may get additional readings in the output and it may not be in the following order listed above. The logging rate defaults to about 0.067Hz (or 15000ms), so as the data scrolls past, you will see the last value settle at about 0.067Hz.

## Main Menu

Right! Let's open the main menu by pressing on any key in the serial terminal program.

![DataLogger IoT Main Menu](assets/sparkfun_datalogger_iot_main_menu.jpg)
///
Main Menu
///

You will be prompted with a few options. Once in the configuration menu, all three colors of the addressable RGB LED will turn on to produce the color white indicating that you are navigating through the menu. Before we dive into the settings, lets check out a few commands and saving settings.

### Quick (!) Command Reference

As of firmware v01.02.00, commands can be executed directly from the serial console thus bypassing the serial menu system! The following commands are supported.

|Command|Description|
|--|--|
|!about|Display the system about page|
|!clear-settings|Clear the on board system preferences with a yes/no prompt|
|!clear-settings-forced|Clear the on board system preferences with no prompt|
|!devices|List the currently connected devices|
|!factory-reset|Perform a factory reset - presents a Y/N prompt|
|!heap|Display the current system heap memory usage|
|!json-settings|For setting the device settings via a serial connection. When this command is sent, the system expects to receive a JSON settings file|
|!log-now|Perform a log observation event|
|!log-rate|If log rate measurement is enabled, the current log rate is printed|
|!reset-device|Reset the device - erasing any saved settings and restarting the device|
|!reset-device-forced|Reset the device, but without a Y/N prompt|
|!restart|Restart the device|
|!restart-forced|Restart the device without a Y/N prompt|
|!save-settings|Save the current settings to on-board flash|
|!sdcard|Output the current SD card usage statistics|
|!systime|Output current system time|
|!uptime|The uptime of the device|
|!device-id|The ID for the device|
|!version|The version of the firmware|
|!wifi|Output current system WiFi state|

Typing a quick command and hitting the ```Enter``` button will result in the DataLogger IoT executing the command without the need to go through the menu system. Below is an example showing the `!about` quick command being sent and then executing the command as the DataLogger IoT is outputting CSV values to the serial terminal.

![Quick Command Entered](assets/sfe-datalogger-quick-cmd.png)
/// caption
Enter a quick command
///

### Exiting and Saving

When exiting the menus, you will be prompted with either an ```x``` or ```b```. You can use either character when exiting the menus as well as ```X``` or ```B```. Note that you will need to use either of these keys when making a change in order for the DataLogger IoT to save any changes in memory. Make sure that you receive the following message indicating that the settings were saved: ```[I] Saving System Settings```. The DataLogger IoT will the continue reading the devices and outputting the readings through the serial terminal.

![Output Save Settings](assets/sparkfun_datalogger_iot_system_save_settings_menu.jpg)
/// caption
Save Settings When Exiting the Menu
///

### Cancelling Changes

You can also use any of your ```Esc``` to exit. However, using the escape will not save any changes in memory once the reset button is hit or whenever power is cycled.

![Output when Cancelling Changes](assets/sparkfun_datalogger_iot_system_escape_menu.jpg)
/// caption
Escape to Exit a Menu
///

### Timeout from Inactivity

The menus will slowly exit out after 2 minutes of inactivity, so if you do not press a key the DataLogger IoT will return to its previous menu. It will continue to move back until it reaches the main menu. After another additional 2 minutes of inactivity, the board will exit begin logging data again. When the menu exits from inactivity, any changes will not be saved in memory as well.

![output when timing out](assets/sparkfun_datalogger_iot_system_no_user_input_exit_menu.jpg)
/// caption
Timeout in the Menu
///

## Settings

Let's start by configuring the DataLogger's system settings. Send a ```1``` through the serial terminal. You will have the option to adjust various settings ranging from the your preferences, time source to synchronize the date and time, WiFi network, how the device logs data, which IoT service to use, and firmware updates.

![settings menu options](assets/sfe-datalogger-settings-menu.png)
/// caption
The Settings Menu
///

!!! note
    You may notice after entering a ```1``` that there is a slight delay before the DataLogger IoT responds. The delay was added to allow some time for the DataLogger IoT to receive an additional digit for any option greater than 9. If you want to head to option 1 immediately without the slight delay, you can hit the ```Enter``` key to enter the Application Settings.

We'll go over each of these options below.

### General: Application Settings

In the Settings Menu, send a ```1``` to adjust the Application Settings.

![application settings options](assets/sfe-datalogger-app-menu.png)
/// caption
Application Settings Menu
///

In the Application Settings Menu, users will be able to configure the addressable RGB's LED through software, menu timeout, microSD card's output format, serial console's output format, terminal's baud rate, deep sleep parameters, and view the current settings of the DataLogger IoT similar to when the board was initialized. Depending on your preference and how you are logging data, you can adjust the data as CSV or JSON.

* **LED Enabled** - Enable/Disable the on-board RGB LED activity
* **Menu Timeout** - Inactivity timeout period for the menu system
* **Color Output** - Use color output with the Serial console.
* **Board Name** - A specific name for this DataLogger
* **SD Card Format** - Enable and set the output format
  
* **Serial Console Format** - Enable and set the output format
* **JSON Buffer Size** - Output buffer size in bytes -  1600 bytes _(default)_
* **Terminal Baud Rate** - Update terminal baud rate. Changes take effect on restart. **115200** _(default)_
* **Enable System Sleep** - If enabled, sleep the system
* **Sleep Interval (sec)** - The interval the system will sleep for
* **Wake Interval (sec)** - The interval the system will operate between sleep period
* **Startup Messages** Level of message output at startup
* **Startup Delay** Startup Menu Delay in Seconds
* **Device Names** Name always includes the device address
* **Verbose Messages** Enable verbose messaging
* **About...** - Details about the system

!!! note
    Once the baud rate is changed and saved, make sure to adjust the baud rate of your serial terminal when the board is reset. If you forgot the baud rate, you can hold the BOOT button down for 20 seconds to erase the on-board preferences (besides the baud rate, this also includes any other settings that were saved) and restart the board.

When finished, you will need to exit the menus so that the DataLogger IoT saves the changes. Send a ```b``` to exit out this menu, ```b``` to exit out of the DataLogger IoT settings, and ```x``` to exit out of the main menu.

![save settings menu](assets/sparkfun_datalogger_iot_system_save_settings_menu.jpg)
/// caption
Exit the Menu System
///

### General: Save Settings

In the Settings menu, select the Save Settings menu. As of firmware v01.01.01, the JSON output buffer size is now user configurable. This will be under option "**JSON File Buffer Size**" when in the Save Settings Menu.

![save settings menu](assets/sparkfun_datalogger_iot_save_settings_menu.jpg)
/// caption
Save Settings  Menu
///

In the Save Settings Menu, users will be able to save, restore, or clear any preferences in memory (i.e. persistent storage) or a saved file to a fallback device (i.e. microSD card). Note that any passwords and secret keys are not saved in the save settings file. You will need to manually enter those values in the file saved on the microSD card.

* **Fallback Restore** - If unable to restore settings, use the fallback source (JSON File)
* **Fallback Save** - Save settings also saves on the fallback storage (JSON File)
* **JSON File Buffer Size** - The size in bytes used for the internal I/O buffer
* **Save Settings** - Save current settings to persistent storage
* **Restore Settings** - Restore saved settings
* **Clear Settings** - Erase the saved settings on the device
* **Save to Fallback** - Save System Settings to the fallback storage (JSON File)
* **Restore from Fallback** - Restore system settings from the fallback storage (JSON File)

If you have the Fallback Save enabled or selected the option **Save to Fallback**, you will notice an additional file called **datalogger.json** saved in the microSD card. This is the fallback file that is saved. Using a text editor, you can edit this file to adjust the settings or provide WiFi credentials, certificates, and keys. You can use option ```7``` to restore the settings on your DataLogger IoT.

![Fallback saved settings saved in the microSD card as a JSON file](assets/datalogger_iot_preferences_saved_fallback_file.jpg)
/// caption
Fallback File
///

When finished, you will need to exit the menus so that the DataLogger IoT saves the changes. Send a ```b``` to exit out this menu, ```b``` to exit out of the DataLogger IoT settings, and ```x``` to exit out of the main menu.

### General: Time Sources

!!! note
    Make sure to connect the ESP32-WROOM to a 2.4GHz WiFi network and ensure that is not a guest network that requires you to sign in.

In the Settings Menu, select the time reference sources. As of firmware v01.01.01, time zone support is at the clock level, not tied to NTP. The option to adjust the Time Zone is moved to the Time Sources menu.

![Time Source Menu Options](assets/sparkfun_datalogger_iot_time_sources_menu.jpg)
/// caption
Time Source Menu
///

In this menu, you will have options to update the primary reference clock, update interval, add a secondary reference clock, and update it's interval. By default, the primary reference clock is set to use the Network Time Protocol (NTP). To synchronization the time, you will need to connect to a 2.4GHz WiFi network in order to update the time. To add a secondary clock, make sure to connect a compatible Qwiic-enabled devices that can keep track of time (i.e. Qwiic Real Time Clock Module - RV-8803 or a Qwiic-enabled u-blox GNSS module).

To adjust the time zone, you will need to enter a POSIX timezone string variable. Try [checking out this CSV in this GitHub repo](https://github.com/nayarsystems/posix_tz_db/blob/master/zones.csv) and searching for the timezone string variable in your area. For more information about [POSIX format specification check out this article from IBM](https://developer.ibm.com/articles/au-aix-posix/).

* **The Time Zone** - Time zone setting string for the device
* **Reference Clock** - The current reference clock source
* **Update Interval** - Main clock update interval in minutes. 0 = No update
* **Enable Clock Fallback** - Use a valid reference clock if the primary is not available
* **Dependant Interval** - Connected depedant clock update interval in minutes. 0 = No update
* **Update Connected** - Update connected clocks on main clock update

### Alternative Time Sources

As an alternative to using the NTP, users can also add a compatible Qwiic-enabled device that can keep track of time (i.e. Qwiic Real Time Clock Module - RV-8803 or a Qwiic-enabled u-blox GNSS module). These can be set as the primary or secondary clock.

![U-Blox GNSS Module Attached Via Qwiic](assets/datalogger_iot_qwiic_u-blox_gnss_sam-m10q_module.jpg)
/// caption
U-Blox GNSS Module Attached Via Qwiic
///

![Qwiic Real Time Clock Module - RV-8803 Attached Via Qwiic](assets/datalogger_iot_qwiic_rtc.jpg)
/// caption
Qwiic Real Time Clock Module - RV-8803 Attached Via Qwiic
///

Once attached, you will be prompted with additional options to select a primary reference clock.

![Time Source Reference Clock Options](assets/additional_time_sources_gnss_rtc.png)
/// caption
Clock Sources
///

!!! note
    If you are using a u-blox GNSS module, make sure that you have enough satellites in view. The option to add or configure the GNSS will not be available if there are not enough satellites in view. If you are using the Qwiic Real Time Clock Module - RV-8803, you may need to go into the device settings to manually adjust the date and time.

When finished, you will need to exit the menus so that the DataLogger IoT saves the changes. Send a ```b``` to exit out this menu, ```b``` to exit out of the DataLogger IoT settings, and ```x``` to exit out of the main menu.

### Network: WiFi Network

!!! note
    The ESP32-WROOM can only connect to a 2.4GHz WiFi network.

In the Settings Menu, select the WiFi settings. Up to 4 sets of WiFi credentials can be saved.

![WiFi Network Menu Options](assets/sparkfun_datalogger_iot_wifi_network_menu_2.png)
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

![DataLogger IoT Re-initializing and Outputting WiFi Connected Message](assets/sparkfun_datalogger_iot_initializing_wifi_connected.jpg)
/// caption
DataLogger IoT Re-initializing and Outputting WiFi Connected Message
///

If you have a [Qwiic Dynamic NFC/RFID Tag](https://www.sparkfun.com/products/21274) connected to the board's Qwiic connector, you can easily update your WiFi credentials! Just make sure to save the WiFi credentials to the tag.

If you saved your preferences to a JSON file on your microSD card's root directory, you can also save your WiFi credentials and load the system settings from the menu as well!

### Network: NTP Client

In the Settings menu, select the NTP Client settings.

![NTP Client Menu Options](assets/sparkfun_datalogger_iot_ntp_client_menu.jpg)
/// caption
NTP Client
///

In this menu, users will have the option to enable/disable the NTP client, select the primary/secondary server, or adjust the time zone for your area.

* **Enabled** - Enable or Disable the NTP Client
* **NTP Server One** - The primary NTP Server to use
* **NTP Server Two** -  The secondary NTP Server to use

When finished, you will need to exit the menus so that the DataLogger IoT saves the changes. S

### Logging: Logger

In the Settings menu, select the Logger menu to adjust how data is logged.
![Logger Menu Options](assets/sparkfun_datalogger_iot_logger_menu_v01p02p00.jpg "Logger Menu Options")
/// caption
Logger Menu Options
///

In the Logger menu, users will have the option to add a timestamp, increment sample numbering, data format, or reset the sample counter. Note that the timestamp is the system clock and syncs with the reference clock that was chosen. Data from the Qwiic-enabled devices that keep track of time can also be included for each data entry by default.

* **Timestamp Mode** - Enable timestamp output and set the format of a log entry timestamp
* **Sample Numbering** - An incremental count of the current log entry
* **Numbering Increment** - Increment amount for Sample Numbering
* **Output ID** - Include the Board ID in the log output _(added as of firmware v01.02.00)_
* **Output Name** - Include the Board Name in the log output _(added as of firmware v01.02.00)_
* **Rate Metric** - Enable to record the logging rate data _(added as of firmware v01.02.00)_
* **SD Card Format** - Enable and set the output format
* **Serial Console Format** - Enable and set the output format
* **System Info** - Log system information _(added as of firmware v01.02.00)_
* **Reset Sample Counter** - Reset the sample number counter to the provided value
  
When finished, you will need to exit the menus so that the DataLogger IoT saves the changes.

Below is an example with the ISO08601 time that was added to the output.

![DataLogger IoT Re-Initializing and Outputting Time in ISO08601 Time Format](assets/sparkfun_datalogger_iot_output_timestamp.jpg)
/// caption
Outputting Time in ISO08601 Time Format
///

### Logging: Logging Timer

In the Settings menu,  select the Timer option adjust the Logging Timer.
![Logging Timer Menu Options](assets/sparkfun_datalogger_iot_logger_timer_menu.jpg )
/// caption
Logging Timer Menu Options
///

Adjusting the interval for the Logging Timer will change the amount of time between log entries.

* **Interval** - The timer interval in milliseconds

### Logging: Data File

In the Settings menu, select the Data File Menu Item to adjust the Logging Data File.

![Data File Menu Options](assets/sparkfun_datalogger_iot_file_rotation_menu.jpg )
/// captions
Data File Menu Options
///

Adjusting these parameters allows you to change the filename prefix, the number the files starts at, and how often the DataLogger will create a new file on the microSD card. For example, the default file will be saved as **sfe0001.txt**. After 1 day, the DataLogger will rotate files by creating a new file named **sfe0002.txt**. The DataLogger will begin logging data in this new file. The purpose of this log rotation is to limit the size of each file prevent issues when opening large files.

* **Rotate Period** - Time between file rotation
* **File Start Number** - The number the filename rotation starts with
* **Filename Prefix** - The prefix string for the generated filenames

The contents of the file will depend on how the data was saved (either CSV or JSON). Make sure that the SD Card format is enabled to either CSV or JSON with your desired device outputs turned on so that the DataLogger can save the readings.

When removing the microSD card, make sure to remove your power source. Then insert into it into microSD card adapter or USB reader. When connecting the memory card to your computer, you can use a text editor to view the saved readings. In this case, a Windows operating system was viewing the file **sfe0000.txt** and it was only file available in the microSD card.

![Readings Saved In Text File Shown In A Windows File Explorer](assets/datalogger_iot_text_file.jpg)
/// caption
Reading data value from Text File
///

## IoT Services

To access the available IoT Services, select the `IoT Services` menu option in the main menu

### IoT Services: MQTT Client

In the Settings menu, select the MQTT Client.

![MQTT Client Menu Options](assets/sparkfun_datalogger_iot_mqtt_client_menu.jpg )
///caption
MQTT Client Menu Options
///

* **Enabled** - Enable or Disable MQTT Client
* **Port** - The MQTT broker port to connect to
* **Server** - The MQTT server to connect to
* **MQTT Topic** - The MQTT  topic to publish to
* **Client Name** - Name of this device used for MQTT Communications
* **Username** - Username to connect to an MQTT broker, if required.
* **Password** - Password to connect to an MQTT broker, if required.
* **Buffer Size** - MQTT payload buffer size. If 0, the buffer size is dynamic

### IoT Services: MQTT Secure Client

In the Settings menu, select the MQTT Secure Client.

![MQTT Secure Client Menu Options](assets/sparkfun_datalogger_iot_mqtt_secure_client_menu.jpg)
/// caption
MQTT Secure Client Menu Options
///

* **Enabled** - Enable or Disable MQTT Secure Client
* **Port** - The MQTT broker port to connect to
* **Server** - The MQTT server to connect to
* **MQTT Topic** - The MQTT  topic to publish to
* **Client Name** - Name of this device used for MQTT Communications
* **Username** - Username to connect to an MQTT broker, if required.
* **Password** - Password to connect to an MQTT broker, if required.
* **Buffer Size** - MQTT payload buffer size. If 0, the buffer size is dynamic
* **CA Cert Filename** - The File to load the certificate from
* **Client Cert Filename** - The File to load the client certificate from
* **Client Key Filename** - The File to load the client key from

### IoT Services: AWS IoT

In the Settings menu, select AWS IoT.

![AWS IoT Menu Options](assets/sparkfun_datalogger_iot_aws_menu.jpg)
/// caption
AWS IoT Menu Options
///

* **Enabled** - Enable or Disable AWS IoT
* **Port** - The MQTT broker port to connect to
* **Server** - The MQTT server to connect to
* **MQTT Topic** - The MQTT  topic to publish to
* **Client Name** - Name of this device used for MQTT Communications
* **Username** - Username to connect to an MQTT broker, if required.
* **Password** - Password to connect to an MQTT broker, if required.
* **Buffer Size** - MQTT payload buffer size. If 0, the buffer size is dynamic
* **CA Cert Filename** - The File to load the certificate from
* **Client Cert Filename** - The File to load the client certificate from
* **Client Key Filename** - The File to load the client key from

### IoT Services: ThingSpeak MQTT

In the Settings menu, select  ThingSpeak MQTT

![ThingSpeak MQTT Menu Options](assets/sparkfun_datalogger_iot_thingspeak_mqtt_menu.jpg)
/// caption
ThingSpeak MQTT Menu Options
///

* **Enabled** - Enable or Disable ThingSpeak MQTT
* **Port** - The MQTT broker port to connect to
* **Server** - The MQTT server to connect to
* **MQTT Topic** - The MQTT  topic to publish to
* **Client Name** - Name of this device used for MQTT Communications
* **Username** - Username to connect to an MQTT broker, if required.
* **Password** - Password to connect to an MQTT broker, if required.
* **Buffer Size** - MQTT payload buffer size. If 0, the buffer size is dynamic
* **CA Cert Filename** - The File to load the certificate from
* **Client Cert Filename** - The File to load the client certificate from
* **Client Key Filename** - The File to load the client key from
* **Channels** - Comma separated list of ```<device name>=<thingspeak channel ID>```

### IoT Services: Azure IoT

In the Settings menu, select Azure IoT.

![Azure IoT Menu Options](assets/sparkfun_datalogger_iot_azure_menu.jpg)
/// caption
Azure IoT Menu Options
///

* **Enabled** - Enable or Disable Azure IoT
* **Port** - The MQTT broker port to connect to
* **Server** - The MQTT server to connect to
* **MQTT Topic** - The MQTT  topic to publish to
* **Client Name** - Name of this device used for MQTT Communications
* **Username** - Username to connect to an MQTT broker, if required.
* **Password** - Password to connect to an MQTT broker, if required.
* **Buffer Size** - MQTT payload buffer size. If 0, the buffer size is dynamic
* **CA Cert Filename** - The File to load the certificate from
* **Client Cert Filename** - The File to load the client certificate from
* **Client Key Filename** - The File to load the client key from
* **Device ID** - The device id for the Azure IoT device
* **Device Key** - The device key for the Azure IoT device

### IoT Services: HTTP IoT

In the Settings menu, select HTTP IoT

![HTTP IoT Menu Options](assets/sparkfun_datalogger_iot_http_menu.jpg)
/// caption
HTTP IoT Menu Options
///

* **Enabled** - Enable or Disable the HTTP Client
* **URL** - The URL to call with log information
* **CA Cert Filename** - The File to load the certificate from

### IoT Services: MachineChat

In the Settings menu, select MachineChat

![MachineChat Menu Options](assets/sparkfun_datalogger_iot_machinechat_menu.jpg)
/// caption
MachineChat Menu Options
///

* **Enabled** - Enable or Disable the HTTP Client
* **URL** - The URL to call with log information
* **CA Cert Filename** - The File to load the certificate from

### IoT Services: Arduino Cloud

In the Settings menu, select Arduino Cloud.

![Arduino Cloud Menu Options](assets/sparkfun_datalogger_iot_arduino_iot_cloud_menu.jpg)
/// caption
Arduino Cloud Menu Options
///

* **Enabled** - Enable or Disable the Arduino IoT Client
* **Thing Name** - The Thing Name to use for the IoT Device connection
* **Thing ID** - The Thing ID to use for the IoT Device connection
* **API Client ID** - The Arduino Cloud API Client ID
* **API Secret** - The Arduino Cloud API Secret
* **Device Secret** - The Arduino IoT Device Secret
* **Device ID** - The Arduino IoT Cloud Device ID

### IoT Web Server

Log files can be viewed and downloaded using the IoT Web Server feature if mDNS (multicast DNS) is supported on your network.

This functionality is accessed by selecting the IoT Web Server menu. Once this menu entry is selected, the following menu options are presented:

![IoT Web Server Options](assets/sfe-datalogger-web-server.png)
/// caption
IoT Web Server Options
///

* **Enabled** - Enabled or Disable the Web Server
* **Username** - Web access control. Leave empty to disable authentication
* **Password** - Web access control.
* **mDNS Support** - Enable a name for the web address this device
* **mDNS Name** - mDNS Name used for this device address
  * dataloggerXXXXX, where XXXXX is the taken from the last 5x characters from your DataLogger IoT's board ID _(default)_

You will need to make sure that the ESP32 is on the same network as your computer in order to access the log files.

When authentication is enabled, some browsers might require a second login depending on user settings.

The SparkFun Datalogger IoT requires restarting if the web interface is enabled.

For more information on how to use this feature, check out the [section on viewing and downloading log files using the IoT web server](../example_iot_web_server/).

[Examples: Viewing and Downloading Log Files using the IoT Web Server](../example_iot_web_server)
/// caption
Viewing Log Files using the Web Server
///

### Advanced: System Update

New sensors and features are being added all the time and we've made it really easy for you to keep your DataLogger IoT up to date. The System Update option provides the following functionality to the end user:

* Restart the device
* Performing a Factory Reset on the device
* Updated the device firmware from a file on an SD Card.

This functionality is accessed via the Settings Menu, which is required to use this capability. Type ```18``` to enter the System Update menu. Once this menu entry is selected, the following menu options are presented:

![System Update Menu Options](assets/sfe-datalogger-update.png)
/// caption
System Update Menu Options
///

* **Device Restart** - Restart/reboot the device
* **Factory Reset** - Erase all settings and revert to original firmware
* **Update Firmware - SD Card** - Update the firmware from the SD card
* **Update Firmware - OTA** - Update the firmware over-the-air

For more information on how to update firmware manually or over-the-air, check out the section under [Examples: Updating Firmware](../updating_firmware/).

## Device Settings

In the Main Menu, send a ```2``` through the serial terminal to adjust the devices settings.

![Device Settings Menu Options](assets/sfe-datalogger-dev-menu.png)
/// caption
Device Settings Menu Options
///

This will bring up the connected devices that are currently available. Selecting a connected device allows you to configure settings for that particular device as well as enable/disable output values from the device.

The following is an example settings page for the SparkFun BMV080 Environmental Sensor:

![BMV080 Settings](assets/sfe-datalogger-bmv080-settings.png)
/// caption
BMV080 Device Settings Page
///

As you connect additional devices to the DataLogger IoT, the values associated with each device in this menu will change! Make sure to check your device settings menu after additional devices are attached should you decide to configure the additional devices and enable/disable their outputs.
