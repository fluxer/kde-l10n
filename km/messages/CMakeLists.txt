file(GLOB_RECURSE _po_files *.po)

GETTEXT_PROCESS_PO_FILES(
    ${CURRENT_LANG}
    ALL
    INSTALL_DESTINATION ${KDE4_LOCALE_INSTALL_DIR}
    PO_FILES ${_po_files}
)
install(
    FILES
    entry.desktop
    flag.png
    DESTINATION ${KDE4_LOCALE_INSTALL_DIR}/${CURRENT_LANG}
)
