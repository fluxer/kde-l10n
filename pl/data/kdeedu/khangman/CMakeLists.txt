FILE(GLOB datafiles *.kvtml)
install( FILES ${datafiles} DESTINATION  ${DATA_INSTALL_DIR}/kvtml/pl)
install( FILES  pl.txt  DESTINATION ${DATA_INSTALL_DIR}/khangman )
