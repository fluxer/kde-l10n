FILE(GLOB datafiles *.kvtml)
install( FILES ${datafiles} DESTINATION  ${DATA_INSTALL_DIR}/kvtml/pt_BR )

install( FILES  pt_BR.txt  DESTINATION ${DATA_INSTALL_DIR}/khangman )
