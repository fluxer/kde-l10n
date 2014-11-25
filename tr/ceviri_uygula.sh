

echo "Find PO files, process each with msgfmt and rename the result to MO"

for file in `find messages -name "*.po"` ; do msgfmt -o `echo $file | sed 's/\.po$/.mo/'` $file ; done

echo "Şimdi dönüştürülen tüm MO dosyalarını uygulama dizinine aktar"

sudo find . -iname '*.mo' -exec mv '{}' /usr/share/locale/tr/LC_MESSAGES/ \;