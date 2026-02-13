
# System Update

This sections outline methods to update the firmware on the DataLoggerIoT.

When this menu item is selected, the following menu is presented:

<figure>
![System Update](/img/sfe-dl-adv-sys-update.png)
<figcaption>System Update Menu</figcaption>
</figure>

The following functionality is available from this menu:

## Functions

### Device Restart

This option is used to restart the device. When selected, the user is prompted to validate the selection. If `Y` is entered, the device is restarted.

### Factory Reset

A factory reset will move the boot firmware of the device to the firmware imaged installed at the ***factory*** and erase any on-board stored settings on the device. This is helpful if an update fails, or an update has issues that prevent proper operations.

When selected, the user is presented a prompt to continue. To launch a factory reset, the value of ```Y``` should be entered. To abort the update, enter ```n``` or press the ```Esc``` key.

![Reset Prompt](/img/act_sysfirm_reset.png)

When a ```Y``` is entered, the system performs the following:

* Set the boot image to the Factory installed firmware
* Erase any settings stored in the on-board flash memory
* Reboot the device

![Reset Reboot](/img/act_sysfirm_reset_y.png)

Once complete, the DataLoggerIoT is running the original firmware it shipped with. To update to a later version, the `Firmware Update` options of this menu are used.

### Update Firmware - SD Card

This action enables the ability to update the onboard firmware to an image file contained an SD card. This user is presented a list of available firmware images files contained in root directory of the on-board SD card, and updates the board to the selected file.

To download the latest firmware and update through the microSD card, you will need to head to the [GitHub repository containing the firmware](https://github.com/sparkfun/SparkFun_DataLogger/releases). Select the firmware version and download.

Once downloaded, insert the microSD card into a card reader or USB adapter. Then move the files into the memory card's root directory. Below shows an image of v01.00.01 and v01.00.02 on a Windows OS.

![microSD Card Firmware Files](/img/explorer_microsd_card_firmware_files.png)

Once the files are copied to the memory card, eject the microSD card from your computer. Insert the card back into the DataLogger IoT's microSD card socket. Connect the DataLogger IoT to your computer using a USB cable and bring up the DataLoggerIoT menu system and navigate to the `System Update` options.

To update from the SD card, select the `Update Firmware - SD Card` entry. The system will now list available firmware versions to update to.

<figure>
![Firmware List](/img/sfe-dl-adv-update-sdlist.png)
<figcaption>Available Firmware Images on the SD Card</figcaption>
</figure>

The system will search the root directory of the on-board SD card for available firmware files. The firmware files are selected using the following criteria:

* The file is contained in the root "**/**" folder of the SD card.
* The filename has a "**.bin**" extension.
* The filename starts with a specified name ***prefix***. The prefix is optional and is set by the developers at SparkFun using this action.

Once a file is selected, the system new firmware is read off the SD card and written to the device. When complete, the system is restarted using the new firmware image.

<figure>
![Firmware Update!](/img/sfe-dl-adv-sd-updating.png)
<figcaption>Firmware Updating from SD Card</figcaption>
</figure>

### Update Firmware - OTA

This action enables the ability to update the onboard firmware to an image file contained on an update server, which is accessed via the WiFi network the system is connected to. This Over-The-Air (OTA) capability contacts the systems update server and searches for newer firmware (later version) for the specific board.

When this option is selected, the system will contact the update server and search for available upgrade firmware, selecting the latest version available. If a newer version is found, a prompt is presented to confirm the upgrade.

![Select OTA Update](/img/datalogger_iot_ota_update_1.png)

**NOTE** For the upgrade option to occur, a the system must be connected to a network and have access to the firmware OTA server.

Typing ```Y``` (or hitting enter) starts the update operation. As the firmware is downloaded, the percent complete status is updated. If connectivity fails during the download, the operation is halted and the update aborted.

![OTA Update Downloading](/img/datalogger_iot_ota_update_2.png)

Once the update file is downloaded, it is verified as being the correct file. Once verified, the system is rebooted and starts using the new firmware image. You will notice the firmware version change as the DataLogger IoT initializes.

![Updated OTA and Rebooted](/img/datalogger_iot_ota_update_3.png)

## If the Firmware is overwritten by an Arduino Sketch

Flashing an Arduino sketch to a DataLogger IoT board removes the ability for easy firmware updates and will require a full low-level flash of the latest software, which includes the bootloader and partition map for the device. These files are now provided as part of the DataLogger IoT firmware updates.

To perform this level of update, please view the [Build and Update Instructions](https://github.com/sparkfun/sfe-datalogger/blob/main/docs/build_update.md#firmware-upload)
