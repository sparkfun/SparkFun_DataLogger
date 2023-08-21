Configuring the settings is as easy as opening a serial menu. You can use any serial monitor or terminal emulator to quickly and easily change and store the DataLogger IoT settings via its USB-C interface.

There are plenty of free alternatives out there to configure the DataLogger IoT. For the scope of this tutorial we will be using Tera Term.

* [Tera Term (Windows)](https://learn.sparkfun.com/tutorials/terminal-basics/all#tera-term-windows)
* [RealTerm (Windows)](https://learn.sparkfun.com/tutorials/terminal-basics/all#real-term-windows)
* [CoolTerm (Windows, Mac, Linux)](https://learn.sparkfun.com/tutorials/terminal-basics/all#coolterm-windows-mac-linux)

If this is the your first time using a terminal window, We recommend checking out the tutorial below for more information on serial terminal basics.

<!-- <div class="grid cards" style="width:500px;" markdown>

-   <a href="https://learn.sparkfun.com/tutorials/terminal-basics">
      <figure markdown>
        <img src="https://cdn.sparkfun.com/assets/learn_tutorials/1/1/2/terminalThumb.jpg" style="width:500px; height:282px; object-fit:contain;" alt="Serial Terminal Basics">
      </figure>
    </a>

    ---

    <a href="https://learn.sparkfun.com/tutorials/terminal-basics">
      <b>Serial Terminal Basics</b>
    </a>
</div> -->

<div style="text-align: center">
  <table>
    <tr>
      <td style="text-align: center; vertical-align: middle;">
        <a href="https://learn.sparkfun.com/tutorials/terminal-basics">
          <div style="text-align: center"><img src="https://cdn.sparkfun.com/assets/learn_tutorials/1/1/2/terminalThumb.jpg" alt="Serial Terminal Basics" style="width:500px; height:282px; object-fit:contain;"></div>
          <hr />
          <h3 style="text-align: left">
            <b>Serial Terminal Basics</b>
          </h3>
        </a>
      </td>
    </tr>
  </table>
  </div>

The above guides will show you how to open the correct port for the DataLogger IoT and how to set the baud rate to **115200** baud. You can change the DataLogger IoT's baud rate through the configuration menus too should you need to.

!!! note
    For users with an Arduino IDE, you could also use the Arduino Serial Monitor by setting the line ending to **Newline**. Users will also need to <kbd>CTRL</kbd> + <kbd>Enter</kbd> when sending any character to the DataLogger IoT. However, we recommend using one of the terminals mentioned earlier.


## Initialization and Serial Output

Connect the DataLogger IoT to a USB cable and connect to your computer. The WS2812 LED will light up green as it initializes. When you open the serial terminal you should see the following output when the board initializes:

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_Initializing.JPG"><img src="../assets/SparkFun_Datalogger_IoT_Initializing.JPG" width="1000" height="667"></a>
</div>

The messages in the serial terminal provide us with a lot of the DataLogger's configuration:

* The DataLogger IoT software version (in this case is **v01.00.00 - build 000072**).
* As the DataLogger IoT is initializing, the system settings are being restored from the last saved preference.
* There no WiFi credentials and the board has failed to connect. This output will change once you provide the WiFi credentials and are able to connect to the network.
* There are 3x devices currently detected and they are connected through I<sup>2</sup>C through the Qwiic port and SPI. These are the on-board sensors for the DataLogger IoT. There may be more devices that are detected depending on the firmware and what is connected to the ports. Since these were recognized, they were loaded onto the DataLogger IoT.
* The current date and time is shown (by default), the date and time is set to **1-1-1970** and **00:00:00**). This value will change depending on the clock source through NTP, RTC, or a u-blox GNSS module.
* The time the board has been running will be shown in the uptime.
* The primary external time source that the board syncs is currently through the **NTP client**. This can be configured depending on your clock source.
* The board name (in this case, it was **SparkFun DataLogger IoT - 9DoF**)
* The board ID (in this case it was **SFD16C8F0D1AD6B8**)
* The microSD card has been found, the type of memory card it is, the size of the memory card, how much memory is used, and how much is available.
* If there is a WiFi network name saved, the SSID will be shown along with information indicating whether the board was able to connect to the WiFi network. By default there is no SSID saved in memory.
* Parameters for low power mode will be provided indicating if deep sleep is enabled, sleep interval, and wake interval.
* Parameters for logging are also provided for the logging interval, the format for the serial output, format for the microSD card, current saved filename, and file rotation period.
* The board will also show the available IoT services that are enabled for the DataLogger IoT.
* The output will finish by telling you what devices are connected to the DataLogger IoT again.

Once the DataLogger IoT has initialized, the DataLogger IoT will begin outputting comma separated values (CSV). This is the default output that is set for the DataLogger IoT.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_Output.JPG"><img src="../assets/SparkFun_Datalogger_IoT_Output.JPG" width="1000" height="667"></a>
</div>

!!! note
    Depending on your DataLogger IoT preferences, your device may output as a JSON format like the image shown below.
     <div style="text-align: center">
       <a href="../assets/SparkFun_Datalogger_IoT_Output.JPG"><img src="../assets/SparkFun_Datalogger_IoT_Output.JPG" width="1000" height="667"></a>
     </div>

The data scrolling up the screen show what each device's output is along with their associated unit if it is available.

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


<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_Main_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_Main_Menu.JPG" width="1000" height="667" alt=""></a>
</div>

You will be prompted with a few options. Once in the configuration menu, all three colors of the WS2812 LED will turn on to mix to produce the color white indicating that you are navigating through the menu.



### Exiting and Saving

When exiting the menu's, you will be prompted with either an <kbd>x</kbd> or <kbd>b</kbd>. You can use either one when exiting the menus as well as <kbd>X</kbd> or <kbd>B</kbd>. Note that you will need to use either of these keys when making a change in order for the DataLogger IoT to save any changes in memory. Make sure that you receive the following message indicating that the settings were saved: <code>[I] Saving System Settings</code>. The DataLogger IoT will the continue reading the devices and outputting the readings through the serial terminal.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG" width="1000" height="667" alt=""></a>
</div>



### Cancelling Changes

You can also use any of your <kbd>Esc</kbd> or arrow keys (i.e. <kbd>&#8593;</kbd>, <kbd>&#8595;</kbd>, <kbd>&#8592;</kbd>, <kbd>&#8594;</kbd>) to exit. However, using the escape or arrow keys will not save any changes in memory once the reset button is hit or whenever power is cycled.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_System_Escape_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_System_Escape_Menu.JPG" width="1000" height="667" alt=""></a>
</div>



### Timeout from Inactivity

The menus will slowly exit out after 2 minutes of inactivity, so if you do not press a key the DataLogger IoT will return to its previous menu. It will continue to move back until it reaches the main menu. After another additional 2 minutes of inactivity, the board will exit begin logging data again. When the menu exits from inactivity, any changes will not be saved in memory as well.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_System_No_User_Input_Exit_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_System_No_User_Input_Exit_Menu.JPG" width="1000" height="667" alt=""></a>
</div>



## Settings

Let's start by configuring the DataLogger's system settings. Send a <kbd>1</kbd> through the serial terminal. You will have the option to adjust various settings ranging from the your preferences, time source to synchronize the date and time, WiFi network, how the device logs data, which IoT service to use, and firmware updates.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_Settings_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_Settings_Menu.JPG" width="1000" height="667"></a>
</div>

!!! note
    You may notice after entering a <kbd>1</kbd> that there is a slight delay before the DataLogger IoT responds. The delay was added to allow some time for the DataLogger IoTto receive an additional digit for any option greater than 9. If you want to head to option 1 immediately without the slight delay, you can hit the <kbd>Enter</kbd> key to enter the Application Settings.

We'll go over each of these options below.




### General: Application Settings

In the Settings Menu, send a <kbd>1</kbd> to adjust the Application Settings. As of firmware v01.00.02, users can now adjust the baud rate of the serial console output and the menu system's timeout value.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_Applications_Settings_Menu_2.JPG"><img src="../assets/SparkFun_Datalogger_IoT_Applications_Settings_Menu_2.JPG" width="1000" height="667"></a>
</div>

In the Application Settings Menu, users will be able to configure the WS2812's LED through software, menu timeout, microSD card's output format, serial console's output format, terminal's baud rate, deep sleep parameters, and view the current settings of the DataLogger IoT similar to when the board was initialized. Depending on your preference and how you are logging data, you can adjust the data as CSV or JSON.

* <kbd>1</kbd> **LED Enabled** &mdash; Enable/Disable the on-board RGB LED activity
    * Accepts a boolean value:
        * <kbd>1</kbd> to enable _(default)_
        * <kbd>0</kbd> to disable
* <kbd>2</kbd> **Menu Timeout** &mdash; Inactivity timeout period for the menu system
    * Accepts the following values:
        * <kbd>1</kbd> 30 Seconds = 30
        * <kbd>2</kbd> 60 Seconds = 60 _(default)_
        * <kbd>3</kbd> 2 Minutes = 120
        * <kbd>4</kbd> 5 Minutes = 300
        * <kbd>5</kbd> 10 Minutes = 600
        * <kbd>b</kbd> Back
* <kbd>3</kbd> **SD Card Format** &mdash; Enable and set the output format
    * Accepts the following values:
        * <kbd>1</kbd> to disable = 0
        * <kbd>2</kbd> CSV format _(default)_ = 1
        * <kbd>3</kbd> JSON format = 2
* <kbd>4</kbd> **Serial Console Format** &mdash; Enable and set the output format
    * Accepts the following values:
        * <kbd>1</kbd> to disable = 0
        * <kbd>2</kbd> CSV format _(default)_ = 1
        * <kbd>3</kbd> JSON format = 2
* <kbd>5</kbd> **Terminal Baud Rate** &mdash; Update terminal baud rate. Changes take effect on restart.
    * Accepts an unsigned integer between **1200** to **50000**:
        * **115200** _(default)_
* <kbd>6</kbd> **Enable System Sleep** &mdash; If enabled, sleep the system
    * Accepts a boolean value:
        * <kbd>1</kbd> to enable
        * <kbd>0</kbd> to disable _(default)_
* <kbd>7</kbd> **Sleep Interval (sec)** &mdash; The interval the system will sleep for
    * Accepts an integer between <kbd>5</kbd> to <kbd>86400</kbd> :
        * <kbd>30</kbd> seconds _(default)_
* <kbd>8</kbd> **Wake Interval (sec)** &mdash; The interval the system will operate between sleep period
    * Accepts an integer between <kbd>60</kbd> to <kbd>86400</kbd> :
        * <kbd>120</kbd> seconds _(default)_
* <kbd>9</kbd> **About...** &mdash; Details about the system
* <kbd>b</kbd> **Back**

!!! note
    Once the baud rate is changed and saved, make sure to adjust the baud rate of your serial terminal when the board is reset. If you forgot the baud rate, you can hold the BOOT button down for 20 seconds to erase the on-board preferences (besides the baud rate, this also includes any other settings that were saved) and restart the board.

When finished, you will need to exit the menus so that the DataLogger IoT saves the changes. Send a <kbd>b</kbd> to exit out this menu, <kbd>b</kbd> to exit out of the DataLogger IoT settings, and <kbd>x</kbd> to exit out of the main menu.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG" width="1000" height="667"></a>
</div>



### General: Save Settings

In the Settings menu, send a <kbd>2</kbd> to adjust the Save Settings.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_Save_Settings_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_Save_Settings_Menu.JPG"" width="1000" height="667"></a>
</div>

In the Save Settings Menu, users will be able to save, restore, or clear any preferences in memory (i.e. persistent storage) or a saved file to a fallback device (i.e. microSD card). Note that any passwords and secret keys are not saved in the save settings file. You will need to manually enter those values in the file saved on the microSD card.

* <kbd>1</kbd> **Fallback Restore** &mdash; If unable to restore settings, use the fallback source (JSON File)
    * Accepts a boolean value:
        * <kbd>1</kbd> to enable _(default)_
        * <kbd>0</kbd> to disable
* <kbd>2</kbd> **Fallback Save** &mdash; Save settings also saves on the fallback storage (JSON File)
    * Accepts a boolean value:
        * <kbd>1</kbd> to enable
        * <kbd>0</kbd> to disable _(default)_
* <kbd>3</kbd> **Save Settings** &mdash; Save current settings to persistent storage
    * Accepts a yes/no:
         * <kbd>Y</kbd> or <kbd>y</kbd> for yes
         * <kbd>N</kbd> or <kbd>n</kbd> for no
* <kbd>4</kbd> **Restore Settings** &mdash; Restore saved settings
    * Accepts a yes/no:
         * <kbd>Y</kbd> or <kbd>y</kbd> for yes
         * <kbd>N</kbd> or <kbd>n</kbd> for no
* <kbd>5</kbd> **Clear Settings** &mdash; Erase the saved settings on the device
    * Accepts a yes/no:
         * <kbd>Y</kbd> or <kbd>y</kbd> for yes
         * <kbd>N</kbd> or <kbd>n</kbd> for no
* <kbd>6</kbd> **Save to Fallback** &mdash; Save System Settings to the fallback storage (JSON File)
    * Accepts a yes/no:
         * <kbd>Y</kbd> or <kbd>y</kbd> for yes
         * <kbd>N</kbd> or <kbd>n</kbd> for no
* <kbd>7</kbd> **Restore from Fallback** &mdash; Restore system settings from the fallback storage (JSON File)
    * Accepts a yes/no:
         * <kbd>Y</kbd> or <kbd>y</kbd> for yes
         * <kbd>N</kbd> or <kbd>n</kbd> for no
* <kbd>b</kbd> **Back**

If you have the Fallback Save enabled or selected the option **Save to Fallback**, you will notice an additional file called **datalogger.json** saved in the microSD card. This is the fallback file that is saved. Using a text editor, you can edit this file to adjust the settings or provide WiFi credentials, certificates, and keys. You can use option <kbd>7</kbd> to restore the settings on your DataLogger IoT.

<div style="text-align: center">
  <a href="../assets/Datalogger_IoT_Preferences_saved_fallback_file.JPG"><img src="../assets/Datalogger_IoT_Preferences_saved_fallback_file.JPG" width="1000" height="667"></a>
</div>

When finished, you will need to exit the menus so that the DataLogger IoT saves the changes. Send a <kbd>b</kbd> to exit out this menu, <kbd>b</kbd> to exit out of the DataLogger IoT settings, and <kbd>x</kbd> to exit out of the main menu.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG" width="1000" height="667"></a>
</div>



### General: Time Sources

!!! note
    Make sure to connect the ESP32-WROOM to a 2.4GHz WiFi network and ensure that is not a guest network that requires you to sign in. Unfortunately, 5GHz WiFi is not supported on the ESP32-WROOM module.

In the Settings Menu, send <kbd>3</kbd> to manage the time reference sources.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_Time_Sources_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_Time_Sources_Menu.JPG" width="1000" height="667"></a>
</div>

In this menu, you will have options to update the primary reference clock, update interval, add a secondary reference clock, and update it's interval. By default, the primary reference clock is set to use the Network Time Protocol (NTP). To synchronization the time, you will need to connect to a 2.4GHz WiFi network in order to update the time. To add a secondary clock, make sure to connect a compatible Qwiic-enabled devices that can keep track of time (i.e. Qwiic Real Time Clock Module - RV-8803 or a Qwiic-enabled u-blox GNSS module).

* <kbd>1</kbd> **Reference Clock** &mdash; The current reference clock source
    * Accepts the following values:
        * <kbd>1</kbd> for no clock
        * <kbd>2</kbd> for NTP Client _(default)_
* <kbd>2</kbd> **Update Interval** &mdash; Main clock update interval in minutes. 0 = No update
    * Accepts an unsigned integer:
        * <kbd>0</kbd> = No update
        * <kbd>60</kbd> seconds _(default)_
* <kbd>3</kbd> **Enable Clock Fallback** &mdash; Use a valid reference clock if the primary is not available
    * Accepts a boolean value:
        * <kbd>1</kbd> to enable _(default)_
        * <kbd>0</kbd> to disable
* <kbd>4</kbd> **Dependant Interval** &mdash; Connected depedant clock update interval in minutes. 0 = No update
    * Accepts an unsigned integer:
        * <kbd>0</kbd> = No update
        * <kbd>60</kbd> seconds _(default)_
* <kbd>5</kbd> **Update Connected** &mdash; Update connected clocks on main clock update
    * Accepts a boolean value:
        * <kbd>1</kbd> to enable _(default)_
        * <kbd>0</kbd> to disable
* <kbd>b</kbd> **Back**

!!! note
    As an alternative to using the NTP, users can also add a compatible Qwiic-enabled device that can keep track of time (i.e. Qwiic Real Time Clock Module - RV-8803 or a Qwiic-enabled u-blox GNSS module). These can be set as the primary or secondary clock.

    <div style="text-align: center;">
      <table>
        <tr style="vertical-align:middle;">
         <td style="text-align: center; vertical-align: middle;"><a href="../assets/DataLogger_IoT_Qwiic_u-blox_GNSS_SAM-M10Q_Module.jpg"><img src="../assets/DataLogger_IoT_Qwiic_u-blox_GNSS_SAM-M10Q_Module.jpg" alt="u-blox GNSS Module Attached via Qwiic"></a></td>
         <td style="text-align: center; vertical-align: middle;"><a href="../DataLogger_IoT_Qwiic_RTC.jpg"><img src="../assets/DataLogger_IoT_Qwiic_RTC.jpg" alt="Qwiic Real Time Clock Module - RV-8803 Attached via Qwiic"></a></td>
        </tr>
      </table>
    </div>

    Once attached, you will be prompted with additional options to select a primary reference clock.

    <div style="text-align: center">
      <a href="../assets/Additional_Time_Sources_GNSS_RTC.PNG"><img src="../assets/Additional_Time_Sources_GNSS_RTC.PNG" width="1000" height="667"></a>
    </div>

    If you are using a u-blox GNSS module, make sure that you have enough satellites in view. The option to add or configure the GNSS will not be available if there are not enough satellites in view. If you are using the Qwiic Real Time Clock Module - RV-8803, you may need to go into the device settings to manually adjust the date and time.


When finished, you will need to exit the menus so that the DataLogger IoT saves the changes. Send a <kbd>b</kbd> to exit out this menu, <kbd>b</kbd> to exit out of the DataLogger IoT settings, and <kbd>x</kbd> to exit out of the main menu.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG" width="1000" height="667"></a>
</div>



### Network: WiFi Network

!!! note
    The ESP32-WROOM can only connect to a 2.4GHz WiFi network. Unfortunately, 5GHz is not supported on the ESP32-WROOM module.

In the Settings Menu, send a <kbd>4</kbd> to configure the WiFi settings. As of firmware v01.00.02, up to 4 sets of WiFi credentials can be saved.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_WiFi_Network_Menu_2.JPG"><img src="../assets/SparkFun_Datalogger_IoT_WiFi_Network_Menu_2.JPG" width="1000" height="667"></a>
</div>

Once you are in the WiFi Network menu, you can enable/disable WiFi and save the WiFi network credentials. Once connected to a 2.4GHz WiFi network, you can synchronize the date and time, connect to an IoT service to log data, and update the latest firmware over-the-air. Since the WiFi is turned on by default, you will simply need to save the WiFi network's name and password.

* <kbd>1</kbd> **Enabled** &mdash; Enable or Disable the WiFi Network connection
    * Accepts a boolean value:
        * <kbd>1</kbd> to enable _(default)_
        * <kbd>0</kbd> to disable
* <kbd>2</kbd> **Network Name** &mdash; The SSID of the WiFi network
    * Accepts a string:
        * For example, if my network name is "`MY_NETWORK_NAME`", you would manually type <kbd>MY_NETWORK_NAME</kbd>. When finished hit the <kbd>ENTER</kbd> key
* <kbd>3</kbd> **Password** &mdash; The Password to connect to the WiFi network
    * Accepts a string:
        * For example, if my network name is "`MY_SUPER_SECRET_PASSWORD`", you would manually type <kbd>MY_SUPER_SECRET_PASSWORD</kbd>. Note that as you type the password, each character will be replaced with an asterisk (`*`). When finished hit the <kbd>ENTER</kbd> key.
* <kbd>4</kbd> **Network 2 Name** &mdash; Alternative network 2 SSID
    * Accepts a string:
        * For example, if my network name is "`MY_NETWORK_NAME_2`", you would manually type <kbd>MY_NETWORK_NAME_2</kbd>. When finished hit the <kbd>ENTER</kbd> key
* <kbd>5</kbd> **Network 2 Password** &mdash; Alternative network 2 Password
    * Accepts a string:
        * For example, if my network name is "`MY_SUPER_SECRET_PASSWORD_2`", you would manually type <kbd>MY_SUPER_SECRET_PASSWORD_2</kbd>. Note that as you type the password, each character will be replaced with an asterisk (`*`). When finished hit the <kbd>ENTER</kbd> key.
* <kbd>6</kbd> **Network 3 Name** &mdash; Alternative network 2 SSID
    * Accepts a string:
        * For example, if my network name is "`MY_NETWORK_NAME_3`", you would manually type <kbd>MY_NETWORK_NAME_3</kbd>. When finished hit the <kbd>ENTER</kbd> key
* <kbd>7</kbd> **Network 3 Password** &mdash; Alternative network 3 Password
    * Accepts a string:
        * For example, if my network name is "`MY_SUPER_SECRET_PASSWORD_3`", you would manually type <kbd>MY_SUPER_SECRET_PASSWORD_3</kbd>. Note that as you type the password, each character will be replaced with an asterisk (`*`). When finished hit the <kbd>ENTER</kbd> key.
* <kbd>8</kbd> **Network 4 Name** &mdash; Alternative network 2 SSID
    * Accepts a string:
        * For example, if my network name is "`MY_NETWORK_NAME_4`", you would manually type <kbd>MY_NETWORK_NAME_4</kbd>. When finished hit the <kbd>ENTER</kbd> key
* <kbd>9</kbd> **Network 4 Password** &mdash; Alternative network 4 Password
    * Accepts a string:
        * For example, if my network name is "`MY_SUPER_SECRET_PASSWORD_4`", you would manually type <kbd>MY_SUPER_SECRET_PASSWORD_4</kbd>. Note that as you type the password, each character will be replaced with an asterisk (`*`). When finished hit the <kbd>ENTER</kbd> key.
* <kbd>b</kbd> **Back**

When finished, you will need to exit the menus so that the DataLogger IoT saves the changes. Send a <kbd>b</kbd> to exit out this menu, <kbd>b</kbd> to exit out of the DataLogger IoT settings, and <kbd>x</kbd> to exit out of the main menu.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG" width="1000" height="667"></a>
</div>

Press the reset button or cycle power to restart the DataLogger IoT. You can also go through the menu and reset the device through software as well. Once the board is reset, the DataLogger will attempt to connect to a WiFi network. If you are successful, the output will indicate that the board connected to a WiFi network and will update the current time through a NTP Client.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_Initializing_WiFi_Connected.JPG"><img src="../assets/SparkFun_Datalogger_IoT_Initializing_WiFi_Connected.JPG" width="1000" height="667"></a>
</div>

!!! note
    If you have a [Qwiic Dynamic NFC/RFID Tag](https://www.sparkfun.com/products/21274) connected to the board's Qwiic connector, you can easily update your WiFi credentials! Just make sure to save the WiFi credentials to the tag.

!!! note
    If you saved your preferences to a JSON file on your microSD card's root directory, you can also save your WiFi credentials and load the system settings from the menu as well!



### Network: NTP Client

In the Settings menu, send a <kbd>5</kbd> to adjust the NTP Client settings.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_NTP_Client_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_NTP_Client_Menu.JPG" width="1000" height="667"></a>
</div>

In this menu, users will have the option to enable/disable the NTP client, select the primary/secondary server, or adjust the time zone for your area.

* <kbd>1</kbd> **Enabled** &mdash; Enable or Disable the NTP Client
    * Accepts a boolean value:
        * <kbd>1</kbd> to enable _(default)_
        * <kbd>0</kbd> to disable
* <kbd>2</kbd> **NTP Server One** &mdash; The primary NTP Server to use
    * Accepts a string:
        * <kbd>time.nist.gov</kbd> _(default)_
* <kbd>3</kbd> **NTP Server Two** &mdash;  The secondary NTP Server to use
    * Accepts a string:
        * <kbd>pool.ntp.org</kbd> _(default)_
* <kbd>4</kbd> **The Time Zone** &mdash; Time zone setting string for the device
    * Accepts a string:
        * <kbd>MST7MDT,M3.2.0,M11.1.0</kbd> _(default)_
* <kbd>b</kbd> **Back**

!!! note
    To adjust the time zone, you will need to enter a POSIX timezone string variable. Try [checking out this CSV in this GitHub repo](https://github.com/nayarsystems/posix_tz_db/blob/master/zones.csv) and searching for the timezone string variable in your area. For more information about [POSIX format specification check out this article from IBM](https://developer.ibm.com/articles/au-aix-posix/).

When finished, you will need to exit the menus so that the DataLogger IoT saves the changes. Send a <kbd>b</kbd> to exit out this menu, <kbd>b</kbd> to exit out of the DataLogger IoT settings, and <kbd>x</kbd> to exit out of the main menu.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG" width="1000" height="667"></a>
</div>



### Logging: Logger

In the Settings menu, send a <kbd>6</kbd> to adjust how data is logged.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_Logger_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_Logger_Menu.JPG" width="1000" height="667"></a>
</div>

In the Logger menu, users will have the option to add a timestamp, increment sample numbering, data format, or reset the sample counter. Note that the timestamp is the system clock and syncs with the reference clock that was chosen. Data from the Qwiic-enabled devices that keep track of time can also be included for each data entry by default.

* <kbd>1</kbd> **Timestamp Mode** &mdash; Enable timestamp output and set the format of a log entry timestamp
    * <kbd>1</kbd> for no timestamp _(default)_ = 0
    * <kbd>2</kbd> for milliseconds since program start = 1
    * <kbd>3</kbd> for seconds since Epoch = 2
    * <kbd>4</kbd> for Date Time - USA Date format = 3
    * <kbd>5</kbd> for Date Time = 4
    * <kbd>6</kbd> for ISO08601 Timestamp = 5
    * <kbd>7</kbd> for ISO08601 Timestamp with Time Zone = 6
* <kbd>2</kbd> **Sample Numbering** &mdash; An incremental count of the current log entry
    * Accepts a boolean value:
        * <kbd>1</kbd> to enable
        * <kbd>0</kbd> to disable _(default)_
* <kbd>3</kbd> **Numbering Increment** &mdash; Increment amount for Sample Numbering
    * Accepts an unsigned integer between <kbd>1</kbd> to <kbd>10000</kbd>:
        * <kbd>1</kbd> _(default)_
* <kbd>4</kbd> **SD Card Format** &mdash; Enable and set the output format
    * Accepts an integer:
        * <kbd>1</kbd> to disable  = 0
        * <kbd>2</kbd> CSV format  = 1 _(default)_
        * <kbd>3</kbd> JSON format = 2
* <kbd>5</kbd> **Serial Console Format** &mdash; Enable and set the output format
    * Accepts an integer:
        * <kbd>1</kbd> to disable  = 0
        * <kbd>2</kbd> CSV format  = 1 _(default)_
        * <kbd>3</kbd> JSON format = 2
* <kbd>6</kbd> **Reset Sample Counter** &mdash; Reset the sample number counter to the provided value
    * Accepts an unsigned integer between <kbd>0</kbd> to <kbd>10000</kbd>:
        * <kbd>0</kbd> _(default)_
* <kbd>b</kbd> **Back**

When finished, you will need to exit the menus so that the DataLogger IoT saves the changes. Send a <kbd>b</kbd> to exit out this menu, <kbd>b</kbd> to exit out of the DataLogger IoT settings, and <kbd>x</kbd> to exit out of the main menu.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG" width="1000" height="667"></a>
</div>

Press the reset button or cycle power to restart the DataLogger IoT. You can also go through the menu and reset the device through software as well. Below is an example with the ISO08601 time that was added to the output.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_Output_Timestamp.JPG"><img src="../assets/SparkFun_Datalogger_IoT_Output_Timestamp.JPG" width="1000" height="667"></a>
</div>



### Logging: Logging Timer

In the Settings menu, send an <kbd>7</kbd> to adjust the Logging Timer.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_Logger_Timer_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_Logger_Timer_Menu.JPG" width="1000" height="667"></a>
</div>

Adjusting the interval for the Logging Timer will change the amount of time between log entries.

* <kbd>1</kbd> **Interval** &mdash; The timer interval in milliseconds
    * Accepts an integer:
        * <kbd>15000</kbd> milliseconds _(default)_
* <kbd>b</kbd> **Back**

When finished, you will need to exit the menus so that the DataLogger IoT saves the changes. Send a <kbd>b</kbd> to exit out this menu, <kbd>b</kbd> to exit out of the DataLogger IoT settings, and <kbd>x</kbd> to exit out of the main menu.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG" width="1000" height="667"></a>
</div>



### Logging: Data File

In the Settings menu, send an <kbd>8</kbd> to adjust the Logging Data File.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_File_Rotation_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_File_Rotation_Menu.JPG" width="1000" height="667"></a>
</div>

Adjusting these parameters allows you to change the filename prefix, the number the files starts at, and how often the DataLogger will create a new file on the microSD card. For example, the default file will be saved as **sfe0001.txt**. After 1 day, the DataLogger will rotate files by creating a new file named **sfe0002.txt**. THe DataLogger will begin logging data in this new file. The purpose of this log rotation is to limit the size of each file prevent issues when opening large files.

* <kbd>1</kbd> **Rotate Period** &mdash; Time between file rotation
    * Accepts the following values:
        * <kbd>1</kbd> for 6 hours = 6
        * <kbd>2</kbd> for 12 hours  = 12
        * <kbd>3</kbd> for 1 day (24 hours)  = 24 _(default)_
        * <kbd>4</kbd> for 2 days (48 hours)  = 48
        * <kbd>5</kbd> for 1 week (168 hours)  = 168
* <kbd>2</kbd> **File Start Number** &mdash; The number the filename rotation starts with
    * Accepts an unsigned integer:
        * <kbd>1</kbd> _(default)_
* <kbd>3</kbd> **Filename Prefix** &mdash; The prefix string for the generated filenames
    * Accepts a string:
        * <kbd>sfe</kbd> _(default)_
* <kbd>b</kbd> **Back**

When finished, you will need to exit the menus so that the DataLogger IoT saves the changes. Send a <kbd>b</kbd> to exit out this menu, <kbd>b</kbd> to exit out of the DataLogger IoT settings, and <kbd>x</kbd> to exit out of the main menu.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG" width="1000" height="667"></a>
</div>

The contents of the file will depend on how the data was saved (either CSV or JSON). Make sure that the SD Card format is enabled to either CSV or JSON with your desired device outputs turned on so that the DataLogger can save the readings.

When removing the microSD card, make sure to remove your power source. Then insert into it into microSD card adapter or USB reader. When connecting the memory card to your computer, you can use a text editor to view the saved readings. In this case, a Windows operating system was viewing the file **sfe0000.txt** and it was only file available in the microSD card.

 <div style="text-align: center">
   <a href="../assets/Datalogger_IoT_text_file.JPG"><img src="../assets/Datalogger_IoT_text_file.JPG" width="1000" height="667"></a>
 </div>



### IoT Services: MQTT Client

In the Settings menu, send an <kbd>9</kbd> to adjust settings for the MQTT Client.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_MQTT_Client_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_MQTT_Client_Menu.JPG" width="1000" height="667" alt=""></a>
</div>

* <kbd>1</kbd> **Enabled** &mdash; Enable or Disable MQTT Client
    * Accepts a boolean value:
        * <kbd>1</kbd> to enable
        * <kbd>0</kbd> to disable _(default)_
* <kbd>2</kbd> **Port** &mdash; The MQTT broker port to connect to
    * Accepts an unsigned integer:
        * <kbd>1883</kbd> _(default)_
* <kbd>3</kbd> **Server** &mdash; The MQTT server to connect to
    * Accepts a string
* <kbd>4</kbd> **MQTT Topic** &mdash; The MQTT  topic to publish to
    * Accepts a string
* <kbd>5</kbd> **Client Name** &mdash; Name of this device used for MQTT Communications
    * Accepts a string
* <kbd>6</kbd> **Username** &mdash; Username to connect to an MQTT broker, if required.
    * Accepts a string
* <kbd>7</kbd> **Password** &mdash; Password to connect to an MQTT broker, if required.
    * Accepts a string
* <kbd>8</kbd> **Buffer Size** &mdash; MQTT payload buffer size. If 0, the buffer size is dynamic
    * Accepts an unsigned int16:
        * <kbd>0</kbd> for dynamic buffer size _(default)_
* <kbd>b</kbd> **Back**



### IoT Services: MQTT Secure Client

In the Settings menu, send an <kbd>10</kbd> to adjust settings for the MQTT Secure Client.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_MQTT_Secure_Client_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_MQTT_Secure_Client_Menu.JPG" width="1000" height="667" alt=""></a>
</div>

* <kbd>1</kbd> **Enabled** &mdash; Enable or Disable MQTT Secure Client
    * Accepts a boolean value:
        * <kbd>1</kbd> to enable
        * <kbd>0</kbd> to disable _(default)_
* <kbd>2</kbd> **Port** &mdash; The MQTT broker port to connect to
    * Accepts an unsigned integer:
        * <kbd>1883</kbd> _(default)_
* <kbd>3</kbd> **Server** &mdash; The MQTT server to connect to
    * Accepts a string
* <kbd>4</kbd> **MQTT Topic** &mdash; The MQTT  topic to publish to
    * Accepts a string
* <kbd>5</kbd> **Client Name** &mdash; Name of this device used for MQTT Communications
    * Accepts a string
* <kbd>6</kbd> **Username** &mdash; Username to connect to an MQTT broker, if required.
    * Accepts a string
* <kbd>7</kbd> **Password** &mdash; Password to connect to an MQTT broker, if required.
    * Accepts a string
* <kbd>8</kbd> **Buffer Size** &mdash; MQTT payload buffer size. If 0, the buffer size is dynamic
    * Accepts an unsigned int16:
        * <kbd>0</kbd> for dynamic buffer size _(default)_
* <kbd>9</kbd> **CA Cert Filename** &mdash; The File to load the certificate from
    * Accepts a string
* <kbd>10</kbd> **Client Cert Filename** &mdash; The File to load the client certificate from
    * Accepts a string
* <kbd>11</kbd> **Client Key Filename** &mdash; The File to load the client key from
    * Accepts a string
* <kbd>b</kbd> **Back**



### IoT Services: AWS IoT

In the Settings menu, send an <kbd>11</kbd> to adjust settings for the AWS IoT.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_AWS_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_AWS_Menu.JPG" width="1000" height="667" alt=""></a>
</div>

* <kbd>1</kbd> **Enabled** &mdash; Enable or Disable AWS IoT
    * Accepts a boolean value:
        * <kbd>1</kbd> to enable
        * <kbd>0</kbd> to disable _(default)_
* <kbd>2</kbd> **Port** &mdash; The MQTT broker port to connect to
    * Accepts an unsigned integer:
        * <kbd>1883</kbd> _(default)_
* <kbd>3</kbd> **Server** &mdash; The MQTT server to connect to
    * Accepts a string
* <kbd>4</kbd> **MQTT Topic** &mdash; The MQTT  topic to publish to
    * Accepts a string
        * **$aws/things//shadow/update** _(default)_
* <kbd>5</kbd> **Client Name** &mdash; Name of this device used for MQTT Communications
    * Accepts a string
* <kbd>6</kbd> **Username** &mdash; Username to connect to an MQTT broker, if required.
    * Accepts a string
* <kbd>7</kbd> **Password** &mdash; Password to connect to an MQTT broker, if required.
    * Accepts a string
* <kbd>8</kbd> **Buffer Size** &mdash; MQTT payload buffer size. If 0, the buffer size is dynamic
    * Accepts an unsigned int16:
        * <kbd>0</kbd> for dynamic buffer size _(default)_
* <kbd>9</kbd> **CA Cert Filename** &mdash; The File to load the certificate from
    * Accepts a string
* <kbd>10</kbd> **Client Cert Filename** &mdash; The File to load the client certificate from
    * Accepts a string
* <kbd>11</kbd> **Client Key Filename** &mdash; The File to load the client key from
    * Accepts a string
* <kbd>b</kbd> **Back**



### IoT Services: ThingSpeak MQTT

In the Settings menu, send an <kbd>12</kbd> to adjust settings for ThingSpeak MQTT

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_ThingSpeak_MQTT_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_ThingSpeak_MQTT_Menu.JPG" width="1000" height="667" alt=""></a>
</div>

* <kbd>1</kbd> **Enabled** &mdash; Enable or Disable ThingSpeak MQTT
    * Accepts a boolean value:
        * <kbd>1</kbd> to enable
        * <kbd>0</kbd> to disable _(default)_
* <kbd>2</kbd> **Port** &mdash; The MQTT broker port to connect to
    * Accepts an unsigned integer:
        * <kbd>1883</kbd> _(default)_
* <kbd>3</kbd> **Server** &mdash; The MQTT server to connect to
    * Accepts a string
* <kbd>4</kbd> **MQTT Topic** &mdash; The MQTT  topic to publish to
    * Accepts a string
* <kbd>5</kbd> **Client Name** &mdash; Name of this device used for MQTT Communications
    * Accepts a string
* <kbd>6</kbd> **Username** &mdash; Username to connect to an MQTT broker, if required.
    * Accepts a string
* <kbd>7</kbd> **Password** &mdash; Password to connect to an MQTT broker, if required.
    * Accepts a string
* <kbd>8</kbd> **Buffer Size** &mdash; MQTT payload buffer size. If 0, the buffer size is dynamic
    * Accepts an unsigned int16:
        * <kbd>0</kbd> for dynamic buffer size _(default)_
* <kbd>9</kbd> **CA Cert Filename** &mdash; The File to load the certificate from
    * Accepts a string
* <kbd>10</kbd> **Client Cert Filename** &mdash; The File to load the client certificate from
    * Accepts a string
* <kbd>11</kbd> **Client Key Filename** &mdash; The File to load the client key from
    * Accepts a string
* <kbd>12</kbd> **Channels** &mdash; Comma separated list of <device name>=<thingspeak channel ID>
    * Accepts a string
* <kbd>b</kbd> **Back**



### IoT Services: Azure IoT

In the Settings menu, send an <kbd>13</kbd> to adjust settings for the Azure IoT.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_Azure_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_Azure_Menu.JPG" width="1000" height="667" alt=""></a>
</div>

* <kbd>1</kbd> **Enabled** &mdash; Enable or Disable Azure IoT
    * Accepts a boolean value:
        * <kbd>1</kbd> to enable
        * <kbd>0</kbd> to disable _(default)_
* <kbd>2</kbd> **Port** &mdash; The MQTT broker port to connect to
    * Accepts an unsigned integer:
        * <kbd>1</kbd> _(default)_
* <kbd>3</kbd> **Server** &mdash; The MQTT server to connect to
    * Accepts a string
* <kbd>4</kbd> **MQTT Topic** &mdash; The MQTT  topic to publish to
    * Accepts a string
* <kbd>5</kbd> **Client Name** &mdash; Name of this device used for MQTT Communications
    * Accepts a string
* <kbd>6</kbd> **Username** &mdash; Username to connect to an MQTT broker, if required.
    * Accepts a string
* <kbd>7</kbd> **Password** &mdash; Password to connect to an MQTT broker, if required.
    * Accepts a string
* <kbd>8</kbd> **Buffer Size** &mdash; MQTT payload buffer size. If 0, the buffer size is dynamic
    * Accepts an unsigned int16:
        * <kbd>0</kbd> for dynamic buffer size _(default)_
* <kbd>9</kbd> **CA Cert Filename** &mdash; The File to load the certificate from
    * Accepts a string
* <kbd>10</kbd> **Client Cert Filename** &mdash; The File to load the client certificate from
    * Accepts a string
* <kbd>11</kbd> **Client Key Filename** &mdash; The File to load the client key from
    * Accepts a string
* <kbd>11</kbd> **Device ID** &mdash; The device id for the Azure IoT device
    * Accepts a string
* <kbd>12</kbd> **Device Key** &mdash; The device key for the Azure IoT device
    * Accepts a string
* <kbd>b</kbd> **Back**



### IoT Services: HTTP IoT

In the Settings menu, send an <kbd>14</kbd> to adjust settings for the Azure IoT.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_HTTP_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_HTTP_Menu.JPG" width="1000" height="667" alt=""></a>
</div>

* <kbd>1</kbd> **Enabled** &mdash; Enable or Disable the HTTP Client
    * Accepts a boolean value:
        * <kbd>1</kbd> to enable
        * <kbd>0</kbd> to disable _(default)_
* <kbd>2</kbd> **URL** &mdash; The URL to call with log information
    * Accepts a string
* <kbd>3</kbd> **CA Cert Filename** &mdash; The File to load the certificate from
    * Accepts a string
* <kbd>b</kbd> **Back**



### IoT Services: MachineChat

In the Settings menu, send an <kbd>15</kbd> to adjust settings for MachineChat.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_MachineChat_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_MachineChat_Menu.JPG" width="1000" height="667" alt=""></a>
</div>

* <kbd>1</kbd> **Enabled** &mdash; Enable or Disable the HTTP Client
    * Accepts a boolean value:
        * <kbd>1</kbd> to enable
        * <kbd>0</kbd> to disable _(default)_
* <kbd>2</kbd> **URL** &mdash; The URL to call with log information
    * Accepts a string
* <kbd>3</kbd> **CA Cert Filename** &mdash; The File to load the certificate from
    * Accepts a string
* <kbd>b</kbd> **Back**



### Advanced: System Update

New sensors and features are being added all the time and we've made it really easy for you to keep your DataLogger IoT up to date. The System Update option provides the following functionality to the end user:

* Restart the device
* Performing a Factory Reset on the device
* Updated the device firmware from a file on an SD Card.

This functionality is accessed via the Settings Menu, which is required to use this capability. Type <kbd>16</kbd> to enter the System Update menu. Once this menu entry is selected, the following menu options are presented:

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_System_Restart_Factory_Restore_Update_Firmware.JPG"><img src="../assets/SparkFun_Datalogger_IoT_System_Restart_Factory_Restore_Update_Firmware.JPG" width="1000" height="667"></a>
</div>



* <kbd>1</kbd> **Device Restart** &mdash; Restart/reboot the device
    * Accepts the following values:
        * <kbd>Y</kbd> or <kbd>Y</kbd> to restart or reboot the device using the current firmware and system preferences
        * <kbd>N</kbd> or <kbd>n</kbd> to cancel
* <kbd>2</kbd> **Factory Reset** &mdash; Erase all settings and revert to original firmware
    * Accepts the following values:
        * <kbd>Y</kbd> or <kbd>Y</kbd> to factory reset the device
        * <kbd>N</kbd> or <kbd>n</kbd> to cancel
* <kbd>3</kbd> **Update Firmware - SD Card** &mdash; Update the firmware from the SD card
    * Accepts firmware in the **/root** directory of the microSD card with the file naming pattern **SparkFunDataLoggerIoT*.bin**, where the asterisk **&ast;** is the firmware version number (i.e. **SparkFunDataLoggerIoT_01.00.01.bin**).
* <kbd>4</kbd> **Update Firmware - OTA** &mdash; Update the firmware over-the-air
    * Connects to a server and searches for the latest firmware that is available. Note that you must be connected to a WiFi network to be able to update the board over-the-air.
    * Accepts the following values if there is new firmware available.
        * <kbd>Y</kbd> or <kbd>Y</kbd> to update over-the-air
        * <kbd>N</kbd> or <kbd>n</kbd> to cancel
* <kbd>b</kbd> **Back**

When finished, you will need to exit the menus so that the DataLogger IoT saves the changes. Send a <kbd>b</kbd> to exit out this menu, <kbd>b</kbd> to exit out of the DataLogger IoT settings, and <kbd>x</kbd> to exit out of the main menu.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG" width="1000" height="667"></a>
</div>


## Device Settings

In the Main Menu, send a <kbd>2</kbd> through the serial terminal to adjust the devices settings.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_Device_Settings_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_Device_Settings_Menu.JPG" width="1000" height="667"></a>
</div>

This will bring up the connected devices that are currently available. You can configure each device and enable/disable each output. Below is a sample of the on-board devices available for the DataLogger IoT when only the MAX17048, ISM330, and MMC5983 are connected. As the DataLogger IoT initializes, the board will populate additional devices in this window if they are detected.

* <kbd>1</kbd> **MAX17048** &mdash; MAX17048 LiPo Battery Fuel Gauge
    * <kbd>1</kbd> **Voltage (V)** &mdash; Battery voltage (Volts)
        * <kbd>1</kbd> to enable Voltage (V) _(default)_
        * <kbd>2</kbd> to disable Voltage (V)
    * <kbd>2</kbd> **State of Charge (%)** &mdash; Battery state of charge (%)
        * <kbd>1</kbd> to enable state of charge (%) _(default)_
        * <kbd>2</kbd> to disable state of charge  (%)
    * <kbd>3</kbd> **Charge Rate (%/hr)** &mdash; Battery charge change rate (%/hr)
        * <kbd>1</kbd> to enable change rate (%/hr) _(default)_
        * <kbd>2</kbd> to disable change rate (%/hr)
* <kbd>2</kbd> **ISM330** &mdash; ISM330 Inertial Measurement Unit
    * <kbd>1</kbd> **Accel Data Rate (HZ)** &mdash; Accelerometer Data Rate (Hz)
        * <kbd>1</kbd> for Off
        * <kbd>2</kbd> for 12.5 Hz
        * <kbd>3</kbd> for 26 Hz
        * <kbd>4</kbd> for 52 Hz
        * <kbd>5</kbd> for 104 Hz _(default)_
        * <kbd>6</kbd> for 208 Hz
        * <kbd>7</kbd> for 416 Hz
        * <kbd>8</kbd> for 833 Hz
        * <kbd>9</kbd> for 1666 Hz
        * <kbd>10</kbd> for 3332 Hz
        * <kbd>11</kbd> for 6667 Hz
        * <kbd>12</kbd> for 1.6 Hz
    * <kbd>2</kbd> **Accel Full Scale (g)** &mdash; Accelerometer Full Scall (g)
        * <kbd>1</kbd> for 2 g
        * <kbd>2</kbd> for 16 g
        * <kbd>3</kbd> for 4 g _(default)_
        * <kbd>4</kbd> for 8 g
    * <kbd>3</kbd> **Gyro Data Rate (Hz)** &mdash; Gyro Data Rate (Hz)
        * <kbd>1</kbd> for Off
        * <kbd>2</kbd> for 12.5 Hz
        * <kbd>3</kbd> for 26 Hz
        * <kbd>4</kbd> for 52 Hz
        * <kbd>5</kbd> for 104 Hz _(default)_
        * <kbd>6</kbd> for 208 Hz
        * <kbd>7</kbd> for 416 Hz
        * <kbd>8</kbd> for 833 Hz
        * <kbd>9</kbd> for 1666 Hz
        * <kbd>10</kbd> for 3332 Hz
        * <kbd>11</kbd> for 6667 Hz
    * <kbd>4</kbd> **Gyro Full Scale (dps)** &mdash; Gyro Full Scale (dps)
        * <kbd>1</kbd> for 125 dps
        * <kbd>2</kbd> for 250 dps
        * <kbd>3</kbd> for 500 dps _(default)_
        * <kbd>4</kbd> for 1000 dps
        * <kbd>5</kbd> for 2000 dps
        * <kbd>6</kbd> for 4000 dps
    * <kbd>5</kbd> **Accel Filter LP2** &mdash; Accelerometer Filter LP2
        * <kbd>1</kbd> to enable _(default)_
        * <kbd>2</kbd> to disable
    * <kbd>6</kbd> **Gyro Filter LP1** &mdash; Gyro Filter LP1
        * <kbd>1</kbd> to enable _(default)_
        * <kbd>2</kbd> to disable
    * <kbd>7</kbd> **Accel Slope Filter** &mdash; Accelerometer Slope Filter
        * <kbd>1</kbd> for ODR/4
        * <kbd>2</kbd> for ODR/10
        * <kbd>3</kbd> for for ODR/20
        * <kbd>4</kbd> for ODR/45
        * <kbd>5</kbd> for ODR/100 _(default)_
        * <kbd>6</kbd> for ODR/200
        * <kbd>7</kbd> for ODR/400
        * <kbd>8</kbd> for ODR/800
    * <kbd>8</kbd> **Gyro LP1 Filter Bandwidth** &mdash;  Gyro LP1 Filter Bandwidth
        * <kbd>1</kbd> Ultra Light
        * <kbd>2</kbd> Very Light
        * <kbd>3</kbd> Light
        * <kbd>4</kbd> Medium _(default)_
        * <kbd>5</kbd> Strong
        * <kbd>6</kbd> Very Strong
        * <kbd>7</kbd> Aggressive
        * <kbd>8</kbd> Extreme
    * <kbd>9</kbd> **Accel X (milli-g)** &mdash; Accelerometer X (milli-g)
        * <kbd>1</kbd> to enable
        * <kbd>2</kbd> to disable
    * <kbd>10</kbd> **Accel Y (milli-g)** &mdash; Accelerometer Y (milli-g)
        * <kbd>1</kbd> to enable
        * <kbd>2</kbd> to disable
    * <kbd>11</kbd> **Accel Z (milli-g)** &mdash; Accelerometer Z (milli-g)
        * <kbd>1</kbd> to enable
        * <kbd>2</kbd> to disable
    * <kbd>12</kbd> **Gyro X (milli-dps)** &mdash; Gyro X (milli-g)
        * <kbd>1</kbd> to enable
        * <kbd>2</kbd> to disable
    * <kbd>13</kbd> **Gyro Y (milli-dps)** &mdash; Gyro Y (milli-g)
        * <kbd>1</kbd> to enable
        * <kbd>2</kbd> to disable
    * <kbd>14</kbd> **Gyro Z (milli-dps)** &mdash; Gyro Z (milli-g)
        * <kbd>1</kbd> to enable
        * <kbd>2</kbd> to disable
    * <kbd>15</kbd> **Temperature (C)** &mdash; The temperature in degrees C
        * <kbd>1</kbd> to enable
        * <kbd>2</kbd> to disable
* <kbd>3</kbd> **MMC5983** &mdash; MMC5983 Magnetometer
    * <kbd>1</kbd> **Filter Bandwidth (Hz)** &mdash; The filter bandwidth in Hz
        * <kbd>1</kbd> 100 Hz _(default)_
        * <kbd>2</kbd> 200 Hz
        * <kbd>3</kbd> 400 Hz
        * <kbd>4</kbd> 800 Hz
    * <kbd>2</kbd> **Auto-Reset** &mdash; Auto-Reset
        * <kbd>1</kbd> to enable
        * <kbd>2</kbd> to disable
    * <kbd>3</kbd> **X Field (Gauss)** &mdash; The X Field strength in Gauss
        * <kbd>1</kbd> to enable
        * <kbd>2</kbd> to disable
    * <kbd>4</kbd> **Y Field (Gauss)** &mdash; The Y Field strength in Gauss
        * <kbd>1</kbd> to enable
        * <kbd>2</kbd> to disable
    * <kbd>5</kbd> **Z Field (Gauss)** &mdash; The Z Field strength in Gauss
        * <kbd>1</kbd> to enable
        * <kbd>2</kbd> to disable
    * <kbd>6</kbd> **Temperature (C)** &mdash; The ambient temperature in degrees C
        * <kbd>1</kbd> to enable
        * <kbd>2</kbd> to disable
* <kbd>b</kbd> **Back**

When finished, you will need to exit the menus so that the DataLogger IoT saves the changes. Send a <kbd>b</kbd> to exit out this menu, <kbd>b</kbd> to exit out of the DataLogger IoT settings, and <kbd>x</kbd> to exit out of the main menu.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_System_Save_Settings_Menu.JPG" width="1000" height="667"></a>
</div>

!!! warning
    As you connect additional devices to the DataLogger IoT, the values associated with each device in this menu will change! Make sure to check your device settings menu after additional devices are attached.
    <div style="text-align: center">
      <a href="../assets/SparkFun_Datalogger_IoT_Device_Settings_Menu_Additional_Devices.JPG"><img src="../assets/SparkFun_Datalogger_IoT_Device_Settings_Menu_Additional_Devices.JPG" width="1000" height="667"></a>
    </div>
