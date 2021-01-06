## Web Assembly C/C++ minimal example

This is a minimal example of a Web Assembly C++ project build with emscriptem CMAKE and served with node.js.

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
Serve the compiled code on localhost:3000
```
npm run dev
```

4. Develop
- index.js is the entry point for node.js
- main.html is your main html file.
- see example on how to call c++ functions in bindings.js
- c++ code belong in src/

