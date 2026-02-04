
# Serial Terminals

The key to the setup and interactive operation of the  the SparkFun DataLoggerIoT is a modern, interactive Serial Terminal program. Keyboard input and text output are required to be immdiate, to support the interactive menu system of the IoT DataLoggerIoT. Luckily a majority of serial terminal support interactive use. The notible exeception is the build in Arduino IDE Serial Monitor, which requires text to be entered and "submitted" or sent to the device. The Arduino Serial Monitor is not supported for interactive use by the DataLoggerIoT

## Common Serial Terminal Software/Applications

There are plenty of free Serial Terminals out there to configure the DataLogger IoT.

* [Minicom (Linux/Unix, MacOS)](https://manpages.ubuntu.com/manpages/trusty/man1/minicom.1.html)
* [Screen (Linux/Unix, MacOS)](https://learn.sparkfun.com/tutorials/terminal-basics/all#command-line-windows-mac-linux)
* [Tera Term (Windows)](https://learn.sparkfun.com/tutorials/terminal-basics/all#tera-term-windows)
* [RealTerm (Windows)](https://learn.sparkfun.com/tutorials/terminal-basics/all#real-term-windows)

!!! note
     A serial terminal client that supports edit characters is required. Most if not all modern serial terminal programs will have the ability to support interactive edits. We have tested the DataLogger IoT with the Tera Term application, ```minicom``` command, and the ```screen``` command.

If this is the your first time using a terminal window, We recommend checking out the [Serial Terminal Basics](https://learn.sparkfun.com/tutorials/terminal-basics) tutortial.

The above guides will show you how to open the correct port for the DataLogger IoT and how to set the baud rate to **115200** baud. You can change the DataLogger IoT's baud rate through the configuration menus too should you need to.

!!! warning "Arduino IDE Serial Monitor -  **Not Recommended**"
    The Arduino IDE Serial Monitor is not intented for interacive user and should not be used with the DataLogger IoT. For users with an Arduino IDE, you could also use the Arduino Serial Monitor by setting the line ending to **Newline**. Users will also need to ```CTRL``` + ```Enter``` when sending any character to the DataLogger IoT. However, we recommend using one of the terminals mentioned earlier.
