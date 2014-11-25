FILE(GLOB datafiles *.kvtml)
install( FILES  ${datafiles} DESTINATION ${DATA_INSTALL_DIR}/kvtml/cs )
install( FILES  cs.txt  DESTINATION ${DATA_INSTALL_DIR}/khangman )
