# Welcome to Robot Coding!

## Q: How do I Setup an instance locally?

In order to run the application we need to install the following:

- Node.js(https://nodejs.org/en/download/)
- Sass(https://sass-lang.com/install)

And after installing the requirements.

run `npm install` inside the directory

## Q: How do I start the application?

### You can start the application by using this command:

- yarn start(if you already installed yarn on your machine)
- npm run start

## Q: How to run a test?

- npm run test

## STANDARDS

- [MaintainableCSS](https://maintainablecss.com/)

- [Reasonable System for CSS Stylesheet Structure.](https://rscss.io/)

- [RULES OF REACT HOOKS](https://reactjs.org/docs/hooks-rules.html)

- [CRUV](http://jamesknelson.com/cruv-react-project-structure/)

## Folder Structure

```
  -src
    -appRoot
      -routes
        -public.routes
        -private.routes
    -assets
      -css
      -images
      -sounds
      -icons
    -components
      -globallyReusableComponent
    -constant
    -containers
      -components
    -utils
    index.tsx
```

**appRoot** - a location where your parent App is located and the routes.

`-routes` where you will place the routes of your components which has public routes and private routes for authentication

**assets** - more concerned on css, images, media(video, sounds, images etc.) a subset of resources.

**components** - more concerned on globally reusable components.

**constant** - storage of statics functions or values.

**containers** - storage of your page features

`-containerName - a container in which being imported in routes to be used in the app.`

`-components - a subset of components that are being used for a specific container.`

**_utils_** - This is the place to put files that get copied and pasted between many different projects. Things like vanilla JavaScript functions and classes, higher-order components, and other utilities.

# What is Naming Conventions?

Naming conventions are general rules applied when creating text scripts for software programming. They have many different purposes, such as adding clarity and uniformity to scripts, readability for third-party applications, and functionality in certain languages and applications. They range from capitalization and punctuation to adding symbols and identifiers to signify certain functions.

---

# Types of Naming Conventions

### 1. Kebab Case

is a type of naming style where a word is separated by a hypen(-) and in a lower case.

### 2. Camel Case

is the practice of writing compound words or phrases such that each word or abbreviation in the middle of the phrase
begins with a capital letter, with no intervening spaces or punctuation.

### 3. Snake Case

is the practice of writing compound words or phrases in which the elements are separated with one underscore character
(\_) and no spaces, with each element's initial letter usually lowercased within the compound and the first letter
either upper- or lowercase—as in "foo_bar" and "Hello_world".

## Examples:

| Types      |             Good Practice              |        Bad Practice |
| ---------- | :------------------------------------: | ------------------: |
| Kebab Case |          button-delete-action          | button-deleteAction |
| Camel Case | handleRemoveClass or HandleRemoveClass |  handleRemove-Class |
| Snake Case |          handle_remove_class           | handle_Remove-Class |

Never mix two types of naming style in naming any variables, classnames, ids, components, folder, and files. It will
create confusion in other developers.

# Naming Standards

In order for naming to be more understandable we recommend it to be more descriptive and to prevent confusion with other developers we created a standard for naming.

### For Variables:

- it is in **camel case**.

#### `const fooVariable = 'foo';`

### For ClassNames and Ids:

- it is in **kebab case**.

#### `className = "delete-button"`

#### `Id = "test-save-button"`

### except for ids that is being use for robot. ex. id="robot-btn-trBuilder"

### For Folders and Files in component and containers:

- it is the same for variables but the **camel case in every words is capitalize** except the index files (index.js, index.scss, index.jsx, etc.).

#### `Folder: AuctionCard, Files: AuctionCard.jsx`
