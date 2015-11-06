project(kde-i18n-eo)

if("${CMAKE_SOURCE_DIR}" STREQUAL "${CMAKE_CURRENT_SOURCE_DIR}")
    find_package(KDE4 4.18.0 REQUIRED)
    find_package(Gettext REQUIRED)

    include(KDE4Defaults)
    include(MacroOptionalAddSubdirectory)

    if(NOT GETTEXT_MSGMERGE_EXECUTABLE)
        message(FATAL_ERROR "Please install the msgmerge binary")
    elseif(NOT GETTEXT_MSGFMT_EXECUTABLE)
        message(FATAL_ERROR "Please install the msgfmt binary")
    endif()
endif()

set(CURRENT_LANG eo)

macro_optional_add_subdirectory( messages )
macro_optional_add_subdirectory( scripts )
