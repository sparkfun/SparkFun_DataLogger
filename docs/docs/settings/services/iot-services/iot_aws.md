
# AWS

## Creating and Connecting to an AWS IoT Device (Thing)

One of the key features of the DataLogger IoT is it's simplified access to IoT service providers. This document outlines how an AWS IoT device is used by the DataLogger IoT.

The following is covered by this document:

* Device (Thing) creation in AWS
* Securely connecting the device
* How data is posted from the DataLogger IoT to the AWS Device via it's Shadow

Currently, the AWS IoT device connection is a single direction - used to post data from the hardware to the IoT AWS Device via the AWS IoT devices **shadow**. Configuration information from AWS IoT to the DataLogger IoT is currently not implemented.

## General Operation

AWS IoT enables connectivity between an IoT / Edge device and the AWS Cloud Platform, implementing secure endpoints and device models within the AWs infrastructure. This infrastructure allows edge devices to post updates, status and state to the AWS infrastructure for analytics, monitoring and reporting.

In AWS IoT, an virtual representation of an actual device is created and referred to as a *Thing*. The virtual device/Thing is allocated a connection endpoint, security certificates and a device **shadow** - a JSON document used to persist, communicate and manage device state within AWS.

The actual IoT device communicates with it's AWS representation via a secure MQTT connection, posting JSON document payloads to a set of pre-defined topics. Updates are posted to the AWS IoT device **shadow**, which is then accessed within AWS for further process as defined by the users particular cloud implementation.

![AWS Overview](/img/iot_aws_overview.png)

## Creating a Device in AWS IoT

The following discussion outlines the basic steps taken to create a Thing in AWS IoT that the DataLogger IoT can connect to. First step is to [log into](https://aws.amazon.com/iot-core/) your AWS account and create a thing.

Once logged into your AWS account, select **IoT Core** from the menu of services.
![AWS IoT Core](/img/iot_aws_iot_core.png)

From the IoT Core console page, under the **Manage** section, select **All Devices > Things**  

On the resultant Things Page, select the **Create Things** button.

![Aws Iot Thing Create](/img/iot_aws_thing_create.png)

AWS IoT will then take you through the steps to create a device. Selections made for a demo Thing are:

* Create single thing
* Thing Properties
  * Enter a name for your thing - for this example ***TestThing23***
  * Device Shadow - select ***Unnamed shadow (classic)***
* Auto-generate a new certificate
* Attach policies to certificate - This is discussed later in this document
* Select **Create thing**

Upon creation, AWS IoT presents you with a list of downloadable certificates and keys. Some of these are only available at this step. The best option is to download everything presented - three of these are used by the DataLogger IoT. The following should be downloaded:

* Device Certificate
* Public Key File
* Private Key File
* Root CA certificates - (for example:  Amazon Root CA 1 )

At this point, the new AWS IoT thing is created and listed on the AWS IoT Things Console

![New Thing Listed](/img/iot_aws_thing_list.png)

### Security Policy

To write to the IoT device, a security policy that enables this is needed, and the policy needs to be assigned to the devices certificate.

To create a Policy, select the ***Manage > Security > Policies*** menu item from the left side menu of the AWS IoT panel. Once on this page, select the **Create policy** button to create a new policy.

![New Policy](/img/iot_aws_thing_policy.png)

When entering the policy, provide a name that fits your need. For this example, the name **NewThing23Policy** is used. For the Policy document, you can manually enter the security entires, or enter them as a JSON document. The JSON document used for this example is:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "iot:Connect",
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": "iot:Subscribe",
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": "iot:Receive",
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": "iot:Publish",
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": "iot:GetThingShadow",
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": "iot:UpdateThingShadow",
      "Resource": "*"
    }
  ]
}
```

![Create Policy](/img/iot_aws_thing_create_policy.png)

Once the policy is created, go back to the IoT Device/Thing created above and associate this policy to the device Certificate.

* Go to your device ***Manage > All devices > Things***
* Select the device - ***TestThing23*** for this example
* Select the ***Certificates*** tab
* Select the listed Certificate (it's a very long hex number)
* At the bottom right of the page, select the ***Attach policies*** button and select the Policy created above.

![Attach Policy](/img/iot_aws_iot_attach_policy.png)

At this point, AWS IoT is ready for a device to connect and receive data.

## AWS Configuration

The specifics for the AWS IoT Thing must be configured. This includes the following:

* Server name/host
* MQTT topic to update
* Client Name - The AWS IoT Thing Name
* CA Certificate Chain
* Client Certificate
* Client Key

### Server Name/Hostname

This value is obtained from the AWS IoT Device page for the created device. When on this page, select the ***Device Shadows*** tab, and then select the ***Classic Shadow*** shadow, which is listed. Note a secure connection is used, so the port for the connection is `8883`.

![Shadow Details](/img/iot_aws_iot_dev_attr.png)

Selecting the ***Classic Shadow*** entry provides the Server Name/Hostname for the device, as well as the MQTT topic for this device.

![Shadow Details](/img/iot_aws_iot_shadow_details.png)

:::note

The server name is obtained from the Device Shadow URL entry

:::

### MQTT Topic

The MQTT topic value is based uses the ***MQTT topic prefix*** from above, and has the value ***update*** added to it. So for this example, the MQTT topic is:

```mqtt
    $aws/things/TestThing23/shadow/update
