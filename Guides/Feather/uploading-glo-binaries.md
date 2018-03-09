# Uploading Glo Binaries to S3


To update the glo binaries you will be required to build and package 3 binaries and update and upload the 3 binaries and a data.json file.

# Build Binaries

Refer to [Build Glo From Source](../Glo/compile-glo-from-source.md) for instructions on this.

# Package Binaries

Name your binaries correctly for each operating system and verison

```
glo-x.x.x-(win/mac/linux)-(x64/x32)
```

then tar.gz each binary via:

```
tar -czvf glo-x.x.x-(win/mac/linux)-(x64/x32).tar.gz glo-x.x.x-(win/mac/linux)-(x64/x32).exe
```

# Update Data.json

Correct the file names and version of the glo binaries for latest version to what you just created.

# Upload

1. Commit new data.json to feather repo to keep history.
2. Upload binaries to the `binaries` bucket in S3
3. Replace data.json in the `binaries` bucket in S3 with the new data.json file

# Check feather

Feather should auto update the local binary when it finds a new version online.
