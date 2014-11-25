FILE(GLOB datafiles *.kvtml)
install( FILES ${datafiles} DESTINATION ${DATA_INSTALL_DIR}/kvtml/ga )
install( FILES  ga.txt  DESTINATION ${DATA_INSTALL_DIR}/khangman )
