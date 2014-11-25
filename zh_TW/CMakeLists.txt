project(kde-i18n-zh_TW)

# Search KDE installation
find_package(KDE4 REQUIRED)
find_package(Gettext REQUIRED)
include (KDE4Defaults)
include(MacroOptionalAddSubdirectory)

if (NOT GETTEXT_MSGMERGE_EXECUTABLE)
   MESSAGE(FATAL_ERROR "Please install the msgmerge binary")
endif (NOT GETTEXT_MSGMERGE_EXECUTABLE)

IF(NOT GETTEXT_MSGFMT_EXECUTABLE)
   MESSAGE(FATAL_ERROR "Please install the msgfmt binary")
endif (NOT GETTEXT_MSGFMT_EXECUTABLE)

set(CURRENT_LANG zh_TW)

macro_optional_add_subdirectory( messages )
