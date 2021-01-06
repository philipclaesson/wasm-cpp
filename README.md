## Web Assembly C/C++ with CMAKE minimal example

This is a minimal example of a Web Assembly C++ project built with emscripten CMAKE and served with node.js. This example was put together by Philip Claesson, and is partly based on [this gist](https://gist.github.com/WesThorburn/00c47b267a0e8c8431e06b14997778e4). 

1. Install
- Get the Emscripten SDK, using these [instructions](https://emscripten.org/docs/getting_started/downloads.html)) or just `brew install emscripten` if you're on mac.
- Install node.js and npm
- `npm install`

2. Compile
```
bash build.sh
```
A successful build will generate two build artefacts in /public: `app.wasm.js` and `app.wasm.wasm`.

A bunch of build files will also be generated in the build directory.


3. Serve
```
npm run dev
```
This will serve the compiled code on localhost:3000. Using inspector, you should see a "Hello World" message from c++ in the console, confirming that the c++ code is being executed. Furhtermore, pressing the button should call the c++ function `myFunction`.


4. Develop
- index.js is the entry point for node.js
- main.html is your main html file.
- see example on how to call c++ functions in bindings.js
- c++ code belong in src/

