# Interrupt Trigger

This option is used to setup an external interrupt as a trigger for a logging event. By connecting an external device that will trigger an interrupt to a GPIO pin on the DataLoggerIoT, an external device can cause an log event to occur.

When this menu item is selected, the following settings menu is displayed:

![Logging Interrupt Menu](assets/sfe-dl-logging-interrupt.png)
/// caption
Logger Interrupt Menu Options
///

## Settings

The settings for this feature are the following:

### Enabled

Use this setting to enable/disable this functionality

### Event Name

A string that represents the "name" of the logging event. This name can be displayed using the "event source" option of the [Logger](log-settings-logger.md).

### Interrupt Pin

The  DataLoggerIoT GPIO Pin to use to detect the external interrupt.  Valid pins are: `33` and `36` and selected in the options menu.
