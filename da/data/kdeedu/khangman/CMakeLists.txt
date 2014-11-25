FILE(GLOB datafiles *.kvtml)
install( FILES ${datafiles} DESTINATION ${DATA_INSTALL_DIR}/kvtml/da )
install( FILES  da.txt  DESTINATION ${DATA_INSTALL_DIR}/khangman )

