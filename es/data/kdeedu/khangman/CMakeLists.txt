FILE(GLOB datafiles *.kvtml)
install( FILES ${datafiles} DESTINATION ${DATA_INSTALL_DIR}/kvtml/es )
install( FILES  es.txt  DESTINATION ${DATA_INSTALL_DIR}/khangman )

