
# Logger Setup

In the Settings menu, select the Logger menu to adjust how data is logged.

![Logger Menu Options](assets/sfe-datalogger-set-logger.png)
/// caption
Logger Menu Options
///

In the Logger menu, users will have the option to add a timestamp, increment sample numbering, data format, or reset the sample counter. Note that the timestamp is the system clock and syncs with the reference clock that was chosen. Data from the Qwiic-enabled devices that keep track of time can also be included for each data entry by default.

* **Timestamp Mode** - Enable timestamp output and set the format of a log entry timestamp
* **Sample Numbering** - An incremental count of the current log entry
* **Numbering Increment** - Increment amount for Sample Numbering
* **Output ID** - Include the Board ID in the log output *(added as of firmware v01.02.00)*
* **Output Name** - Include the Board Name in the log output *(added as of firmware v01.02.00)*
* **Rate Metric** - Enable to record the logging rate data *(added as of firmware v01.02.00)*
* **SD Card Format** - Enable and set the output format
* **Serial Console Format** - Enable and set the output format
* **System Info** - Log system information *(added as of firmware v01.02.00)*
* **Reset Sample Counter** - Reset the sample number counter to the provided value
  
When finished, you will need to exit the menus so that the DataLogger IoT saves the changes.

Below is an example with the ISO08601 time that was added to the output.

![DataLogger IoT Re-Initializing and Outputting Time in ISO08601 Time Format](assets/sparkfun_datalogger_iot_output_timestamp.jpg)
/// caption
Outputting Time in ISO08601 Time Format
///
