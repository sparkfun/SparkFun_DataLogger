
# MicroSD Card Setup

Not all microSD cards are created equal. The [capacity, read/write speed, and format](https://learn.sparkfun.com/tutorials/sd-cards-and-writing-images) vary depending on the manufacturer. In order to log data to the microSD card, you will need to ensure that your memory card is formatted as **FAT32**. You can also use FAT16. If the memory card is formatted as a different memory card, the DataLogger IoT will not be able to recognize the microSD card.

## Checking MicroSD Card Format

While you can simply insert the microSD card into your DataLogger IoT and start logging, there may be a chance that the it will not recognize the memory card due to the format.

### Checking MicroSD Card Format - Windows

To check to see if it is the correct format on a Windows you could head to the drive, right click, and select **Properties**.

<figure>
![MicroSD Card Properties](/img/microsd_card_properties.jpg)
<figcaption>
SD Card Properties Menu Entry on Windows
</figcaption></figure>

Once the properties are open, you should be able to tell what file system that the memory card uses. In this case, it was exFAT which is not compatible with the DataLogger IoT. You will need to reformat the memory card since it is not formatted as FAT32.

<figure>
![Check File System Windows](/img/microsd_card_check_file_system_exfat.jpg)
<figcaption>
Format of exFat - Not Compatable
</figcaption></figure>

The format should be ```FAT32```

<figure>
![FAT32 Format](/img/microsd_card_check_file_system_fat32.jpg)
<figcaption>
FAT32 Format - Compatable with the DataLogger IoT
</figcaption></figure>

### Checking MicroSD Card Format - macOS

To check to see if it is the correct format on a macOS, you could head to the drive on your desktop. Then right click, and select **Get Info**.

<figure>
![Get Info on microSD card](/img/mac_get_info.png)
<figcaption>
"Get Info" on MacOS
</figcaption></figure>

A window will pop up indicating the microSD card properties. Under **General:** > **Format:**, you should be able to tell what file system that the memory card uses. In this case, it was exFAT which is not compatible with the DataLogger IoT. You will need to reformat the memory card since it is not formatted as FAT32.

<figure>
![Exfat](/img/mac_microsd_exfat.png)
<figcaption>
Showing Format as exFat
</figcaption></figure>

To reformat the drive, the built in `Disk Utility` application on macOS can be used. Once the SD Card is reformatted, the `Get Info` dialog will show:

<figure>
![FAT32 on MacOS](/img/mac_microsd_fat32.png)
<figcaption>
FAT32 Format on macOS
</figcaption></figure>

## Download Raspberry Pi Imager

There are a few methods and programs available to reformat your microSD card as a FAT32. We found it easier to use the [Raspberry Pi Imager Tool](https://www.raspberrypi.com/software/). Of course, you will only be using the tool to erase the contents of the microSD card and formatting it as a FAT32 system. You will not actually flash any image to the memory card. Click on the button below to download the tool from the Raspberry Pi Foundation. It is supported on *Windows*, *macOS*, and *Ubuntu for x86*.

## Formatting as FAT32 using the Raspberry Pi Imager

After downloading and installing the software, open the Raspberry Pi Imager.

<figure>
![Raspberry Pi Imager](/img/raspberry_pi_imager.jpg)
<figcaption>
Raspberry Pi Imager
</figcaption></figure>

Under "**Operating System**", select "**Erase**" to "format card as FAT32."

<figure>
![Raspberry Pi Imager - Erase : Format as FAT32](/img/raspberry_pi_imager_erase_format.jpg)
<figcaption>
Select 'ERASE' for Operating System
</figcaption></figure>

Under "**Storage**", select the drive that the microSD card appeared as on your computer.

<figure>
![Raspberry Pi Imager - Select Storage Drive](/img/raspberry_pi_imager_select_drive.jpg)
<figcaption>
Storage is the SD Card
</figcaption></figure>

When ready, select "**Write**". After a few minutes, the microSD card should be formatted with FAT32.

<figure>
![Raspberry Pi Imager - Write](/img/raspberry_pi_imager_write.jpg)
<figcaption>
Writing/Reformatting the SD Card
</figcaption></figure>

Once the memory card has finished formatting, eject the microSD from your computer. To check to see if the microSD card is formatted as FAT32, you can check its properties as explained earlier with your operating system.
