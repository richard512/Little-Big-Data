#!/bin/bash

awk 'FNR==1 && NR!=1{next;}{print}' *.csv > _ALL.csv
