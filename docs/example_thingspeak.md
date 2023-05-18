# Creating and Connecting to ThingSpeak

One of the key features of the DataLogger IoT is it's simplified access to IoT service providers. This document outlines how a ThinkSpeak output is used by the DataLogger IoT.


<div style="text-align: center">
  <a href="https://thingspeak.com/"><img src="../assets/ThingSpeak_logo.png" width="300" length="300" alt="ThingSpeak Logo"></a>
  <br />
  <i>Image Courtesy of <a href="https://thingspeak.com/">ThingSpeak</a></i>
</div>



The following is covered by this document:

* Creating a ThingSpeak Channel and MQTT Connection
* Securely connecting the ThingSpeak
* How data is posted from the DataLogger IoT to ThingSpeak

## General Operation

### ThingSpeak Structure

The structure of ThingSpeak is based off of the concept of ***Channels***, with each channel supporting up to eight fields for data specific to the data source. Each channel is named, and has a unique ID associated with it.  One what to think of it is that a Channel is a grouping of associated data values or fields.

The fields of a channel are enumerated as ***Field1, Field2, ..., Field8***, but each field can be named to simplify data access and understanding.

As data is reported to a ThingSpeak channel, the field values are accessible for further processing or visualization output.




### Data Structure

The DataLogger IoT is constructed around the concept of ***Devices*** which are often a type of sensor that can output a set of data values per observation or sample.




### Mapping Data to ThingSpeak

The concept of Channels that contain Fields in ThingSpeak is similar to the Devices that contain Data within the DataLogger IoT, and this similarity is the mapping model used by the DataLogger IoT. Specifically:

* **Devices == Channels**
* **Data == Fields**

<div style="text-align: center">
  <a href="../assets/iot_ts_mapping.png"><img src="../assets/iot_ts_mapping.png" alt="DataLogger to ThingSpeak Mapping"></a>
</div>



During configuration of the DataLogger IoT, the mapping between the Device and ThingSpeak channel is specified. The data to field mapping is automatically created by the DataLogger IoT following the data reporting order from the specific device driver.



## Creating a Device to a ThingSpeak Channel

The following discussion outlines the basic steps taken to create a Channel in ThingSpeak and then connect it to the DataLogger's Device. First step is to log into your [ThingSpeak](https://thingspeak.com/) and create a Channel.

<div style="text-align: center"><a href="https://thingspeak.com/" target="thingspeak" class="md-button">Click Here to Log into ThingSpeak</a></div>

Once logged into your ThingSpeak account, select ***Channels > My Channels*** menu item and on the **My Channel** page, select the **New Channel** button.

<div style="text-align: center">
  <a href="../assets/iot_ts_channel.png"><img src="../assets/iot_ts_channel.png" alt="New Channel"></a>
</div>

On the presented channel page, name the channel and fill in the specific channel fields. The fields should map to the data fields reported from the Device being linked to this channel. Order is important, and is determined by looking at output of a device to the serial device (or reviewing the device driver code).

<div style="text-align: center">
  <a href="../assets/iot_ts_new_channel.png"><img src="../assets/iot_ts_new_channel.png" alt="New Channel"></a>
</div>

Once the values are entered, select save. ThingSpeak will now show list of **Channel Stats**, made up of line plots for each field specified for the channel.


!!! note
    Key note - at the top of this page is listed the **Channel ID**. Note this number - it is used to map a Device to a ThingSpeak Channel.



### Setting Up ThingSpeak MQTT

The DataLogger IoT uses MQTT to post data to a channel. From the ThingSpeak menu, select ***Devices > MQTT***, which displays a list of your MQTT devices. From this page, select the **Add a new device** button.

On the presented dialog, enter a name for the MQTT connection and in the **Authorize channels to access**, select the channel created earlier. Once you select a channel, click the **Add Channel** button.

!!! note
    More channels can be added later.

<div style="text-align: center">
  <a href="../assets/iot_ts_mqtt.png"><img src="../assets/iot_ts_mqtt.png" alt="MQTT on ThingSpeak"></a>
</div>

!!! note
    When the MQTT device is created, a set of credentials (Client ID, Username and Password) is provided. **Copy or download** these values, since the password in not accessible after this step.

The selected Channel is then listed in the **Authorized Channel** table. Ensure that the Allow Publish and Allow Subscribe attributes are enabled for the added channel.

<div style="text-align: center">
  <a href="../assets/iot_ts_mqtt_channel_auth.png"><img src="../assets/iot_ts_mqtt_channel_auth.png" alt="MQTT Channel Authorization on ThingSpeak"></a>
</div>

At this point, the ThingSpeak Channel is setup for access by the DataLogger IoT.



## ThingSpeak Configuration

Once the device is integrated into the application, the specifics for the ThingSpeak Channel(s) must be configured. This includes the following:

* Server Name/Hostname
* Client Name
* User Name
* Password
* Device to Channel mapping
* CA Certificate Chain

### Server Name/Hostname

This value is hostname of the ThingSpeak mqtt connection, which is **mqtt3.thingspeak.com** as note at [ThingSpeakMQTT Basics](https://www.mathworks.com/help/thingspeak/mqtt-basics.html) page. Note a secure connection is used, so the port for the connection is `8883`.




### Client Name/ID

The Client Name/ID is found under MQTT connection details listed in the ***Devices > MQTT*** section of ThingSpeak.




### Username

The Username is found under MQTT connection details listed in the ***Devices > MQTT*** section of ThingSpeak.




### Password

The connection password was provided when the MQTT device was created. If you lost this value, you can regenerate a password in the for the connection on the MQTT Device information page.




### Certificate File

You can download the cert file for ThingSpeak.com page using a web-browser. Click on the security details of this page, and navigate the dialog (browser dependent) to download the certificate. The downloaded file is the made available for the DataLogger IoT to use as a file that is loaded at runtime)




## Setting Properties

The above property values must be set on the DataLogger IoT before use. They can be set via a JSON file that is loaded by the system at startup. For the ThingSpeak example outlined in this document, the entries in the settings JSON file are as follows:

```json
"ThingSpeak MQTT": {
    "Enabled": false,
    "Port": 8883,
    "Server": "mqtt3.thingspeak.com",
    "MQTT Topic": "",
    "Client Name": "MQTT Device Client ID",
    "Buffer Size": 0,
    "Username": "MQTT Device Username",
    "Password": "MQTT Device Password",
    "CA Cert Filename": "ThingspeakCA.cer",
    "Channels" : "BME280=<channel id>"
  }
```

!!! note
    The **Channels** value is a list of **[DEVICE NAME]=[Channel ID]** pairs. Each pair is separated by a comma.




## Monitoring Output

Once the connector is configured and the DataLogger IoT is connected to ThingSpeak, as data is posted, the results are show on the Channel Stats page for your Channel. For the above example, the output of a SparkFun BME280 sensor produces the following output:

<div style="text-align: center">
  <a href="../assets/iot_ts_channel_data.png"><img src="../assets/iot_ts_channel_data.png" alt="ThingSpeak Stats"></a>
</div>
