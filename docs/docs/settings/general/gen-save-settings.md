---
sidebar_position: 3
---

# Save Settings

Used to save, restore and manage the system settings.

In the Save Settings Menu, users will be able to save, restore, or clear any preferences in memory (i.e. persistent storage) or a saved file to a fallback device (i.e. microSD card). Note that any passwords and secret keys are not saved in the save settings file. You will need to manually enter those values in the file saved on the microSD card.

When this item is selected, the following menu is presented.

![save settings menu](/img/sfe-datalogger-set-save-settings.png)
<figure>
<figcaption>Save Settings Menu</figcaption>
</figure>

## Settings

The available settings:

### Fallback Restore

When this settings is enabled, if a normal setting restore operation fails on startup, a back source (JSON file) is used.

This is often used to restore backup settings when you reset the datalogger.

### Fallback Save

When enabled, when settings are saved to on-board storage, they are also saved to a JSON file located on the systems SD card.

### JSON File Buffer Size

The internal buffer used to I/O of the setting values.

## Functions

The following functions/actions are available in this menu:

### Save Settings

When called, the current settings are save to persistent, on-device storage.

### Restore Settings

Setting value are restored from on-device persistent storage.

### Clear Settings

Erases settings stored on the device.

This action does not reset the current *live* settings of the system. Do do this, restart the system immediatly after calling this action.

### Save to Fallback

Save the current setting values to the fallback setting system - a JSON file on the SD card.

### Restore from Fallback

When called, and a settings JSON file is available on the SD card, the settings on the SD card are restored and applied to the system.

## Editing the Fallback JSON File

If you have the Fallback Save enabled or selected the option **Save to Fallback**, you will notice an additional file called **datalogger.json** saved in the microSD card. This is the fallback file that is saved. Using a text editor, you can edit this file to adjust the settings or provide WiFi credentials, certificates, and keys. These values can then easily be *restore* for use by the system.
