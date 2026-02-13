
# Release Notes

## SparkFun DataLogger IoT Firmware - Version 1.5

January 2026

### New Features and Enhancements

#### New Device Support

Support for the following new SparkFun qwiic devices

- [SparkFun Air Quality PM1/PM2.5/PM10 Sensor - BMV080 (Qwiic)](https://www.sparkfun.com/sparkfun-air-quality-pm1-pm2-5-pm10-sensor-bmv080-qwiic.html)
- [SparkFun Spectral Sensor - AS7343 (Qwiic)](https://www.sparkfun.com/sparkfun-spectral-sensor-as7343-qwiic.html)

#### UART Data Logging

Connect an external uart/serial device to the DataLogger IoT board and any input recieved from that device is output within the current logging stream (Serial console, SD Card, IoT endpoint ...)

#### Log Values from an Analog Pin

Connect an anlog device/sensor to a specified DataLogger GPIO pin and the data value is written to the current log stream/output.

#### Support for the SparkFun Analog Soil Mosture Sensor

Connect the [SparkFun Soil Moisture Sensor](https://www.sparkfun.com/sparkfun-soil-moisture-sensor.html) to the specified/selected (via menu system) GPIO pins of the DataLogger IoT board and the senor values are output to the output log stream.

> Note - the qwiic Soil Moisture Sensor is not supported by the DataLogger IoT due to I2C bus incompatablity (i2c clock stretching)

#### Trigger Logging via Interrupt

When enabled, with an interrupt connected to a specified (in the menu system) DataLogger IoT GPIO pin, a logging event is triggered when the interrupt is fired.

#### Trigger Logging using the PPS signal from a GNSS device

When enabld and the GNSS device PPS signal is connected to a specified GPIO pin on the DataLogger IoT, a logging event is triggered when the PPS signal is sent.

### General Improvements

- Fixed issues with the ISO8601 date formatting in the logging system
- Improved support for verbose logging via the menu system
- Fixed issue with epoch tick output values
- Can now add the log-event trigger source to the log-stream output.

And this new functionality is available today at the DataLogger [repo](https://github.com/sparkfun/SparkFun_DataLogger) as a beta release.  The update is free, available as a file uploaded via an SD Card.  Just select the “System Update” option within the DataLogger IoT menu system and select your desired upgrade option.

## SparkFun DataLogger IoT Firmware - Version 1.2

April 15th, 2024

With the release of our version 1.2 software for our DataLogger IoT products, we continue to add additional functionally to the products capability, as well as fix a number of issues.

And with the release, we feel we’ve covered all aspects of a 1.1 release – new functionality, feature enhancements, and a wide variety of bug fixes.  

### New Features and Enhancements

#### Log File Download via a Web Interface

To allow access to log files located on the DataLogger IoT device, without requiring the removal of the SD card, a new Web Interface is provided. Once enabled, you can browse the on-board log files of the DataLogger. Clicking on a a filename will download the file.


Currently file browse and download options are available, but we plan on expanding this feature in the future.

Additionally, this feature has the following options:

- mDNS functionality allowing you to set a network name for a device if mDNS is supported on your network
- Username/Password authentication for the web interface.

> Note: For authentication use - currently some browsers might require a second login depending on settings.

!!! note
    The datalogger requires restarting if the web interface is enabled

This feature is enabled in settings under the **Preview** heading.

#### Startup Command Menu and Delay

To allow start-up time configuration and delay, a _**Startup Menu**_ was added to the system. Now, at startup a short menu is presented for a brief period, allowing modification of the startup options of the DataLogger.

Startup Menu options:

Pressing the highlighted letter while the menu is active, will change the behavior of the system. This change only affects the current system session.

The options include:

- 'n' - Normal startup
- 'a' - Disable I2C device auto load on startup
- 'l' - List the I2C devices supported. This device table is discarded after auto-load
- 'w' - Disable WiFi
- 's' - Disable preference restore during startup

In addition, the amount of time the menu is displayed is adjustable.  This settings is on the _Settings/Application Settings_ page, under the _Advanced_ section.

#### Quick (!) Commands

The addition of a quick (_!_) command system that allows for the direct execution of commands directly from the serial console, bypassing the serial menu system.

An example of this is the display of the "about" page for the system. Normally this would require navigating the serial menu system. With the _quick_ command system, entering the value of "!about" at the serial console will display the about page.

The following commands are supported:

| Command | Description |
| -------------- | --------- |
| !about | Display the system about page |
| !clear-settings | Clear the on board system preferences with a yes/no prompt |
| !clear-settings-forced | Clear the on board system preferences with no prompt |
| !devices | List the currently connected devices |
| !factory-reset | Perform a factory reset - presents a Y/N prompt |
| !heap | Display the current system heap memory usage |
| !help | List the available quick commands |
| !json-settings | For setting the device settings via a serial connection. When this command is sent, the system expects to receive a JSON settings file |
| !log-now | Perform a log observation event |
| !log-rate | If log rate measurement is enabled, the current log rate is printed |
| !reset-device | Reset the device - erasing any saved settings and restarting the device |
| !reset-device-forced | Reset the device, but without a Y/N prompt |
| !restart | Restart the device |
| !restart-forced | Restart the device without a Y/N prompt |
| !save-settings | Save the current settings to on-board flash |
| !sdcard | Output the current SD card usage statistics |
| !systime | Output current system time |
| !uptime | The uptime of the device |
| !device-id | The ID for the device |
| !version | The version of the firmware |
| !wifi | Output current system WiFi state |

#### Log Data Rate

The DataLogger system can now measure the data logging rate. Once this feature is enabled, the system will monitor the time between log events. This value is averaged over the latest 10 log events.

#### System Info in the log stream

The system operational parameters can now be added to log stream. This is useful to monitor system resource uses over time, or just perform general debugging.

Currently the following information is provided:

- WiFi SSID
- WiFi RSSI
- Memory Heap free space in bytes
- SD Card free space in bytes
- Uptime in MS

### Feature Improvements

In addition to the new functionality, we also took input from our customers (and our own use) to expand and enhance existing features. While a wide variety of small additions were made, a few notable additions include:

**Serial Console - Value Display –** The serial console now shows the current setting value in the menu system. Previously this value was only show once that item was selected.

**Serial Console Color –** Text highlighting and color were added to the serial console output. If your serial console application/command supports it, the menu system highlights key values. This setting is controlled in the **Settings/Application Settings** section of the settings menu.

**Startup Messages –** Normally a verbose log of startup options and settings are displayed at system startup. The about of information is now controllable - with values of _Normal_, _Compact_, _Disabled_.

**Improved Device Auto-Load –** A major update to the I2C auto-load device detection logic that improves device detection and address collision prevention.

**General System Enhancements –** Internal system job dispatch subsystem update to increase performance throughput. Overall decrease in static and dynamic memory usage.

### Bug Fixes

We also squashed a variety of defects in the firmware. Some of the more notable issued fixed in this release:

- Fixed issue with the LED display logic that caused a system crash if the log interval was less than 100ms
- Incorporate driver updates for greater NAU7802 device output value stability
- Incorporate driver update for the MMC5983MA device

### In Summary

With the release of DataLogger IoT firmware version 1.2.0 we continue to enhance the capabilities of our DataLogger IoT line – adding to our IOT service, supported devices as well as improving the overall quality of the system.

And this new functionality is available today at the DataLogger [repo](https://github.com/sparkfun/SparkFun_DataLogger).  The update is free, available as an over-the-air upgrade, or as a file uploaded via an SD Card.  Just select the “System Update” option within the DataLogger IoT menu system and select your desired upgrade option.

## SparkFun DataLogger Iot Firmware - Version 1.1

November 11th, 2023

Today we’re releasing the latest firmware update for our line of DataLogger IoT products. While we’ve released a services of small defect correct releases over the base 6 months, this release, officially version v1.01.00, is the first to include major new functionality.

And with the release, we feel we’ve covered all aspects of a 1.1 release – new functionality, feature enhancements, and a wide variety of bug fixes.  

### New Feature – Arduino IoT Cloud Connectivity

Being an IoT focused product, one of our goals is to enable easy access to leading IoT data services. With this in mind, for this release we worked closely with the Arduino Team to enabled easy access to the Arduino IoT Cloud directly from a DataLogger IoT Device.

Setup a device in the Arduino IoT Cloud, add the credentials to your DataLogger IoT and you have a IoT based dashboard up and running in minutes. Want to add an additional device to your dashboard – add the device to the DataLogger IoT and the combined system automatically adds the additional data to the Arduino Cloud – ready for use in your dashboard.

The above image shows data from a DataLogger IoT with an Environmental Combo attached to it and mapping data to a plot graphic on an Arduino IoT Cloud dashboard.

And like all DataLogger IoT functionality, no programming is required to produces these plots – all settings are provided via the intuitive serial console menu interface or set via a settings JSON file.

With the combination of the DataLogger IoT, qwiic and Arduino IoT Cloud, creating a IoT dashboard is as easy as _Plug-in, Connect, Plot!_

### New qwiic Sensor Board Support

The original release of the DataLogger IoT firmware supported around 50 SparkFun qwiic development boards and with this release we’ve added six boards additional qwiic boards.

Selecting from our recently added qwiic products as well as from the list of popular products, the release of version 1.1 adds support for the following qwiic development boards.

- SparkFun Indoor Air Quality Sensor - ENS160
- SparkFun Photoacoustic Spectroscopy CO2 Sensor - PASCO2V01
- SparkFun Human Presence and Motion Sensor - STHS34PF80
- SparkFun Tristimulus Color Sensor - OPT4048DTSR
- SparkFun Triad Spectroscopy Sensor - AS7265x
- SparkFun 6DoF IMU Breakout - BMI270

Like previously supported qwiic boards, the DataLogger IoT firmware automatically detects when a device is connected, making the new device automatically available to the logging, menu and IoT systems of the DataLogger IoT.

All these new sensors are great adds on their own, but the ENS160 has the additional feature of supporting temperature and humidity calibration inputs. Connect an BME280 or an SHTC3 qwiic board along with an ENS160, and the DataLogger automatically connects the two devices!

### Feature Improvements

In addition to the new functionality, we also took input from our customers (and our own use) to expand and enhance existing features. While a wide variety of small additions were made, a few notable additions include:

**Improved Reference Clock Management –** the internal logic was reviewed and improved. Additionally, time zone support was moved out of the NTP system, and into the overall clock management subsystem.

**Internal JSON Buffer Limits –** The initial firmware had fixed sizes for the internal JSON data buffers used for saving settings and log data output. These values are now user settable in the settings menu. This allows for larger buffer support, as well as reducing the internal buffers to what you need.

**Add Device IDs to the Device Names –** As you add more devices to a DataLogger, it’s difficult to match the device to the actual devices address. Addresses are now included in device listings and the option to include the address in the device name is now available.

**Board Information in the Log Stream –** To improve identification of a data source within the data log stream, the Board Name and Board ID can now be added if desired. As part of this functionality, a configurable name is now available for each DataLogger IoT.

### Bug Fixes

We also squashed a variety of defects in the firmware. Some of the more notable issued fixed in this release:

- Incorporated a fix in the RV8803 RTC Clock Arduino Library that resolved force ti*  shifts based on time zone. This was a “real nasty one” to resolve!
- Improved runtime memory (ram) consumption
- Resolved issues with devices having the same name. Now the second device adds it*  address to the name.
- Improvements to the Machinechat IoT driver

### In Summary

With the release of DataLogger IoT firmware version 1.1.0 we continue to enhance the capabilities of our DataLogger IoT line – adding to our IOT service, supported devices as well as improving the overall quality of the system.

And this new functionality is available today at the DataLogger [repo](https://github.com/sparkfun/SparkFun_DataLogger).  The update is free, available as an over-the-air upgrade, or as a file uploaded via an SD Card.  Just select the “System Update” option within the DataLogger IoT menu system and select your desired upgrade option.
