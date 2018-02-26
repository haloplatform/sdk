# Uninstall Feather Completely

When uninstalling Feather you may leave some configuration information behind if you do not delete the userData folder located on your machine for Feather. You should first delete the Feather application using your systems method of removing it, and then delete the userData folder. This will perform a complete clean uninstall of Feather from your system.

## MacOS

1. Delete the `feather-client` application in your application folder
2. Delete the folder `/Users/${username}/Library/Application Support/brave/featherlite`

(Optional command line usage)
```
rm -rf "~/Library/Application Support/brave/featherlite"
```
