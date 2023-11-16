# Creating and Connecting to an Arduino IoT Device

One of the key features of the SparkFun DataLogger IoT is it's simplified access to IoT service providers. This document outlines how an Arduino IoT Device is used by the DataLogger IoT.

The following is covered by this document:

* Structure of the Arduino IoT Cloud devices
* Device creation in the Arduino IoT cloud
* Setup of the Arduino IoT driver
* How data is posted from the DataLogger IoT to the Arduino IoT Device

Currently, the Arduino IoT device connection is a single direction - used to post data from the DataLogger IoT to an Arduino IoT Device.

<div style="text-align: center">
    <a href="../assets/Combined_Arduino_Logo-IoT_Cloud.png"><img src="../assets/Combined_Arduino_Logo-IoT_Cloud.png" width="100" length="100" alt="Arduino Logo"></a>
    <br />
    <i>Image Courtesy of <a href="https://cloud.arduino.cc/home/">Arduino</a></i>
</div>


!!! note
    To take advantage of the API's in Arduino IoT Cloud, you will also need to have a [service plan](https://cloud.arduino.cc/plans).



## General Operation

The Arduino IoT Cloud enables connectivity between an IoT/Edge Arduino enabled device and the cloud. The edge device updates data in the Arduino Cloud by updating `variables` or parameters attached to a cloud device.

In the Arduino Cloud, the edge device is represented by a *Device* which has a virtual *Thing* attached/associated with it. The *Thing* acts as a container for a list of *parameters* or *variables* which represent the data values received from the edge device. As values on the edge device update, they are transmitted to the Arduino Cloud.

For a SparkFun DataLogger IoT connected to an Arduino IoT device, the output parameters of a device connected to the DataLogger are mapped to variables within the Arduino IoT Device's Thing using a simple pattern of *DeviceName_ParameterName* for the name of the variable in the Arduino IoT Cloud.

<div style="text-align: center">
  <a href="../assets/aiot_overview.png"><img src="../assets/aiot_overview.png" width="1000" height="667" alt="Arduino IoT Overview"></a>
</div>



## Creating a Device in Arduino IoT

The first step connecting to the Arduino IoT Cloud is setting up a device within the cloud. A device is a logical element that represents a physical device.

Log into your Arduino IoT Cloud account.

<div style="text-align: center"><a href="https://cloud.arduino.cc/home/" target="arduino_iot_cloud" class="md-button">Click Here to Log into Arduino IoT Cloud</a></div>

Click on the Arduino's **IoT Cloud** app on the Arduino Cloud home page. Of course, you can also click on the 3x3 dots beside your account on the upper to select the IoT Cloud as well.

<div style="text-align: center">
  <a href="../assets/aiot_cloud_sel.jpg"><img src="../assets/aiot_cloud_sel.jpg" width="600" height="600" alt="Arduino IoT Cloud"></a>
</div>

