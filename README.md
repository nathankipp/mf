# mf
*file templates for the lazy coder*

### Installation & Use
1. Download this repo into, you know, wherever you want
2. (optional) Create an ALIAS for the command `node ./mf.js`

Let's assume our ALIAS is `mf`...

To run the script:
`$ mf [new_file] [template_file]`
 - `new_file` should be a complete path
 - `template_file` refers to a folder in the ./templates directory

### Example & Expected Output
running `$ mf ./components/New/New.js rc`
will create three (3) files:
1. `./components/New/index.js` (an export of ./New.js for easy pathing)
2. `./components/New/New.js` (the react component template)
3. `./components/New/New.test.js` (a test file for the component)

### Adding Templates
Really, this is the bread-and-butter of this repo.
1. Add a directory and set of files into the `./templates` directory
2. Run the `mf` against your new directory name
3. Bask in the glory of your laziness