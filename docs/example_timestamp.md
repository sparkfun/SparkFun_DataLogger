<!-- ---
icon: material/clock-time-four
--- -->

# Adding a Timestamp

Open a Serial Terminal, connect to the COM port that your DataLogger enumerated to, and set it to  **115200** baud. In this case, we connected to **COM13**. Press any key to enter the Main Menu. Type ```1``` to enter the Settings menu. Then send a ```6``` to adjust how data is logged.

![Logger Menu Options](assets/sparkfun_datalogger_iot_logger_menu.jpg)

Send a ```1``` to configure the timestamp for each log entry. The settings in this menu relate to the system clock and is dependent on the reference clock. You&apos;ll be prompted with different formats. In this example, we sent a a ```4``` to have a timestamp with the USA date format.

![Configure Timestamp](assets/configure_timestamp.png)

Follow the prompts to exit out of the menu properly so that the DataLogger IoT saves the settings. Once you see the message `[I] Saving System Settings`, the DataLogger IoT will add a timestamp with your preferred format to each log entry. Assuming that you have the output set to the serial terminal, you should see the timestamp attached to the output after the system settings are saved like the image below.  

![Timestamped Data](assets/timestamped_csv.png)
