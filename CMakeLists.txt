project (client)
cmake_minimum_required(VERSION 3.5.1)

add_definitions(-std=c++11 -O3)

file(GLOB SOURCES src/*.cpp)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/public")
add_executable(app ${SOURCES})

set(CMAKE_EXECUTABLE_SUFFIX ".wasm.js")
set_target_properties(app PROPERTIES LINK_FLAGS "-s WASM=1 -s EXPORTED_FUNCTIONS='[_main]'")
set_target_properties(app PROPERTIES LINK_FLAGS "-s EXTRA_EXPORTED_RUNTIME_METHODS=['ccall']")
