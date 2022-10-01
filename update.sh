#!/bin/bash

sed 'kde4_optional_add_subdirectory' -i CMakeLists.txt
for i in *;do
    if [ -d "$i" ];then
        echo "kde4_optional_add_subdirectory( $i )" >> CMakeLists.txt
    fi
done
