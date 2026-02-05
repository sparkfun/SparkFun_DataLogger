
# Logging - Data File

In the Settings menu, select the Data File Menu Item to adjust the Logging Data File.

![Data File Menu Options](assets/sfe-datalogger-set-datafile.png )
/// captions
Data File Menu Options
///

Adjusting these parameters allows you to change the filename prefix, the number the files starts at, and how often the DataLogger will create a new file on the microSD card. For example, the default file will be saved as **sfe0001.txt**. After 1 day, the DataLogger will rotate files by creating a new file named **sfe0002.txt**. The DataLogger will begin logging data in this new file. The purpose of this log rotation is to limit the size of each file prevent issues when opening large files.

* **Rotate Period** - Time between file rotation
* **File Start Number** - The number the filename rotation starts with
* **Filename Prefix** - The prefix string for the generated filenames

The contents of the file will depend on how the data was saved (either CSV or JSON). Make sure that the SD Card format is enabled to either CSV or JSON with your desired device outputs turned on so that the DataLogger can save the readings.

When removing the microSD card, make sure to remove your power source. Then insert into it into microSD card adapter or USB reader. When connecting the memory card to your computer, you can use a text editor to view the saved readings. In this case, a Windows operating system was viewing the file **sfe0000.txt** and it was only file available in the microSD card.

![Readings Saved In Text File Shown In A Windows File Explorer](assets/datalogger_iot_text_file.jpg)
/// caption
Reading data value from Text File
///
