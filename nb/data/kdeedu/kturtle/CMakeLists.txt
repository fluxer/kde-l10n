install( FILES  logohighlightstyle.nb.xml DESTINATION ${DATA_INSTALL_DIR}/katepart/syntax )

FILE(GLOB datafiles *.logo)
install( FILES ${datafiles} DESTINATION ${DATA_INSTALL_DIR}/kturtle/examples/nb )
install( FILES  logokeywords.nb.xml DESTINATION ${DATA_INSTALL_DIR}/kturtle/data )