```

### Client Name

This is the AWS IoT name of the thing. For the provided example, the value is ***TestThing23***

### CA Certificate Chain

This value was downloaded as a file during the creation process. The contents of this file can be passed on to the DataLogger IoT by copying the file containing the data onto a devices SD Card and setting the filename property for the DataLogger IoT.

### Client Certificate

This value was downloaded as a file during the creation process. The contents of this file can be passed on to the DataLogger IoT by copying the file containing the data onto a devices SD Card and setting the filename property for the DataLogger IoT.

### Client Key

This value was downloaded as a file during the creation process. The contents of this file can be passed on to the DataLogger IoT by copying the file containing the data onto a devices SD Card and setting the filename property for the DataLogger IoT.

## Setting Properties

The above property values must be set on the DataLogger before use. They can be set manually by using the menu system like the previous MQTT example.

For users that are interested in using the menu system, you will need to open a Serial Terminal, connect to the COM port that your DataLogger enumerated to, and set it to **115200** baud. In this case, we connected to **COM13**. Press any key to enter the Main Menu. Enter the Settings menu, the IoT Services page and then the AWS IoT Menu. When the menu system for the AWS IoT connection is presented, you will need to configure the property values as listed in the JSON file. Saving the values through the menu system will save the credentials to the ESP32's persistent memory. The following options are displayed:

![Aws Iot Menu](/img/sparkfun_datalogger_iot_aws_menu.jpg)

The alternative to using the menu system is a JSON file. These values can be set using a JSON file that is loaded by the system at startup. For the DataLogger IoT example outlined in this document, the entries in the settings JSON file are as follows:

```json
"AWS IoT": {
    "Enabled": true,
    "Port": 8883,
    "Server": "avgpd2wdr5s6u-ats.iot.us-east-1.amazonaws.com",
    "MQTT Topic": "$aws/things/TestThing23/shadow/update",
    "Client Name": "TestThing23",
    "Buffer Size": 0,
    "Username": "",
    "Password": "",
    "CA Certificate": "",
    "Client Certificate": "",
    "Client Key": "",
    "CA Cert Filename": "AmazonRootCA1.pem",
    "Client Cert Filename": "TestThing23_DevCert.crt",
    "Client Key Filename": "TestThing23_Private.key"
  },
```

Besides updating the `Server`, `MQTT Topic`, `Client Name`, `CA Cert Filename`, `Client Cert Filename`, and `Client Key Filename`, you will need to also ensure that the `port` is set to `8883`. The default in previous firmware versions was `1883`. As of firmware v01.00.04, the default is `8883`. You will need to adjust the port value to properly connect to the [AWS IoT service](https://aws.amazon.com/about-aws/whats-new/2018/02/aws-iot-core-now-supports-mqtt-connections-with-certificate-based-client-authentication-on-port-443/). Don't forget to enable AWS IoT service by setting the value to `true`. If the JSON file is saved in the microSD card, you can load the credentials to the DataLogger IoT.

To load the values by the system at startup using a JSON file and microSD card, you will need to [configure the Save Settings](settings/general/gen-save-settings.md). This JSON file will be created with the "**Save to Fallback**" option. Make sure to enable the AWS IoT as well.

## Operation

Once the device is configured and running, updates in AWS IoT are listed in the ***Activity*** tab of the devices page. For the test device in this document, this page looks like:

![Shadow Activity](/img/iot_aws_iot_shadow_updates.png)

Opening up an update, you can see the data being set to AWS IoT in a JSON format.

![Shadow Data](/img/iot_aws_iot_shadow_data.png)
