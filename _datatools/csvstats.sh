#!/bin/bash

csvtool col 5 - < _ALL.csv | sort | uniq -c | sort -nr | more
