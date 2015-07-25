#!/bin/bash

for i in *;do
    if [ -d "$i" ];then
        echo "macro_optional_add_subdirectory( $i )" >> CMakeLists.txt
    fi
done
