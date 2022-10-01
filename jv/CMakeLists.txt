project(kde-i18n-jv)

if("${CMAKE_SOURCE_DIR}" STREQUAL "${CMAKE_CURRENT_SOURCE_DIR}")
    find_package(KDE4 4.21.0 REQUIRED)
    find_package(Gettext REQUIRED)

    include(KDE4Defaults)

    if(NOT GETTEXT_MSGMERGE_EXECUTABLE)
        message(FATAL_ERROR "Please install the msgmerge binary")
    elseif(NOT GETTEXT_MSGFMT_EXECUTABLE)
        message(FATAL_ERROR "Please install the msgfmt binary")
    endif()
endif()

set(CURRENT_LANG jv)

add_subdirectory( messages )
