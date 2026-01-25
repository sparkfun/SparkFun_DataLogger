<!-- ---
icon: material/magnify
--- -->

# Hardware - Overview

In this section, we will highlight the hardware and pins that are broken out on the SparkFun DataLogger IoT. At the time of writing, we highlighted the SparkFun DataLogger IoT - 9DoF. However, this also applies for the SparkFun DataLogger IoT.

DataLogger IoT - 9DoF (Top View)

![Datalogger Iot - 9dof (Top View)](assets/20594-sparkfun_datalogger_iot-9dof_top.jpg)

DataLogger IoT - 9DoF (Bottom View)

![Datalogger Iot - 9dof (Bottom View)](assets/20594-sparkfun_datalogger_iot-9dof_bottom.jpg)

The SparkFun DataLogger is pretty much the same with the exception of the following features listed below. We'll include notes highlighting the differences in each section.

* No built - in 6DoF IMU - ISM330DHCX
* No built - in magnetometer - MMC5983
* The addressable RGB LED - WS2812 is replaced with the side emitting addressable RGB LED - B3DQ3BRG
* No IMU INT2 jumper
* No Mag INT jumper
* Included MEAS PTH Jumper
* The "35 / A7" PTH on the edge of the board is replace with a "5" PTH.

DataLogger IoT (Top View)

![Datalogger IoT (Top View)](assets/22462-dev_sparkfun_datalogger_iot-top.jpg)

DataLogger IoT (Bottom View)

![Datalogger Iot (Bottom View)](assets/22462-dev_sparkfun_datalogger_iot-bottom.jpg)

## ESP32-WROOM Module

