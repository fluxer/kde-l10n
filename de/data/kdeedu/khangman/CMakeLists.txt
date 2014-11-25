FILE(GLOB datafiles *.kvtml)
install( FILES ${datafiles} DESTINATION ${DATA_INSTALL_DIR}/kvtml/de )
install( FILES  de.txt  DESTINATION ${DATA_INSTALL_DIR}/khangman )
