---
icon: material/information
---

![SparkFun DataLogger IoT]( assets/gh-banner-hug-datalogger.png)

The SparkFun DataLogger IoT is a data logger that comes preprogrammed to automatically log IMU, GPS, and various pressure, humidity, and distance sensors.  All without writing a single line of code! They come in two flavors: The [SparkFun DataLogger IoT - 9DoF](https://www.sparkfun.com/products/20594) and the [SparkFun DataLogger IoT](https://www.sparkfun.com/products/22462). Both versions of the DataLogger IoT automatically detects, configures, and logs Qwiic sensors. It was specifically designed for users who just need to capture a lot of data to a CSV or JSON file, and get back to their larger project. Save the data to a microSD card or send it wirelessly to your preferred Internet of Things (IoT) service!

This guide covers the use of the following SparkFun DataLogger Products:

* <a href="https://www.sparkfun.com/products/22462" target="_blank" rel="noopener noreferrer">SparkFun DataLogger IoT   :octicons-link-external-24: </a>
* <a href="https://www.sparkfun.com/products/20594" target="_blank" rel="noopener noreferrer">SparkFun DataLogger IoT - 9DoF   :octicons-link-external-24: </a>

### Required Materials for the Hookup Guide Project

To follow along with this tutorial, you will need the following materials - all available at <a href="https://www.sparkfun.com" target="_blank" rel="noopener noreferrer">sparkfun.com :octicons-link-external-24: </a>.

|  |
|--|
| A supported [SparkFun DataLogger IoT](https://www.sparkfun.com/products/22462) board|
|  [microSD card formatted with FAT32 [COM-15107]](https://www.sparkfun.com/products/15107)|
| [USB C Cable](https://www.sparkfun.com/usb-c-to-usb-c-cable-1-meter-flexible-silicone.html) for communication and power|
| A [qwiic Cable](https://www.sparkfun.com/products/14426)|
|At least one [Qwiic enabled devices that is compatible](../supported_devices)|
| For battery powered operation, a [Lithium Ion Battery](https://www.sparkfun.com/products/18286)|

### The Sensors

Straight out of the ~~box~~ anti-static bag, the DataLogger IoT 9DoFis ready to log data from its built-in ISM330DHCX Inertial Measurement Unit (IMU) and MMC5983MA magnetometer. Only want to log magnetometer, accelerometer, gyro or temperature data? You’re good to go! But the fun is only just beginning…

The DataLogger IoT is preprogrammed to automatically log data from all of the following sensors, so you may wish to add one or more of these to your shopping cart too. (More sensors are being added all the time and it is really easy to upgrade the DataLogger IoT to support them. But we'll get to that in a moment!). Currently, auto-detection is supported on the following Qwiic-enabled products (with the exception of the ISM330DHCX and MMC5983 which is built-in on the 9DoF variant):

For a list of supported devices based on the firmware, you can check out the [list of supported Qwiic Devices in the appendix](../supported_devices)
