install( FILES  logohighlightstyle.nl.xml DESTINATION ${DATA_INSTALL_DIR}/katepart/syntax )
FILE(GLOB datafiles *.logo)
install( FILES ${datafiles} DESTINATION ${DATA_INSTALL_DIR}/kturtle/examples/nl )
install( FILES  logokeywords.nl.xml DESTINATION ${DATA_INSTALL_DIR}/kturtle/data )
