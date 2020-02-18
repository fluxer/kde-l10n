# Compile and install all pmap files.
find_package(PythonInterp)
if(PYTHONINTERP_FOUND)
    set(_cmpscript ${CMAKE_CURRENT_SOURCE_DIR}/ts-pmap-compile.py)
    file(GLOB_RECURSE _subtsfiles RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} *.pmap)
    foreach(_subtsfile ${_subtsfiles})
        get_filename_component(_subtspath ${_subtsfile} PATH)
        file(MAKE_DIRECTORY ${CMAKE_CURRENT_BINARY_DIR}/${_subtspath})
        set(_tsfile ${CMAKE_CURRENT_SOURCE_DIR}/${_subtsfile})
        set(_tscfile ${CMAKE_CURRENT_BINARY_DIR}/${_subtsfile}c)
        add_custom_command(OUTPUT ${_tscfile}
                           COMMAND ${PYTHON_EXECUTABLE} -B ${_cmpscript}
                                   ${_tsfile} ${_tscfile}
                           DEPENDS ${_tsfile})
        string(REPLACE "/" ";" _subpathlst ${_subtsfile})
        list(GET _subpathlst 1 _tsmodule)
        install(FILES ${_tscfile}
		DESTINATION ${KDE4_LOCALE_INSTALL_DIR}/${CURRENT_LANG}/LC_SCRIPTS/${_tsmodule})
        set(_tscfiles ${_tscfiles} ${_tscfile})
        string(REPLACE "/" "-" _target ${_subtsfile})
        add_custom_target("pmapc-${CURRENT_LANG}_${_target}" ALL DEPENDS ${_tscfiles})
    endforeach()
endif()
