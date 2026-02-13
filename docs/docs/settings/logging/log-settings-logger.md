
# Logger Setup

In the Settings menu, select the Logger menu to adjust how data is logged, including what additional data to provide besides sensor readings.

When this menu option is selected, the following menu is presented:

<figure>
![Logger Menu Options](/img/sfe-datalogger-set-logger.png)
<figcaption>Logger Menu Options</figcaption>
</figure>

Details of menu item are outlined in the following sections.

## Settings

### Timestamp Mode

This setting is used to add a timestamp to the output logging stream for each data sample/observation. The format of the timestamp is also selected.

The options for this settings are:

* No Timestamp - no timestamp is added to the output - this is the default option
* Milliseconds since program start - Time since the system was started, in milliseconds
* Seconds since Epoch - Seconds since epoch (January 1, 1970 00:00:00.00 UTC). A valid system time is required for this value to be accurate.
* Milliseconds since Epoch - Milliseconds since epoch (January 1, 1970 00:00:00.00 UTC). A valid system time is required for this value to be accurate.
* Date Time - USA Date format - a data/time string formatted using standard US date format - MM-DD-YYYY
* Date Time - A standard non-USA formatted date string - DD-MM-YYYY
* ISO8601 Timestamp - an ISO8601 formatted timestamp
* ISO8601 Timestamp with Time Zone - an ISO8601 formatted timestamp with the current time zone included
* ISO8601 Timestamp - Week Date - an ISO8601 formatted timestamp using a week date format
* ISO8601 Timestamp - Week Date with Time Zone - an ISO8601 formatted timestamp using a week date format and the current time zone.

### Sample Numbering

The "sample number" for a the logged data is included in the log stream. This is incremented with each log event by the value of the ***Number Increment*** setting value

### Numbering Increment

The amount to increment the output Sample Number after each logged observation.

### Output ID

Include the DataLoggerIoT board ID in the output log stream

### Output Name

Include the DataLoggerIoT board Name in the output log stream

### Rate Metric

If enabled, the system will record the logging data rate. This is helpful in determining the performance of the datalogger.

### Output Source Name

When enabled, the source of the logging *event* is included in the log stream. This could include values like 'timer', 'GPIO Interrupt', 'GNSS PPS' ...etc.

## Output

These settings are used to control output format and additional values for the datalogger.

### SD Card Format

The format used when writing to the SD Card - options are *CSV*, *JSON*, or *None*.

### Serial Console Format

The format used when writing data to the serial console - options are *CSV*, *JSON*, or *None*.

### System Info

When enabled, the following data is added to the log stream:

* WiFi SSID
* WiFi RSSI
* System uptime
* System SD Card free space
* System memory heap

## Functions

### Reset Sample Counter

This will reset the sample counter in the logger to a provided value.

## Example Output

The following image is JSON formatted serial console output for the datalogger. The following options are enabled:

* Timestamp enabled - ISO8601 Timestamp format
* Board ID
* Board Name
* Trigger source
* System Info

<figure>
![DataLogger IoT Re-Initializing and Outputting Time in ISO08601 Time Format](/img/sfe-dl-log-kitchen-sink.png)
<figcaption>JSON Formatted Log Output to the Serial Console</figcaption>
</figure>