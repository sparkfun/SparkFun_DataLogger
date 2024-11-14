
![SparkFun DataLogger IoT](https://github.com/sparkfun/SparkFun_DataLogger/blob/main/docs/img/Applications_DataLogger_Banner.jpg "SparkFun DataLogger")

# SparkFun DataLogger IoT

Documentation and Firmware for the SparkFun DataLogger IoT line of products

![GitHub release (with filter)](https://img.shields.io/github/v/release/sparkfun/SparkFun_DataLogger)
![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/sparkfun/SparkFun_DataLogger)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/sparkfun/SparkFun_DataLogger/pages%2Fpages-build-deployment?label=Documentation)
![GitHub issues](https://img.shields.io/github/issues/sparkfun/SparkFun_DataLogger)

This repository contains the latest firmware for the SparkFun DataLogger IoT products. The DataLogger IoT product line are pre-programmed to automatically log data from 50+ SparkFun [Qwiic](https://www.sparkfun.com/qwiic) sensors, all without requiring any hardware setup or code development. Just plug in a qwiic board and log data. The DataLogger IoT automatically detects the connected sensor, configures the device and enables logging information locally, or to a variety of IoT data services.

The current list of SparkFun boards supported by the SparkFun DataLogger IoT are listed in the [DataLogger Supported Device List](docs/supported_devices.md).

SparkFun DataLogger IoT products include Internet connectivity built in, and includes connections for a variety of IoT service services and end-point types. Connection types include MQTT, HTTP, AWS IoT, Azure IoT, ThingSpeak, Arduino Cloud. To enable connectivity, connect the DataLogger IoT to a WiFi network, enter the required credentials for the specific IoT service being used, and the DataLogger IoT will do the rest - no programming required.

The DataLogger IoT products are highly configurable via an easily to use serial interface. Simply plug in a USB C cable and open a terminal at 115200 Kbps. By default the logging output is automatically streamed to the serial terminal - pressing any key will bring up the menu system. Device settings are also configurable via a JSON file contained on an inserted SD card - enabling rapid configuration for multiple devices.

Configuration details are outlined in [DataLogger IoT Documentation](https://docs.sparkfun.com/SparkFun_DataLogger/configuration/).

The functionality of the DataLogger IoT firmware will continue to grow as SparkFun develops new Qwiic sensor boards, adds additional IoT services and product features. The board is easily updated via the on-board settings system. See below for future information on updates and the latest Firmware release.  

### Latest Firmware

* Version 01.2.00 - [Overview of the Release](docs/relnotes/rn_v010200.md)
* Version 01.1.01 - [Overview of the Release](docs/relnotes/rn_v010101.md)

### Firmware Source Code

The source for the SparkFun DataLogger IoT boards is located [here](https://github.com/sparkfun/sfe-datalogger).

The SparkFun DataLogger is built on top of the SparkFun flux-sdk, which is located [here](https://github.com/sparkfun/flux-sdk)

## Documentation

* **[Hookup Guide](https://docs.sparkfun.com/SparkFun_DataLogger/)** - Basic hookup guide for the Datalogger IoT 9DoF and DataLogger IoT
* **GitHub Hardware Repo**
  * **[SparkFun DataLogger IoT - 9DoF](https://github.com/sparkfun/SparkFun_DataLogger_IoT_9DoF)**
  * **[SparkFun DataLogger IoT](https://github.com/sparkfun/SparkFun_DataLogger_IoT)**

## Supported Products

* **[DEV-22462](https://www.sparkfun.com/products/22462)** - SparkFun DataLogger IoT,  v1.1 & v1.2 (minor silkscreen change)
* **[DEV-20594](https://www.sparkfun.com/products/20594)** - SparkFun DataLogger IoT - 9DOF, v1.1

## Firmware Updates

This repository contains the latest firmware for the DataLogger IoT products. The firmware is installed on a DataLogger IoT board using the built in `over-the-air` update functionality if the board is connected to the internet, or by loading the firmware off an SD card installed on the DataLogger IoT device.

Instructions on updating the DataLogger firmware are detailed [here](https://docs.sparkfun.com/SparkFun_DataLogger/configuration/#advanced-system-update).

### Latest Release

Details on the latest Firmware release are listed on the [Release Page](https://github.com/sparkfun/SparkFun_DataLogger/releases)
