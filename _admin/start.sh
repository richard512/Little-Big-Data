txtred='\e[0;31m' # Red
txtrst='\e[0m'    # Text Reset

if [ $(dpkg -s php | grep is not installed) ]; then
	echo -e $txtred'for mongo: enable mongo.so php extension'$txtrst
fi

if [ ! $(php -m | grep ^monsgo$) ]; then
	echo -e $txtred'for mongo: enable mongo.so php extension'$txtrst
fi

if [ $1 ]; then
	port=$1
else
	port=80
fi

php -S localhost:$port
