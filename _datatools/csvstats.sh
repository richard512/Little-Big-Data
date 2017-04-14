#!/bin/bash

# example usage: ./csvstats.sh _ALL.csv | more

if [ -z "$1" ]; then
	echo "example usage: ./csvstats.sh _ALL.csv | more"
	exit
fi

csvfile=$1
colcount=$(head -1 $csvfile | sed 's/[^,]//g' | wc -c)
for i in $(seq 1 $colcount);
do
	colname=$(head -1 $1 | csvtool col $i -)
	echo $colname - Top 10 Values
	csvtool col $i - < $csvfile | sort | uniq -c | sort -nr | head -n 10
done
