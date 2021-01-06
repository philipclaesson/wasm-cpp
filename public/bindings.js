function myFunction (Module) {
    let result = Module.ccall(
        'myFunction', // name of C function 
        null, // return type
        null, // argument types
        null  // arguments
    )
}