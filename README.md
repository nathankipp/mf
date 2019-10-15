# mf
*file templates for the lazy coder*  
*- or -*  
*a quick start for [The Pragmatic Programmer](https://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X) (write code that writes code)*

### Installation:
1. Download this repo into, you know, wherever you want
2. (optional) Create an ALIAS for the command `node ./mf.js`

Let's assume our ALIAS is `mf`...

### Use: `$ mf [new_file] [template_file]`  
- `new_file` should be a complete path  
- `template_file` refers to a folder in the ./templates directory  

#### For example, running `$ mf ./components/New/New.js rc` creates three (3) files:
1. `./components/New/index.js` (an export of ./New.js for easy pathing)
2. `./components/New/New.js` (the react component template)
3. `./components/New/New.test.js` (a test file for the component)


### Adding Templates (Really, this is the bread-and-butter...)
1. Add a directory and set of files into the `./templates` directory
2. (if necessary) Add replacments to the `./tempaltes/replacements.js` file
3. Run the `mf` against your new directory name
4. Bask in the glory of your laziness
