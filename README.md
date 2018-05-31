catalog-static
==================

**Theme description:** A WVU branded template for Catalog.wvu.edu made with vanilla HTML. This template could be easily adapted to apply WVU's brand to other applications. 

**Developers name(s):** Adam Johnson

**Github repository URL:** [https://github.com/wvuweb/catalog-static](https://github.com/wvuweb/catalog-static)

**Site URL:** Production: [https://catalog.wvu.edu](https://catalog.wvu.edu)

**Dependencies:** [NodeJS](https://nodejs.org/en/), [Gulp](http://gulpjs.org), all of it's dependencies and Node packages.

## How to run Gulp

1. Navigate to your project via Terminal (maybe: `cd ~/Sites/catalog-static`?)
1. Type `gulp` and hit enter.
1. Visit `http://localhost:3000` in your browser.

## How to get set up:

¡Hola! If you're new here, follow these steps:

1. Install Node at [http://nodejs.org/](http://nodejs.org/).
1. Install Ruby (if you're on a Mac, you can skip this step): [https://www.ruby-lang.org/en/downloads/](https://www.ruby-lang.org/en/downloads/).
1. Install Gulp via [the directions on their website](https://gulpjs.com/).
1. In your terminal, navigate to wherever you cloned this repo (maybe `cd ~/Sites/catalog-static/`?)
1. Install the dependencies for the project:
    * `npm install`
1. Make sure there are no errors in your terminal (they usually appear in red). If there are, search the web for an answer or try prefixing some commands with `sudo`.
1. After everything is installed, follow the instructions above on "How to run Gulp".


### Lint your code

This repo comes with both an EditorConfig file and SCSS Lint file. Before making any modifications, consider installing [EditorConfig](https://editorconfig.org/#download) and [scss-lint](https://github.com/brigade/scss-lint/#installation).

### Getting Started with Gulp

Travis Maynard wrote [a great article](http://www.travismaynard.com/writing/getting-started-with-gulp) about how to get started with Gulp. I've already done the heavy lifting with Gulp by creating the `gulpfile.js`, but that article brings it back to the basics to help you get started.

If the dependencies in this project are old and you want to update your packages, follow [these instructions](http://stackoverflow.com/a/16074029/4032506).

## About Catalog.wvu.edu

WVU's course catalog is run and hosted by a third-party vendor called [CourseLeaf](https://www.courseleaf.com/). The [WVU Registrar](https://registrar.wvu.edu) is in charge of the content while CourseLeaf handles the technical implementation (hosting, templating, support, etc).

## About this template

This is a flat HTML template which uses styles from WVU's pattern library, [Supertheme](https://supertheme.sandbox.wvu.edu). Supertheme was built for [CleanSlate CMS](https://cleanslatecms.wvu.edu), WVU's mutli-site content management system. This template has abstracted the HTML from CleanSlate Radius Templates to flat, vanilla HTML. You could easily use this template to wrap any app or service with WVU branding. There's a psuedo "style-guide" in the tabs of this HTML file. You can also see more options on the [Supertheme website](https://supertheme.sandbox.wvu.edu).

This theme uses [Sass](http://sass-lang.com/) and Gulp to compile the CSS. I have specifically commented out various partials in `scss/1-base/base-dir.scss` and `scss/2-modules/modules-dir.scss` because Catalog didn't use those patterns (performance!). If you want to use some of the commented out patterns (maybe you need two, three or four column stuff), follow the install instructions, run `gulp` and uncomment the requisite Sass partials.

## Have questions?

If you have questions or need help, please [contact Adam Johnson](https://universityrelations.wvu.edu/digital-services#staff) or any WVU University Relations team member. Don't be afraid to open an issue if it's related to this project.

## License

The code is available under the MIT license.
