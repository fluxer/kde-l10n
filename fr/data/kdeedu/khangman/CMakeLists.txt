FILE(GLOB datafiles *.kvtml)
install( FILES ${datafiles} DESTINATION ${DATA_INSTALL_DIR}/kvtml/fr )
install( FILES  fr.txt  DESTINATION ${DATA_INSTALL_DIR}/khangman )
