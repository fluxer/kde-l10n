#!/bin/bash

sed 'add_subdirectory' -i CMakeLists.txt
for i in *;do
    if [ -d "$i" ];then
        echo "add_subdirectory( $i )" >> CMakeLists.txt
    fi
done
