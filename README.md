Minimal npm module containing JS and SASS.
JS module requirements concatenated via browserify;
SASS concatenated and transformed to CSS by specifying parcelify as a plugin to browserify.

Note: parcelify's magic lies in package.json: the `style` and `transforms` entries specify a glob to find the SASS files and a transform (`sass-css-stream`) to compile them into CSS.

#install
`npm install ericsoco-test1`

#build
`browserify index.js -o bundle.js -p [parcelify -o bundle.css -t sass-css-stream -d . ]`

#todo
put that build step into a gulpfile
