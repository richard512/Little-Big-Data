# works on ubuntu 15.04
# installs php, mysql, mongo, and mongo php extension

sudo apt-get install mysql-server mongodb php5 php5-dev make php-pear
sudo pecl install mongo
sudo echo "extension=mongo.so" | sudo tee /etc/php5/cli/conf.d/mongo.ini

bash start.sh $1