FILE(GLOB datafiles *.kvtml)
install( FILES ${datafiles} DESTINATION ${DATA_INSTALL_DIR}/kvtml/nb )

install( FILES  nb.txt  DESTINATION ${DATA_INSTALL_DIR}/khangman )
