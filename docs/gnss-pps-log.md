# GNSS PPS Logging Event

When a GNSS qwiic device with a PPS output is connected to the DataLoggerIoT, that PPS signal can trigger logging events.

## Hardware Setup

To enable PPS logging events, first connect the PPS output signal from the GNSS board being used to a supported pin on the DataLoggerIoT.  

Supported pins are the following GPIO pins: 33 or 36.

## Device Settings

With the GNSS board connected to the DataLoggerIoT, start the datalogger and enter the menu system. Select `Device Settings` and then GNSS device.

![GNSS Device](assets/sfe-dl-dev-gnss.png)

When the GNSS device entry is selected, the following settings are presented:

~[GNSS Settings](assets/sfe-dl-gnss-settings.png)

### PSS Logging

Set this setting to `true` to enable PPS logging by the datalogger.

### PPS Pin

Set this to the value of the Pin that was connected to the PPS signal from the GNSS sensor.

![GNSS PPS Pin](assets/sfe-dl-gnss-pps-pin.png)
