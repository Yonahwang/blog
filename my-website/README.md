# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Scaffold project website
The easiest way to install Docusaurus is to use the command line tool that helps you scaffold a skeleton Docusaurus website. You can run this command anywhere in a new empty repository or within an existing repository, it will create a new directory containing the scaffolded files.
```
npx @docusaurus/init@next init [name] [template]
```
Example:

```
npx @docusaurus/init@next init my-website classic
```



# Running the development server
```
cd my-website
npm run start
```

## Build
Docusaurus is a modern static website generator so we need to build the website into a directory of static contents and put it on a web server so that it can be viewed. To build the website:
```
npm run build
```


## Installation for yarn

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
