# External Serial

This menu item is used to configure logging from an external serial device that is connected to the datalogger via GPIO pins.

Selecting this option brings up the following menu:

![External Serial Menu](assets/sfe-dl-gpio-ext-serial.png)

## Settings

### Serial Settings

These settings define the parameters of the connected device.

#### RX Pin

The GPIO pin on the DataLoggerIoT to use as the RX pin for communicating with the external device. The default pin is `16`.

#### TX Pin

The GPIO pin on the DataLoggerIoT to use as the TX pin for communicating with the external device. The default pin is `17`.

#### Baud Rate

Set this to the Baud Rate to use when communicating with the external device.

### Functionality

#### Serial Input Device

When enabled, the system create a "Serial Input Device" that is added as a device to the system. This device is used to read data from the external device via a Serial connection and is used just like any other device in the system.

![Serial Device](assets/sfe-dl-gpio-ext-serial-dev.png)

## Serial Device

When the serial device is enabled, a "Serial Device" driver is added to the `Device List` of the DataLoggerIoT.

Selecting this device from the `Device Settings` page of the menu system, brings up the following menu:

![Serial Device Menu](assets/sfe-dl-gpio-ext-dev-settings.png)

The device is fairly simple - you enable/disable it and when a log event occurs, any value available in the serial device is read as a string and output to the log stream.

Additionally, when this device is enabled, when data is available from the serial device, a log event is triggered so that the data is read. This is done to prevent the underlying serial device buffer from overflowing.

### Settings

#### Enable

Used to enable the device. When enabled, when data is available on the Serial device, it triggers a log event, which will read and log the data in the device.
