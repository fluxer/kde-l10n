FILE(GLOB datafiles *.kvtml)
install( FILES ${datafiles} DESTINATION  ${DATA_INSTALL_DIR}/kvtml/nn)
install( FILES  nn.txt  DESTINATION ${DATA_INSTALL_DIR}/khangman )
