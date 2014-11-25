FILE(GLOB datafiles *.kvtml)
install( FILES ${datafiles} DESTINATION ${DATA_INSTALL_DIR}/kvtml/ca/)
install(FILES ca.txt DESTINATION ${DATA_INSTALL_DIR}/khangman/)

