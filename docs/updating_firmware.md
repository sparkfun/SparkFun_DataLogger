!!! danger

    Please think very carefully before uploading any Arduino sketches to your DataLogger IoT.

    **You will overwrite the DataLogger IoT firmware, leaving it unable to update or restore itself.**

    Each DataLogger IoT comes pre-programmed with amazing firmware which can do _so_ much. It is designed to be able to update itself and restore itself if necessary. But it can not do that if you overwrite the firmware with any Arduino sketch. It is just like erasing the restore partition on your computer hard drive. Do not do it - unless you _really_ know what you are doing.

    Really. We mean it.



## Firmware Update - SD Card

This action enables the ability to update the onboard firmware to an image file contained an SD card. This user is presented a list of available firmware images files contained in root directory of the on-board SD card, and updates the board to the selected file.

This option is available on ESP32 devices that contained two update firmware (OTA type) partitions within the on-board device flash memory. Consult the specific products production and build system for further details.

To download the latest firmware and update through the microSD card, you will need to head to the [GitHub repository containing the firmware](https://github.com/sparkfun/SparkFun_DataLogger/releases). Select the firmware version and download.

<div style="text-align: center"><a href="https://github.com/sparkfun/SparkFun_DataLogger/releases" target="sfe_datalogger_firmware" class="md-button">GitHub: SparkFun DataLogger | Firmware Releases</a></div>

Once downloaded, insert the microSD card into a card reader or USB adapter. Then move the files into the memory card's root directory. Below shows an image of v01.00.01 and v01.00.02 on a Windows OS.

<div style="text-align: center">
  <a href="../assets/Explorer_MicroSD_Card_Firmware_Files.PNG">
  <img src="../assets/Explorer_MicroSD_Card_Firmware_Files.PNG" width="600" height="600" alt="microSD Card Firmware Files"></a>
</div>

Once the files are copied to the memory card, eject the microSD card from your computer. Insert the card back into the DataLogger IoT's microSD card socket. Connect the DataLogger IoT to your computer using a USB cable.

<div style="text-align: center;">
  <table>
    <tr style="vertical-align:middle;">
     <td style="text-align: center; vertical-align: middle; border: solid 1px #cccccc;"><a href="../assets/DataLogger_IoT_Insert_MicroSD_Card.jpg"><img src="../assets/DataLogger_IoT_Insert_MicroSD_Card.jpg" width="1000" height="667" alt="Insert MicroSD Card"></a></td>
     <td style="text-align: center; vertical-align: middle; border: solid 1px #cccccc;"><a href="../assets/DataLogger_IoT_USB.jpg"><img src="../assets/DataLogger_IoT_USB.jpg" width="1000" height="667" alt="DataLogger IoT Connecting USB"></a></td>
    </tr>
  </table>
</div>

!!! note
    What's going on here?!? This tutorial was updated for firmware version **01.01.00**!!! You will notice this menu option has changed to <kbd>17</kbd> !!!

Open a Serial Terminal, connect to the COM port that your DataLogger enumerated to, and set it to  **115200** baud. In this case, we connected to **COM13**. Press any key to enter the Main Menu. Type <kbd>1</kbd> to enter the Settings menu. Then type <kbd>17</kbd> to enter the System Update Menu. Finally, type <kbd>3</kbd> to update the firmware from the microSD card. You should see an image similar to the output below.

<div style="text-align: center">
  <a href="../assets/act_sysfirm_up_sel.png">
  <img src="../assets/act_sysfirm_up_sel.png" width="600" height="600" alt="Firmware Files"></a>
</div>

The system will search the root directory of the on-board SD card for available firmware files. The firmware files are selected using the following criteria:

* The file is contained in the root "**/**" folder of the SD card.
* The filename has a "**.bin**" extension.
* The filename starts with a specified name ***prefix***. The prefix is optional and is set by the developers at SparkFun using this action.
    * For example, the DataLogger IoT boards use a prefix value of "**SparkFun_DataLoggerIoT_**".

Once a file is selected, the system new firmware is read off the SD card and written to the device.

<div style="text-align: center">
  <a href="../assets/act_sysfirm_updating.png">
  <img src="../assets/act_sysfirm_updating.png" width="600" height="600" alt="Updating"></a>
</div>

And once updated, the system is rebooted and starts using the new firmware image!

<div style="text-align: center">
  <a href="../assets/act_sysfirm_up-boot.png">
  <img src="../assets/act_sysfirm_up-boot.png" width="600" height="600" alt="Reboot"></a>
</div>



## Firmware Update - Over-the-Air (OTA)

This action enables the ability to update the onboard firmware to an image file contained on an update server, which is accessed via the WiFi network the system is connected to. This Over-The-Air (OTA) capability contacts the systems update server and searches for newer firmware (later version) for the specific board.

This option is available on ESP32 devices that contained two update firmware (OTA type) partitions within the on-board device flash memory. Consult the specific products production and build system for further details.


If you have not already, connect the DataLogger IoT to your computer using a USB cable.

<div style="text-align: center">
  <table>
    <tr style="vertical-align:middle;">
     <td style="text-align: center; vertical-align: middle; border: solid 1px #cccccc;"><a href="../assets/DataLogger_IoT_USB.jpg"><img src="../assets/DataLogger_IoT_USB.jpg" width="1000" height="667" alt="DataLogger IoT Connecting USB"></a></td>
 <tr>
</table>
</div>


Open a Serial Terminal, connect to the COM port that your DataLogger enumerated to, and set it to  **115200** baud. In this case, we connected to **COM13**. Press any key to enter the Main Menu. Type <kbd>1</kbd> to enter the Settings menu. Then type <kbd>16</kbd> to enter the System Update Menu. Finally, type <kbd>4</kbd> to update the firmware over-the-air.

<div style="text-align: center"><a href="../assets/SparkFun_Datalogger_IoT_System_Restart_Factory_Restore_Update_Firmware.JPG"><img src="../assets/SparkFun_Datalogger_IoT_System_Restart_Factory_Restore_Update_Firmware.JPG" width="600" height="600" alt="System Update Menu Options"></a>
</div>

When this option is selected, the system will contact the update server and search for available upgrade firmware, selecting the latest version available. If a newer version is found, a prompt is presented to confirm the upgrade.

<div style="text-align: center">
  <a href="../assets/DataLogger_IoT_OTA_Update_1.PNG">
  <img src="../assets/DataLogger_IoT_OTA_Update_1.PNG" width="600" height="600" alt="Select OTA Update"></a>
</div>

!!! note

    For the upgrade option to occur, a the system must be connected to a network and have access to the firmware OTA server.

Typing <kbd>Y</kbd> (or hitting enter) starts the update operation. As the firmware is downloaded, the percent complete status is updated. If connectivity fails during the download, the operation is halted and the update aborted.

<div style="text-align: center">
  <a href="../assets/DataLogger_IoT_OTA_Update_2.PNG">
  <img src="../assets/DataLogger_IoT_OTA_Update_2.PNG" width="600" height="600" alt="OTA Update Downloading"></a>
</div>


Once the update file is downloaded, it is verified as being the correct file. Once verified, the system is rebooted and starts using the new firmware image! You will notice the firmware version change as the DataLogger IoT initializes.

<div style="text-align: center">
  <a href="../assets/DataLogger_IoT_OTA_Update_3.PNG">
  <img src="../assets/DataLogger_IoT_OTA_Update_3.PNG" width="600" height="600" alt="Updated OTA and Rebooted"></a>
</div>
