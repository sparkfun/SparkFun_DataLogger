---
sidebar_position: 2
---

# Time Setup

In the Settings Menu, select the time reference sources. As of firmware v01.01.01, time zone support is at the clock level, not tied to NTP. The option to adjust the Time Zone is moved to the Time Sources menu.

<figure>
![Time Source Menu Options](/img/sfe-datalogger-set-time-settings.png)
<figcaption>Time Source Menu</figcaption>
</figure>

In this menu, you will have options to update the primary reference clock, update interval, add a secondary reference clock, and update it's interval.

By default, the primary reference clock is set to use the Network Time Protocol (NTP). To synchronization the time, you will need to connect to a 2.4GHz WiFi network in order to update the time.

To add a secondary clock, make sure to connect a compatible Qwiic-enabled devices that can keep track of time (i.e. Qwiic Real Time Clock Module - RV-8803 or a Qwiic-enabled u-blox GNSS module).

## Time Configuration

The following settings are available:

### The Time Zone

The timezone to use for `local time` for the DataLoggerIoT.

To adjust the time zone, you will need to enter a POSIX timezone string variable. Try [checking out this CSV in this GitHub repo](https://github.com/nayarsystems/posix_tz_db/blob/master/zones.csv) and searching for the timezone string variable in your area. For more information about [POSIX format specification check out this article from IBM](https://developer.ibm.com/articles/au-aix-posix/).

### Reference Clock

The `time source` the DataLoggerIoT uses for time values.

### Update Interval

The time interval in minutes that the reference clock is used to update the DataLoggerIoT clock. Note - for an NTP source, this is handled automatically by the ESP32 platform.

### Enable Clock Fallback

If enabled, another clock source is used if the primary source is not available.

An example of this is when a network failure occurs and NTP is not available. In this case, a fallback time source (like an RTC) is used for time values.

### Dependant Interval

The interval in minutes used to update from the dependant clock. If `0`, the dependant clock is not used.

### Update Connected

If enabled, connected clocks are updated when the main system clock is updated.

## Alternative Time Sources

As an alternative to using the NTP, users can also add a compatible Qwiic-enabled device that can keep track of time (i.e. Qwiic Real Time Clock Module - RV-8803 or a Qwiic-enabled u-blox GNSS module). These can be set as the primary or secondary clock.

<figure>
![U-Blox GNSS Module Attached Via Qwiic](/img/datalogger_iot_qwiic_u-blox_gnss_sam-m10q_module.jpg)
<figcaption>U-Blox GNSS Module Attached Via Qwiic</figcaption>
</figure>

<figure>
![Qwiic Real Time Clock Module - RV-8803 Attached Via Qwiic](/img/datalogger_iot_qwiic_rtc.jpg)
<figcaption>Qwiic Real Time Clock Module - RV-8803 Attached Via Qwiic</figcaption>
</figure>

Once attached, you will be prompted with additional options to select a primary reference clock.

<figure>
![Time Source Reference Clock Options](/img/additional_time_sources_gnss_rtc.png)
<figcaption>Clock Sources</figcaption>
</figure>

:::note

If you are using a u-blox GNSS module, make sure that you have enough satellites in view. The option to add or configure the GNSS will not be available if there are not enough satellites in view. If you are using the Qwiic Real Time Clock Module - RV-8803, you may need to go into the device settings to manually adjust the date and time.

:::