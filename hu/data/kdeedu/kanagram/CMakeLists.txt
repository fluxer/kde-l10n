FILE(GLOB datafiles *.kvtml)
install( FILES ${datafiles} DESTINATION ${DATA_INSTALL_DIR}/kvtml/hu )

install( FILES  hu.txt  DESTINATION ${DATA_INSTALL_DIR}/kanagram )
