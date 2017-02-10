# cool-data
a random collection of interesting data

<h3>a few commands you might want:</h3>
  cat top-1-million-websites.tsv | cut -f2 -d$'\t' | sort | uniq -c | sort -n
  
  mysql -u USERNAME DBNAME < FILENAME.sql
  
  mongoimport --db DBNAME --collection COLNAME --type json --jsonArray --file FILENAME.json
  
  mysqlimport --columns='head -n 1 FILENAME.csv' --ignore-lines=1 -uUSERNAME -p TABLENAME FILENAME.csv


## Maps
  USA Housing Prices: batchgeo.com/map/735612ed6e3358eff9889878fa99c91c
  World Taxi Prices: batchgeo.com/map/ee59b6b9b63a038dce5d67761e88b529
