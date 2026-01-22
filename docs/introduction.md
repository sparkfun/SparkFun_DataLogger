
![SparkFun DataLogger IoT]( assets/gh-banner-hug-datalogger.png)

The SparkFun DataLogger IoT is a data logger that comes preprogrammed to automatically log IMU, GPS, and various pressure, humidity, and distance sensors.  All without writing a single line of code! They come in two flavors: The [SparkFun DataLogger IoT - 9DoF](https://www.sparkfun.com/products/20594) and the [SparkFun DataLogger IoT](https://www.sparkfun.com/products/22462). Both versions of the DataLogger IoT automatically detects, configures, and logs Qwiic sensors. It was specifically designed for users who just need to capture a lot of data to a CSV or JSON file, and get back to their larger project. Save the data to a microSD card or send it wirelessly to your preferred Internet of Things (IoT) service!

This guide covers the use of the following SparkFun Products:

* SparkFun DataLogger IoT   [:octicons-link-external-24: @SparkFun.com](https://www.sparkfun.com/products/22462)
* SparkFun DataLogger IoT - 9DoF  [:octicons-link-external-24: @sparkfun.com](https://www.sparkfun.com/products/20594)

### Required Materials for the Hookup Guide Project

To follow along with this tutorial, you will need the following materials. You may not need everything though depending on what you have. Add it to your cart, read through the guide, and adjust the cart as necessary.

* 1x SparkFun DataLogger IoT
  * [SparkFun DataLogger IoT - 9DoF [DEV-20594]](https://www.sparkfun.com/products/20594)
  * [SparkFun DataLogger IoT [DEV-22462]](https://www.sparkfun.com/products/22462)
* 1x [microSD card formatted with FAT32 [COM-15107]](https://www.sparkfun.com/products/15107)
* 1x A USB-C cable for configuring and LiPo charging
  * Our [USB 2.0 A to C Cable [CAB-15092]](https://www.sparkfun.com/products/15092) will do nicely
  * Our [USB 3.1 A to C Cable [CAB-14743]](https://www.sparkfun.com/products/14743) is a good choice too
* 1x [Lithium Ion Battery](https://www.sparkfun.com/products/18286)
  * **NOTE** If a battery is used, ensure the correct polarity - some batteries have [opposite polarity](https://learn.sparkfun.com/tutorials/polarity/all#other-polarized-components)
* At least one Qwiic cable
  * A single [50mm Cable](https://www.sparkfun.com/products/14426) is all you need to get going
  * Our [Qwiic Cable Kit](https://www.sparkfun.com/products/15081) covers all the options
* At least one [Qwiic enabled devices that is compatible](../supported_devices) that you may need

### The Sensors

Straight out of the ~~box~~ anti-static bag, the DataLogger IoT is ready to log data from its built-in ISM330DHCX Inertial Measurement Unit (IMU) and MMC5983MA magnetometer. Only want to log magnetometer, accelerometer, gyro or temperature data? You’re good to go! But the fun is only just beginning…

The DataLogger IoT is preprogrammed to automatically log data from all of the following sensors, so you may wish to add one or more of these to your shopping cart too. (More sensors are being added all the time and it is really easy to upgrade the DataLogger IoT to support them. But we'll get to that in a moment!). Currently, auto-detection is supported on the following Qwiic-enabled products (with the exception of the ISM330DHCX and MMC5983 which is built-in on the SPI port):

For a list of supported devices based on the firmware, you can check out the [list of supported Qwiic Devices in the appendix](../supported_devices)
