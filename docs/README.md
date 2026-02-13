# Notes for using Docusaurus for SparkFun Documentation

## Configuration File

The site setup is done in the configuration file ```docusaurus.config.ts``` located in  the root of the install directory. Everything is set in a very large/long JSON object.

The overall spec/details for this are [here](https://docusaurus.io/docs/configuration)

And it's helpful to look at the setup used for the above site. This is contained [here](https://github.com/facebook/docusaurus/tree/main/website)


### Key Elements

#### Setting up the site URL

* Use the `url` - which is the root domain of the site
* Use `baseUrl` to specify a sub path to the sites url. For example the github pages repo name.
* `organizationName:` - the GitHub org name
* `projectName:` - the repo name

#### The Navigation Bar

This is setup in the 'navbar` section of the config object.

This would include:

* Top level menu items
* External Links
* Link to github repo

#### Footer

This section contains 'columns' that can contain links ...etc

## The Documentation Side Bar

The (left) "sidebar" is defined in the file `sidebars.ts`, which is located in the root of the documentation folder.

This contains a JSON object, that includes an array that defines the side bar elements.

Note, the array field name is used as the 'sidebarId' if you place it in the navbar.

## Custom CSS

This is placed in the file: `src/css/custom.css`

It appears you can do a lot here.

One tool that is helpful is setting colors for links ...etc is located [here](https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima). You can enter a color, and associated  colors that work with for the framework are provided. And in a format you can just copy into the custom css field.
