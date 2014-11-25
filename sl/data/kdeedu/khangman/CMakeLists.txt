FILE(GLOB datafiles *.kvtml)
install( FILES ${datafiles} DESTINATION  ${DATA_INSTALL_DIR}/kvtml/sl )
install( FILES  sl.txt  DESTINATION ${DATA_INSTALL_DIR}/khangman )
