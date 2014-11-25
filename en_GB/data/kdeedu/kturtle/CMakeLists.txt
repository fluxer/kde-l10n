install( FILES  logohighlightstyle.en_GB.xml DESTINATION ${DATA_INSTALL_DIR}/katepart/syntax )
FILE(GLOB datafiles *.logo)
install( FILES  ${datafiles} DESTINATION ${DATA_INSTALL_DIR}/kturtle/examples/en_GB )
install( FILES  logokeywords.en_GB.xml DESTINATION ${DATA_INSTALL_DIR}/kturtle/data )
