include( ../../srDataMacros.cmake )

install_data_sr( FILES easy.kvtml.in medium.kvtml.in hard.kvtml.in animals.kvtml.in
                 DESTINATION ${DATA_INSTALL_DIR}/kvtml/LL )

# Only exists for Latin.
install( FILES sr\\@latin.txt
         DESTINATION ${DATA_INSTALL_DIR}/khangman )
