FILE(GLOB datafiles *.kvtml)
install( FILES ${datafiles} DESTINATION  ${DATA_INSTALL_DIR}/kvtml/pt )

install( FILES  pt.txt  DESTINATION ${DATA_INSTALL_DIR}/khangman )
