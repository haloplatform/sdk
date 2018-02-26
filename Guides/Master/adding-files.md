# Adding files to SDK

To update this SDK repo you should add files or documentation using the following patterns.

## Projects

Each project that hosts a guide or API information or any other sort of documentation within this repo should have a master documentation readme located under `/Projects/${project_name}.md` files. For example the `Glo` project file is located at `/Projects/Glo.md`.

This file should be referenced under the projects section of the root `README.md` of this repo.

## Guides

Guides are informational walkthroughs for specific items.

Guides are added under `/Guides/${project_name}` folders. If the project is this repository the folder is called `Master`.

As an example the `glo` guides are located under `/Guides/Glo` and this guide is located under `/Guides/Master`

## API's

API's describe application level interfaces and references.

API's should added under `APIs/${project_name}` folders. If the project is this repository the folder is called `Master`.

As an example the `glo` API's are located under `/APIS/Glo`.

## Future Folders

Currently there are only APIs, Guides, and Projects folders. If you add a new folder please add a section to this guide describing what those folders are and how to add project information to them.
