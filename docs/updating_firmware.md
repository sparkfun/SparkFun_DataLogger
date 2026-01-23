---
icon: material/download
---


## Firmware Update - SD Card

This action enables the ability to update the onboard firmware to an image file contained an SD card. This user is presented a list of available firmware images files contained in root directory of the on-board SD card, and updates the board to the selected file.

This option is available on ESP32 devices that contained two update firmware (OTA type) partitions within the on-board device flash memory. Consult the specific products production and build system for further details.

To download the latest firmware and update through the microSD card, you will need to head to the [GitHub repository containing the firmware](https://github.com/sparkfun/SparkFun_DataLogger/releases). Select the firmware version and download.

Once downloaded, insert the microSD card into a card reader or USB adapter. Then move the files into the memory card's root directory. Below shows an image of v01.00.01 and v01.00.02 on a Windows OS.

![microSD Card Firmware Files](assets/Explorer_MicroSD_Card_Firmware_Files.PNG)

Once the files are copied to the memory card, eject the microSD card from your computer. Insert the card back into the DataLogger IoT's microSD card socket. Connect the DataLogger IoT to your computer using a USB cable.

![Insert MicroSD Card](assets/DataLogger_IoT_Insert_MicroSD_Card.jpg)
![DataLogger IoT Connecting USB](assets/DataLogger_IoT_USB.jpg)

Open a Serial Terminal, connect to the COM port that your DataLogger enumerated to, and set it to  **115200** baud. In this case, we connected to **COM13**. Press any key to enter the Main Menu. Type ```1``` to enter the Settings menu. Then select the System Update Menu. Finally, type ```3``` to update the firmware from the microSD card. You should see an image similar to the output below.

![Firmware Files](assets/act_sysfirm_up_sel.png)

The system will search the root directory of the on-board SD card for available firmware files. The firmware files are selected using the following criteria:

* The file is contained in the root "**/**" folder of the SD card.
* The filename has a "**.bin**" extension.
* The filename starts with a specified name ***prefix***. The prefix is optional and is set by the developers at SparkFun using this action.
  * For example, the DataLogger IoT boards use a prefix value of "**SparkFun_DataLoggerIoT_**".

Once a file is selected, the system new firmware is read off the SD card and written to the device.

![Updating](act_sysfirm_updating.png)

And once updated, the system is rebooted and starts using the new firmware image!

![Reboot](assets/act_sysfirm_up-boot.png)

## Firmware Update - Over-the-Air (OTA)

This action enables the ability to update the onboard firmware to an image file contained on an update server, which is accessed via the WiFi network the system is connected to. This Over-The-Air (OTA) capability contacts the systems update server and searches for newer firmware (later version) for the specific board.

This option is available on ESP32 devices that contained two update firmware (OTA type) partitions within the on-board device flash memory. Consult the specific products production and build system for further details.

If you have not already, connect the DataLogger IoT to your computer using a USB cable.

![DataLogger IoT Connecting USB](assets/DataLogger_IoT_USB.jpg)

Open a Serial Terminal, connect to the COM port that your DataLogger enumerated to, and set it to  **115200** baud. In this case, we connected to **COM13**. Press any key to enter the Main Menu. Type ```1``` to enter the Settings menu. Then enter the System Update Menu. Finally, type ```4``` to update the firmware over-the-air.

![System Update Menu Options](SparkFun_Datalogger_IoT_System_Restart_Factory_Restore_Update_Firmware.JPG)

When this option is selected, the system will contact the update server and search for available upgrade firmware, selecting the latest version available. If a newer version is found, a prompt is presented to confirm the upgrade.

![Select OTA Update](assets/DataLogger_IoT_OTA_Update_1.PNG)

**NOTE** For the upgrade option to occur, a the system must be connected to a network and have access to the firmware OTA server.

Typing ```Y``` (or hitting enter) starts the update operation. As the firmware is downloaded, the percent complete status is updated. If connectivity fails during the download, the operation is halted and the update aborted.

![OTA Update Downloading](assets/DataLogger_IoT_OTA_Update_2.PNG)

Once the update file is downloaded, it is verified as being the correct file. Once verified, the system is rebooted and starts using the new firmware image! You will notice the firmware version change as the DataLogger IoT initializes.

![Updated OTA and Rebooted](assets/DataLogger_IoT_OTA_Update_3.PNG)

## If the Firmware is overwritten by an Arduino Sketch

Flashing an Arduino sketch to a DataLogger IoT board removes the ability for easy firmware updates and will require a full low-level flash of the latest software, which includes the bootloader and partition map for the device. These files are now provided as part of the DataLogger IoT firmware updates.

To perform this level of update, please view the [Build and Update Instructions](https://github.com/sparkfun/sfe-datalogger/blob/main/docs/build_update.md#firmware-upload)
