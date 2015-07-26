add_subdirectory(applications)
add_subdirectory(kdelibs)
add_subdirectory(kde-extraapps)
install(FILES entry.desktop DESTINATION ${LOCALE_INSTALL_DIR}/${CURRENT_LANG}/ )
