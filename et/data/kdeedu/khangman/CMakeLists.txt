FILE(GLOB datafiles *.kvtml)
install( FILES  ${datafiles} DESTINATION ${DATA_INSTALL_DIR}/kvtml/et )
install( FILES  et.txt  DESTINATION ${DATA_INSTALL_DIR}/khangman )