Click on the expand menu icon on the upper right (e.g. the three lines stacked like a "hamburger"; &#9776;) and select  **Devices**. If your window is big enough, the it will show up on the navigation bar.

<div style="text-align: center">
  <a href="../assets/aiot_cloud_sel_devices.jpg"><img src="../assets/aiot_cloud_sel_devices.jpg" width="600" height="600" alt="Select Devices"></a>
</div>

This page lists your currently defined devices. If there are no defined devices, select the ***Add Device*** button. The location of this button will change once the page has a device and the button will be renamed as ***Add***.

<div style="text-align: center">
  <a href="../assets/aiot_dev_add.jpg"><img src="../assets/aiot_dev_add.jpg" width="600" height="600" alt="Add a Device"></a>
</div>

A device type selection dialog is then shown. Since we are connecting a DataLogger IoT board to the system, and not connected a known device, select ***DIY*** - ***Any Device*** to manually include the DataLogger IoT.

<div style="text-align: center">
  <a href="../assets/aiot_dev_setup_sel.jpg"><img src="../assets/aiot_dev_setup_sel.jpg" width="600" height="600" alt="Select DIY Device"></a>
</div>

Once selected, another dialog is presented. Just select *Continue*. At this point you can provide a name for your device. In this case we named it as "_MyDataLoggerIoT_."

<div style="text-align: center">
  <a href="../assets/aiot_dev_name.jpg"><img src="../assets/aiot_dev_name.jpg" width="600" height="600" alt="Name Device"></a>
</div>

The next screen is the critical step of the device creation process. This step is the one time the Device Secret Key is available. The provided ```Device ID``` and Device ```Secret Key``` values are needed to connect to the Arduino IoT Cloud. Once this step is completed, the Secret Key is no longer available.

<div style="text-align: center">
  <a href="../assets/aiot_dev_secrets.jpg"><img src="../assets/aiot_dev_secrets.jpg" width="600" height="600" alt="Device Secret"></a>
</div>

The easiest way to capture these values is by downloading as a PDF file, which is offered on the setup page. Click on the **download the PDF** and save it to a safe location. When ready, click on the check box indicating that you have saved the values and select the ***Continue*** button.



## Arduino Cloud API Keys

In addition to creating a device, to access the Arduino IoT Cloud, the driver requires an API Key. This allows the DataLogger IoT's Arduino IoT Cloud driver to access the web API of the Arduino Cloud. This API is used to setup the connection to the Arduino Cloud.

To create an API key, head back to the **Arduino Cloud** [home page](https://cloud.arduino.cc/home/).

<div style="text-align: center">
  <a href="../assets/aiot_cloud_home.jpg"><img src="../assets/aiot_cloud_home.jpg" width="600" height="600" alt="Arduino Cloud Home Page"></a>
</div>

Click on the expand menu icon on the upper right (e.g. the three lines stacked like a "hamburger"; &#9776;) and select  **API keys**. If your window is big enough, it will show up on the menu entry on the left side of the page.



<div style="text-align: center">
  <a href="../assets/aiot_cloud_api-k.jpg"><img src="../assets/aiot_cloud_api-k.jpg" width="600" height="600" alt="API Keys"></a>
</div>

This menu takes you to a list of existing API Keys. If you have not created one yet, the list will have nothing in it like the image below. From this page, select the ***CREATE API KEY*** button, which is on the upper right of the page.

<div style="text-align: center">
  <a href="../assets/aiot_cloud_create_key.jpg"><img src="../assets/aiot_cloud_create_key.jpg" width="600" height="600" alt="Create Key"></a>
</div>

!!! note
    Users will need a service plan in order to take advantage of the API.
    
    <div style="text-align: center">
      <a href="../assets/aiot_cloud_plan_limits.JPG"><img src="../assets/aiot_cloud_plan_limits.JPG" width="600" height="600" alt="Arduino IoT Cloud Upgrade Plan"></a>
    </div>


In the presented dialog, enter a name for the API key. In this case, we named it "*MyDataLoggerKey*".

<div style="text-align: center">
  <a href="../assets/aiot_cloud_key_name.jpg"><img src="../assets/aiot_cloud_key_name.jpg" width="600" height="600" alt="API Key Name"></a>
</div>

Once the name is entered, click ***CONTINUE***. A page with the new API key is presented. Like in Device Creation, this page contains a secret that is only available on this page during this process.

<div style="text-align: center">
  <a href="../assets/aiot_cloud_key_secret.jpg"><img src="../assets/aiot_cloud_key_secret.jpg" width="600" height="600" alt="API KEY NOW"></a>
</div>

Make note of the *Client ID* and *Client Secret* values on this page. The best method to capture these values is to download the PDF file offered on this page. Click on the **download the PDF** and save it to a safe location. When ready, click on the check box indicating that you have saved the values and select the ***DONE*** button.

At this point, the Arduino IoT cloud is setup for connection by the driver.



## Arduino IoT Configuration

To add an Arduino IoT device as a destination DataLogger IoT, the Arduino IoT connection is enabled via the DataLogger menu system and the connection values, obtained from the Arduino IoT Cloud (see above), are set in the connection properties.

The specifics for the Arduino IoT Cloud must be configured. This includes the following:

* Thing Name
* Thing ID
* API Client ID
* API Secret
* Device Secret
* Device ID

!!! note
    The Thing Name does not necessarily need to be configured. However, there will be less confusion if you set this up before connecting the DataLogger IoT to the Cloud. The Thing ID will automatically be generated and saved once there is a connection available.


### Thing Name

The name of the Arduino IoT Cloud ```Thing``` to use. If the Thing doesn't exist on startup, the driver will create a Thing and be named "Untitled" if you do not provide a name.

!!! note
    Note satisfied with the default "Untitled" as the Thing's name? You can rename the Thing Name after creating the Thing. Note that you will need to manually rename the Thing Name on the Arduino IoT Cloud and DataLogger IoT.



### Thing ID

This is the ID of the Thing being used. This value is obtained by the following methods:

* If the driver creates a new Thing, the ID is obtained and used.
* If an existing Thing is connected to the DataLogger IoT, the driver retrieves it's ID.
!!! note
    In this case, the driver cannot create any new variables until the system is restarted.
* The user creates a new Thing using the web interface of Arduino IoT Cloud, and provides the *Thing Name* and *Thing ID* .



### API Client ID and Secret

These values are used to provide API access by the driver. This access allows for the creation/use of a Thing and Variables within the Arduino IoT Cloud. These are obtained via the steps outlined earlier in this document.



### Device Secret and ID

These values are used to identify the Arduino IoT device that is connected to. These are obtained via the steps outlined earlier in this document.



## Setting Properties

The above property values must be set in the DataLogger Arduino IoT driver before use.  They can be manually by using the menu system like the previous MQTT example.

For users that are interested in using the menu system, open a Serial Terminal, connect to the COM port that your DataLogger enumerated to, and set it to **115200** baud. In this case, we connected to **COM13**. Press any key to enter the Main Menu. Type <kbd>1</kbd> to enter the Settings menu. Then type <kbd>16</kbd> to enter the Arduino IoT Menu. When the menu system for the Arduino IoT is presented, you will need to configure the property values as listed in the JSON file. Saving the values through the menu system will save the credentials to the ESP32's persistent memory. The following options are displayed:

<div style="text-align: center">
  <a href="../assets/SparkFun_DataLogger_IoT_Arduino_IoT_Cloud_Menu.JPG"><img src="../assets/SparkFun_DataLogger_IoT_Arduino_IoT_Cloud_Menu.JPG" width="600" height="600" alt="Arduino IoT Cloud Menu Options"></a>
</div>

The alternative to using the menu system is a JSON file. These values can be set using a JSON file that is loaded by the system at startup. For the DataLogger Arduino IoT example outlined in this document, the entries in the setting's JSON file are as follows:

```json
"Arduino IoT": {
    "Enabled": true,
    "Thing Name": "SparkFunThing1",
    "API Client ID": "API ID",
    "API Secret": "My API Secret",
    "Device Secret": "My Device Secret",
    "Device ID": "My Device ID"            
  },
```

You will need to update the `API Client ID`, `API Secret`, `Device Secret`, and `Device ID` with the values that were obtained earlier. Don't forget to enable Arduino IoT service by setting the value to `true`. If the JSON file is saved in the microSD card, you will need to load the credentials to the DataLogger IoT.

!!! tip
    To load the values by the system at startup using a JSON file and microSD card, you will need to [configure the Save Settings](../configuration#general-save-settings). This JSON file will be created with the "**Save to Fallback**" option. Make sure to enable the Arduino IoT as well.



## Operation

On startup, when the first values are written from the DataLogger IoT, the connection to the Arduino IoT Cloud is made. During this connection, the system connects to the specified *Thing* and variables are mapped between the DataLogger Device values and Arduino Cloud Variables. If needed, variables are created in the cloud.

While this initial setup takes seconds to complete, updates to the values on the Arduino Cloud are rapid as soon as there is a connection available.



### Viewing Values

Once the DataLogger IoT device is configured and running, updates in Arduino IoT are listed in the ***Things*** tab of the Arduino IoT page. Clicking the target Thing provides access to the current variable values that are connected to the DataLogger IoT. Your mileage may vary depending on the compatible device that is connected to the DataLogger IoT. In this case, we were able to see the built-in sensors that were connected on the DataLogger IoT - 9DoF.

<div style="text-align: center">
  <a href="../assets/aiot_cloud_vars.jpg"><img src="../assets/aiot_cloud_vars.jpg" width="600" height="600" alt="Cloud Variables"></a>
</div>

!!! note
    Not seeing certain variables on your list? Check your connections to make sure that the compatible device is connected to the DataLogger IoT. You may also have certain outputs disabled (like the connected [sensors](../configuration/#device-settings) or [timestamp](../example_timestamp)).

!!! note
    Having problems connecting new variables with the DataLogger IoT? When swapping out compatible Qwiic enabled devices, you may need to delete previous cloud variables so that the DataLogger IoT is able re-initialize them on the next power cycle.



### Create a Dashboard

With the data now available in the Arduino IoT Cloud as variables, it is a simple step create a dashboard that plots the data values.

The general steps to create a simple dashboard include:

* Select the ***Dashboards*** section of the Arduino IoT Cloud.
* Select the ***Build Dashboard*** button. If you have a dashboard already built, the location of the button will change and the button will be renamed: ***Create***.
* Click the edit button (i.e. the icon that looks like a paper and pencil, this is next to the eye).
* Add an element to the dashboard -- for this example select ***ADD ^*** > ***Advanced Chart***.
* On the Chart's Widget Settings select ***Link Variables*** to add readings.  
* The DataLogger IoT Variables are listed - select the variable to link.
* Continue this step until all the desired variables are linked to the chart. You can select up to 5x variables at a time. Click on the ***Link Variables*** button after selecting the variables.
* This will bring you back to the Chart's Widget Settings window. Configure any preferences that to display (i.e. variable colors, labels, etc.). When all variables are linked and the Chart Widget Settings is configured, select ***Done***.

<div style="text-align: center">
  <a href="../assets/aiot_dashboard_link.jpg"><img src="../assets/aiot_dashboard_link.jpg" width="600" height="600" alt="Linked Variables"></a>
</div>

The created dashboard then displays the values posted from the SparkFun DataLogger IoT. You can continue adding additional readings on the dashboard that you were not able to fit on graph or even rename the Dashboard view. In this case, we displayed accelerometer values and temperature in degrees Celsius from the DataLogger IoT - 9DoF.

<div style="text-align: center">
  <a href="../assets/aiot_dashboard.jpg"><img src="../assets/aiot_dashboard.jpg" width="600" height="600" alt="DataLogger IoT - 9DoF Dashboard"></a>
</div>

!!! note
    Not seeing any values on the **LIVE** view? Try clicking on the other time periods to see the values posted.

Using compatible Qwiic enabled devices, you can also display additional readings that are not available with the built-in sensors. In this case, we were able to display humidity, temperature in degrees Fahrenheit, equivalent CO<sub>2</sub>, TVOC, and AQI with the DataLogger IoT and Environmental Combo Brekaout (ENS160/BME280).

<div style="text-align: center">
  <a href="../assets/aiot_dashboard_qwiic_env.jpg"><img src="../assets/aiot_dashboard_qwiic_env.jpg" width="600" height="600" alt="DataLogger IoT with Qwiic Environmental Combo Breakout (ENS160/BME280) Dashboard"></a>
</div>
