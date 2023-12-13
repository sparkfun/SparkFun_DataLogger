Open a Serial Terminal, connect to the COM port that your DataLogger enumerated to, and set it to  **115200** baud. In this case, we connected to **COM13**. Press any key to enter the Main Menu. Type <kbd>1</kbd> to enter the Settings menu. Then send a <kbd>6</kbd> to adjust how data is logged.

<div style="text-align: center">
  <a href="../assets/SparkFun_Datalogger_IoT_Logger_Menu.JPG"><img src="../assets/SparkFun_Datalogger_IoT_Logger_Menu.JPG" width="600" height="600" alt="Logger Menu Options"></a>
</div>

Send a <kbd>1</kbd> to configure the timestamp for each log entry. The settings in this menu relate to the system clock and is dependent on the reference clock. You&apos;ll be prompted with different formats. In this example, we sent a a <kbd>4</kbd> to have a timestamp with the USA date format.

<div style="text-align: center">
  <a href="../assets/Configure_Timestamp.PNG">
  <img src="../assets/Configure_Timestamp.PNG" width="600" height="600" alt="Configure Timestamp"></a>
</div>

Follow the prompts to exit out of the menu properly so that the DataLogger IoT saves the settings. Once you see the message `[I] Saving System Settings`, the DataLogger IoT will add a timestamp with your preferred format to each log entry. Assuming that you have the output set to the serial terminal, you should see the timestamp attached to the output after the system settings are saved like the image below.  

<div style="text-align: center">
  <a href="../assets/Timestamped_CSV.PNG">
  <img src="../assets/Timestamped_CSV.PNG" width="600" height="600" alt="Timestamped Data"></a>
</div>
