file(GLOB_RECURSE _po_files *.po)

kde4_translate(${CURRENT_LANG} ${_po_files})

install(
    FILES
    entry.desktop
    flag.png
    charset
    DESTINATION ${KDE4_LOCALE_INSTALL_DIR}/${CURRENT_LANG}
)
