var fs = require('fs');
var json2csv = require('json2csv');

aadata = fs.readFileSync('aa-usa.json');
fields = ['city', 'state']

eval('aadata = '+aadata)

for (i in aadata) {
	isFirstLine = i==0 ? true : false;

	meeting = aadata[i]
	//console.log(meeting)
	json2csv({ data: meeting, hasCSVColumnTitle: isFirstLine }, function(err, csv) {
	  if (err) console.log(err);
	  console.log(csv);
	});
}

/*
json2csv({ data: aadata, fields: fields }, function(err, csv) {
  if (err) console.log(err);
  console.log('line')
  console.log(csv);
});
*/