The DataLogger IoT is populated with [Espressif's ESP32-WROOM-32E module](https://www.sparkfun.com/products/17830). Espressif's ESP32 WROOM ubiquitous IoT microcontroller is a powerful WiFi, BT, and BLE MCU module that targets a wide variety of applications. For the DataLogger IoT, the firmware currently utilizes the WiFi feature.

![ESP32-Wroom Highlighted On The Datalogger Iot - 9dof](assets/20594-sparkfun_datalogger_iot-esp32.jpg)

## Power

There are a variety of power and power-related nets broken out to connectors and through hole pads. Below list a few methods of powering the board up. There are protection diodes for the USB-C, 5V pin, and single cell LiPo battery. Power is regulated down to [3.3V for the system voltage](https://learn.sparkfun.com/tutorials/logic-levels/all).  Depending on the settings and what is connected to the DataLogger IoT, the board can pull a minimum of 200&micro;A in low power mode by itself.

* USB-C
* 5V Pin
* Single Cell LiPo Battery
* 3V3 Pin

### USB-C and 5V

The DataLogger IoT comes equipped with a USB type C socket which you can use to connect it to your computer to view the output and configuration through the serial terminal, or plug in a USB-C power supply. The DataLogger IoT includes the configuration channel resistors needed to tell the power supply to deliver **5V**. You can use your USB-C laptop charger as the power source should you need to, even though it normally delivers a much higher voltage.

There is also a **5V** power input pin. You can use this to feed in 5V power from an external source. The maximum voltage is **6.0V**. The 5V pin is diode-protected and so is the USB-C power input, so it is OK to have both connected at the same time. This pin is ideal if you want to power your DataLogger from regulated solar power or a different type of power supply. You can not use the 5V pin as an output.

![USB C Connector, 3.3V Voltage Regulator, 5V PTH](assets/20594-sparkfun_datalogger_iot-esp32_top_power_in_usb_5v_pth.jpg)

![5V PTH](assets/20594-sparkfun_datalogger_iot-esp32_bottom_power_in_5v_pth.jpg)

Voltage from the USB is regulated down to the XC6222 **3.3V**/700mA voltage regulators for the system voltage and Qwiic-enabled devices. USB power is also connected to the MCP73831 to charge a single cell LiPo battery at a default rate of **500mA**.

For customers in North America, our [NEMA Raspberry Pi Wall Adapter](https://www.sparkfun.com/products/15448) is a perfect choice. You can power the DataLogger IoT from our [USB Battery Pack / Power Bank - TOL-15204](https://www.sparkfun.com/products/15204) but you will need a USB-C cable too:

* Our [USB 2.0 A to C Cable - CAB-15092](https://www.sparkfun.com/products/15092) will do nicely
* Our [USB 3.1 A to C Cable - CAB-14743](https://www.sparkfun.com/products/14743) is a good choice too

### LiPo Battery Input, Charger, and Fuel Gauge

**Battery Polarity:*** Please make sure that you use one of our recommended Lithium Ion batteries. Some batteries use the same JST connector as ours but have the[opposite polarity](https://learn.sparkfun.com/tutorials/polarity/all#other-polarized-components). Connecting one of these to your DataLogger IoT will destroy it. If you are going to use your own battery, it is up to you to ensure it has the correct polarity.

But of course you’re going to want to use the DataLogger IoT to log sensor data while on the move too. You can connect one of our [standard single cell LiPo batteries](https://www.sparkfun.com/products/13855) to the DataLogger IoT and power it for hours, days or weeks depending on what sensors you have attached and how often you log data. The DataLogger IoT uses the built-in MCP73831 charger too which will charge your battery at 500mA when USB-C is connected. Please make sure your battery capacity is at least **500mAh** (0.5Ah); bad things will happen if you try to charge our smallest batteries at 500mA. The board also includes the MAX17048 LiPo Fuel Gauge which allows you to determine how much power your LiPo battery has available. The 2-pin JST connector pins are broken out to PTHs on the edge of the board if you decide to solder a single cell LiPo battery directly to the board or power another device.

![LiPo Charger And Fuel Gauge Circuit Highlighted On The Datalogger Iot - 9dof (Top View)](assets/20594-sparkfun_datalogger_iot-esp32_top_max17043_fuel_gauge_lipo_charger_mcp73831_battery_input.jpg)

![LiPo Charger and Fuel Gauge Circuit Highlighted on the DataLogger IoT - 9DoF (Bottom View)](assets/20594-sparkfun_datalogger_iot-esp32_bottom_battery_input.jpg)

### 3V3 Pins

For those going the old school route, you can also bypass the voltage regulators by [soldering](https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering) directly to the 3V3 and GND pin to provide power if your application has a regulated 3.3V. Note that this is only connected to the system voltage. You will also need to provide power to the 3V3 SWCH or Qwiic-enabled devices should you decide to bypass the voltage regulator.

![3.3V Voltage Regulators, PTHs, and Qwiic Connectors Highlighted on the DataLogger IoT - 9DoF (Top View)](assets/20594-sparkfun_datalogger_iot-esp32_top_3v3_system_qwiic.jpg)

**3.3V Voltage Regulators, PTHs, and Qwiic Connectors Highlighted on the DataLogger IoT - 9DoF (Top View)**

![3.3V Voltage Regulators, PTHs, and Qwiic Connectors Highlighted on the DataLogger IoT - 9DoF (Bottom View)](assets/20594-sparkfun_datalogger_iot-esp32_bottom_3v3_system_qwiic.jpg)

## CH340 USB-to-Serial Converter

The top side of the board includes a CH340 USB-to-Serial Converter. The chip can be used to send serial data between the device and computer. You can view the output or configure the device through a serial terminal.

![Ch340 highlighted on the datalogger iot - 9dof (top view)](assets/20594-sparkfun_datalogger_iot-esp32_top_ch340_usb-to-serial.jpg)

The driver should automatically install on most operating systems. However, there is a wide range of operating systems out there. You may need to install drivers the first time you connect the chip to your computer's USB port or when there are operating system updates. For more information, check out our [How to Install CH340 Drivers Tutorial](https://learn.sparkfun.com/tutorials/how-to-install-ch340-drivers).

## UART

The hardware serial UART pins are broken out on the edge of the board. For more information about Serial UART, check out the tutorial about [Serial Communication](https://learn.sparkfun.com/tutorials/serial-communication/all#wiring-and-hardware) for more information.

* **TXD**: UART transmit pin. This is connected to pin `16`.
* **RXD**: UART receive pin. This is connected to pin `17`.

![Uart Pins Highlighted On The Datalogger Iot - 9dof (Top View)](assets/20594-sparkfun_datalogger_iot-esp32_top_uarts.jpg)

![Uart pins highlighted on the datalogger iot - 9dof (bottom view)](assets/20594-sparkfun_datalogger_iot-esp32_bottom_uart.jpg)

## Qwiic and I<sup>2</sup>C

!!! note
    You may notice a thin film over the vertial Qwiic connector. This is used by a pick-and-place machine when populating the component on the board before it goes through the reflow oven. This can be removed if you decide to use the vertical Qwiic connector with Qwiic-enabled devices.

[SparkFun's Qwiic Connect System](https://www.sparkfun.com/qwiic) uses 4-pin JST style connectors to quickly interface development boards with I<sup>2</sup>C sensors and more. No soldering required and there's no need to worry about accidentally swapping the SDA and SCL wires. The Qwiic connector is polarized so you know you’ll have it wired correctly every time, right from the start. Qwiic boards are daisy chain-able too so you can connect multiple sensors to the DataLogger IoT and log readings from all of them.

The board is populated with vertical and horizontal Qwiic connectors. These are also broken out to PTHs on the edge of the board.

![Qwiic Connector And I2C PTH Highlighted On The Datalogger Iot - 9Dof (Top View)](assets/20594-sparkfun_datalogger_iot-esp32_top_qwiic_i2c.jpg)

![Qwiic Connector and I2C PTH Highlighted on the DataLogger IoT - 9DoF (Bottom View)](assets/20594-sparkfun_datalogger_iot-esp32_bottom_qwiic_i2c.jpg)

* **SCL**: I<sup>2</sup>C clock pin. This is connected to pin `22` and a 2.2k&ohm; pull-up resistor.
* **SDA**: I<sup>2</sup>C data pin. This is connected to pin `21` and a 2.2k&ohm; pull-up resistor.
* **3V3 SW**: The 3.3v pin is connected to the XC6222 voltage regulator's output to power the Qwiic devices.
* **GND**: Common, ground voltage (0V reference) for the system

Connected to the line I<sup>2</sup>C line is the MAX17048 LiPo fuel gauge (7-bit unshifted address = **0x36**).

Sometimes you might want to connect more than one of the same type of sensor to the DataLogger IoT. On the I<sup>2</sup>C bus, each device needs to have a unique address. On many of our boards, there are jumpers links which you can use to change the address and some have addresses that can be configured in software. But there are some where you cannot change the address. Typically, one would use a multiplexor. However, we currently do not have the DataLogger IoT configured to work with any multiplexors (i.e. Qwiic Mux Breakout).

The DataLogger IoT includes a dedicated 3.3V regulator for the Qwiic connector. This has several advantages including:

* The DataLogger IoT can completely power-down the I<sup>2</sup>C sensors during sleep to prolong your battery life
* There’s no risk of the Qwiic bus gulping too much current and causing problems for the ESP32

## SPI

The SPI pins are broken out on the edge of the board. For those that are unfamiliar to PICO and POCI, check out the [SPI tutorial](https://learn.sparkfun.com/tutorials/serial-peripheral-interface-spi/all#receiving-data) for more information.

* **SCK**: SPI clock pin. This is connect to pin `18`.
* **PICO**: SPI Peripheral In Controller Out. This is connected to pin `23`.
* **POCI**: SPI Peripheral Out Controller In. This is connected to pin `19`.

![Spi Pins Highlighted On The Datalogger Iot - 9dof (Top View)](assets/20594-sparkfun_datalogger_iot-esp32_top_spi.jpg)

![Spi Pins Highlighted on the DataLogger IoT - 9DoF (Bottom View)](assets/20594-sparkfun_datalogger_iot-esp32_bottom_spi.jpg)

Not shown in the image are the chip select (CS) pins. The 6DoF IMU's CS pin is connected to pin `5`. The magnetometer's CS pin is connected to pin `27` which is not broken out.

On the DataLogger IoT, the IMU and magnetometer are not connected to the SPI port since they are not included on the board. Instead of pin "35 / A7" being broken out, pin "5" is broken out on the edge of the board.

![Pin 5 highlighted on the DataLogger IoT (Top View)](assets/22462-dev_sparkfun_datalogger_iot_pin_5-top.jpg)
**Pin 5 Highlighted on the DataLogger IoT (Top View)**

![Pin 5 highlighted on the DataLogger IoT (Bottom View)](assets/22462-dev_sparkfun_datalogger_iot_pin_5-bottom.jpg)

**Pin 5 Highlighted on the DataLogger IoT (Bottom View)**

## MicroSD Card Socket

The DataLogger IoT supports full 4-bit SDIO for fast logging and uses common microSD cards to record clear text, comma separated files. Flip over the DataLogger IoT and you'll see the latching microSD card socket. You probably already have a microSD card laying around. However, if you need any additional units, we have plenty [in the SparkFun catalog](https://www.sparkfun.com/categories/351). The DataLogger can use any size microSD card and supports FAT32 cards in addition to FAT16. Please ensure that your SD card is formatted correctly; we recommend the [Raspberry Pi Imager Tool](https://www.raspberrypi.com/software/).

![MicroSD Card](assets/20594-sparkfun_datalogger_iot-esp32_bottom_microsd_card.jpg)

Slide in your formatted SD card and it will click neatly into place. The edge of the SD card will stick out on the edge of the circuit board when it is inserted correctly.

You should only insert or remove the SD card while the power is turned off or disconnected. Removing the card while the DataLogger IoT is logging will almost certainly corrupt your data.

## 9 Degrees of Freedom (9DOF)

As stated earlier, included on every DataLogger IoT - 9DoF is a 6DoF Inertial Measurement Unit (IMU) for built-in logging of triple-axis accelerometer and gyro. There is also a built-in triple-axis magnetometer for a complete 9 degrees of freedom. Beside each IC is a silkcreen showing the reference axis. Both are connected to the ESP32 via the SPI port. Combined, you have 9 degrees of inertial measurement! Whereas the [original 9DOF Razor](https://www.sparkfun.com/products/14001) used the old MPU-9250, this uses the ISM330DHCX and MMC5983MA. Oh, and if that wasn’t enough, it comes with a built-in temperature sensor on each IC too. So if you want to use the DataLogger IoT as a transportation logger, it will do that straight out of the anti-static bag!  

![Accelerometer, Gyro, and Magnetometer](assets/20594-sparkfun_datalogger_iot-esp32_top_9dof_imu_accelerometer_gyro_magnetometer.jpg)

For users using the SparkFun DataLogger, there 6DoF IMU and magnetometer is not populated on the board. The associated silkscreen and jumpers for the sensors are also not included on the board.

![DataLogger IoT (Top View)](assets/22462-dev_sparkfun_datalogger_iot-top.jpg)

![DataLogger IoT (Bottom View)](assets/22462-dev_sparkfun_datalogger_iot-bottom.jpg)

## Analog Pins

There are three 12-bit analog pins available and broken out on edge of the board.

* **36 / A0**: Analog A0. This is connected to pin `36`.
* **39 / A3**: Analog A3. This is connected to pin `39`.
* **35 / A7**: Analog A7. This is connected to pin `35`.

![Analog Pins Highlighted on the DataLogger IoT (Top View)](assets/20594-sparkfun_datalogger_iot-esp32_top_analog.jpg)

![Analog Pins Highlighted on the DataLogger IoT (Bottom View)](assets/20594-sparkfun_datalogger_iot-esp32_bottom_analog.jpg)

## Reset and Boot Buttons

You may notice a thin film over buttons. This is used by a pick-and-place machine when populating the component on the board before it goes through the reflow oven. This can be removed.

There are two buttons available on the board for reset and boot. These are also broken out on the edge of the board as PTHs. If you have your DataLogger IoT mounted in an enclosure, you can also attach an external boot or reset switch too. Any Single Pole Normally-Open Push-To-Close momentary switch will do. Solder pin headers or wires to the RST and GND breakout pins and connect your external switch to those.

**RESET**: Pressing this button will pull the pin LOW and reset the program running on the ESP32 without unplugging the board.

**BOOT**: The boot button usually allows users to force the ESP32 into bootloader mode to manually flash new firmware to the ESP32. The ESP32 will remain in this mode until there is a power cycle or the reset button is pressed. As of firmware v01.00.02, this button has an extra function: pressing down on the user button for 20 seconds will erase on-board preference storage and restart the board. This is connected to pin `0` on the ESP32.

![Reset and Boot Buttons (and Associated PTHs) Highlighted on the DataLogger IoT - 9DoF (Top View)](assets/20594-sparkfun_datalogger_iot-esp32_top_reset_boot_buttons.jpg)

![Reset and Boot Buttons (and Associated PTHs) Highlighted on the Datalogger IoT - 9dof (Bottom View)](assets/20594-sparkfun_datalogger_iot-esp32_bottom_reset_boot_buttons.jpg)

Like other ESP32 development boards, these buttons are populated so that users can place the ESP32 module in bootloader mode. For users that need to place the board in bootloader mode when powered, you will need to:

* Press the BOOT button.
* While holding on the BOOT button, press the RESET button momentarily.
* Finally, release the BOOT button.

Most of the time, users will simply have the board executing the firmware that is loaded on the ESP32 module and updating through the configuration menu either through the microSD card or OTA.

### Overwriting the Build-In Firmware

Please think very carefully before uploading any Arduino sketches to your DataLogger IoT.

**You will overwrite the DataLogger IoT firmware, leaving it unable to update or restore itself.**

The DataLogger IoT comes pre-programmed with amazing firmware which can do _so_ much. It is designed to be able to update itself and restore itself if necessary. But it can not do that if you overwrite the firmware with any Arduino sketch. It is just like erasing the restore partition on your computer hard drive. Do not do it - unless you _really_ know what you are doing.

## LEDs

There are three LEDs populated on the board. These can be disabled with their respective jumpers on the back of the board.

* **STAT**: The status LED is connected to pin `25`.
* **RGB**: The WS2812-2020 RGB addressable LED is connected to pin `26`. In addition to being disabled through the jumper on the back, you can also disable the LED through software.
* **CHG**: The on-board yellow CHG LED can be used to get an indication of the **charge status** of your battery. Below is a table of other status indicators depending on the state of the charge IC.

### RGB LED Color Values

The following colors represent different states that the board is in.

|Color|Description|
|--|--|
|White|A solid white LED indicates that the board is currently being configured through the configuration menu.|
|Green|A solid green LED indicates that the board is initializing. As of firmware v01.00.02, the LED blinks green when on battery power indicating that the battery level is _VBATT_ > 50%.|
|Blue|A blinking blue LED indicates that the board is reading sensor data and logging the values.|
|Yellow|A solid yellow LED indicates that a firmware update is in progress. As of firmware v01.00.02, the LED blinks yellow when on battery power indicating that the battery level is between 50% > _VBATT_ > 10%.|
|Red|As of firmware v01.00.02, the LED blinks red when on battery power indicating that the battery level is _VBATT_ < 10%.|

### Charge LED Values

|State|LED Status|
|--|--|
|No Battery|Off|
|Shutdown|Off - may flicker|
|Charging|On|
|Charge Complete|Off|

![LEDs](assets/20594-sparkfun_datalogger_iot-esp32_top_user_led_rgb_ws2812.jpg)

![Pths Connected To Leds](assets/20594-sparkfun_datalogger_iot-esp32_bottom_user_led_rgb_ws2812.jpg)

## Jumpers

There are seven jumpers on the back of the DataLogger IoT - 9DoF. For more information, check out our [tutorial on working with jumper pads and PCB traces](https://learn.sparkfun.com/tutorials/how-to-work-with-jumper-pads-and-pcb-traces/all) should you decide to cut the traces with a hobby knife.

|Jumper|Description|
|--|--|
|SHLD|This jumper connects the USB Type C connector's shield pin to GND. Cut this to isolate the USB Type C connector's shield pin.|
|I<sup>2</sup>C|This three way jumper labeled as I<sup>2</sup>C are closed by default. By cutting the jumpers, it will disconnect the 2.2k&ohm; pull-up resistors for the I<sup>2</sup>C |bus. Most of the time you can leave these alone unless your project requires you to [disconnect the pull-up resistors](https://learn.sparkfun.com/tutorials/i2c/all#i2c-at-the-hardware-level).|
|STAT|This jumper connects the status LED to pin `25` and it is closed by default. Open the jumper to disable the LED.|
|RGB|This jumper connects the WS2812-2020 RGB addressable LED to pin `26` and it is closed by default. Open the jumper to disable the LED.|
|CHG*|This jumper connects the charge LED on the MCP73831 charge IC and it is closed by default. Open the jumper to disable the LED.|
|IMU INT2|This jumper connects the ISM330DHCX IMU's interrupt pin to pin `35` and it is open by default. Add a solder jumper to connect.|
|MAG INT|This jumper connects the MMC5983MA  magnetometer's interrupt pin to pin `35` and it is open by default. Add a solder jumper to connect.|

![Jumpers](assets/20594-sparkfun_datalogger_iot-esp32_bottom_jumpers.jpg)

On the DataLogger IoT, the IMU INT2 or MAG INT jumpers are not included since it does not have the built in 6DoF IMU or magnetometer. With the extra real estate on the board, we were able to include a **MEAS** PTH and jumper on the board. By default, the jumper is closed. You can cut this jumper on the bottom side of the board to measure the DataLogger IoT’s current draw from external power.

![Meas jumper on the datalogger iot (top view)](assets/22462-dev_sparkfun_datalogger_iot_meas_jumper-top.jpg)

![Meas Jumper on the DataLogger IoT (Bottom View)](assets/22462-dev_sparkfun_datalogger_iot_meas_jumper-bottom.jpg)

## Board Dimensions

The overall length and width with the antenna connector is about 1.66" x 2.00". There are four mounting holes in the center of the board. Due to the size of the board and the ESP32 module, the mounting holes are positioned in a way for users to add two Qwiic enabled boards with a width of 1.0" instead of one Qwiic board.

### DataLogger IoT - 9DoF

![DataLogger IoT - 9DoF Board Dimensions](assets/board_files/datalogger_IoT_9DoF/Sparkfun_DataLogger_IoT_9DoF_Board_Dimensions.png)

### DataLogger IoT

![Datalogger iot board dimensions](assets/board_files/Datalogger_IoT/SparkFun_DataLogger_IoT_Board_Dimensions.png)
