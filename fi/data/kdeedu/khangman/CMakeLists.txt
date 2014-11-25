FILE(GLOB datafiles *.kvtml)
install( FILES ${datafiles} DESTINATION  ${DATA_INSTALL_DIR}/kvtml/fi )

install( FILES  fi.txt  DESTINATION ${DATA_INSTALL_DIR}/khangman )
