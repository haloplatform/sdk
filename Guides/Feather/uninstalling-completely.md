# Uninstall Feather Completely

When uninstalling Feather you may leave some configuration information behind if you do not delete the userData folder located on your machine for Feather. You should first delete the Feather application using your systems method of removing it, and then delete the userData folder. This will perform a complete clean uninstall of Feather from your system.

### Operating systems:

 * [MacOS](#MacOS)
 * [Windows](#Windows)
 * [Linux](#Linux)


## MacOS

1. Delete the `feather-client` application in your application folder
2. Delete the folder `/Users/${username}/Library/Application Support/Featherlite`

(Optional command line usage)
```
rm -rf /Applications/feather-client.app
rm -rf "~/Library/Application Support/Featherlite"
```

## Windows

Use [default windows application manager](https://support.microsoft.com/en-us/help/4028054/windows-repair-or-remove-programs-in-windows-10) to uninstall Featherlite.
To completely remove cache you should delete `%appdata%\Featherlite` directory. To open `%appdata%` you can just press Windows + R, type in `%appdata%` and press enter.

## Linux

Use your distribution's package manager to unistall the package or just delete `AppImage` file if you're using it instead.
To completely remove cache you should delete `~/.config/Featherlite` directory.
