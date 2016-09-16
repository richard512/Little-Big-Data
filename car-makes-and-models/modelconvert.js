var fs = require('fs');
//prevtime = new Date()
var obj = JSON.parse(fs.readFileSync('liste-voitures-modeles.json', 'utf8'));
//console.log(new Date() - prevtime)

function JsonToFile(csvfile, jsondata) {
	if (typeof fs == 'undefined') fs = require('fs');
	if (typeof json2csv == 'undefined') json2csv = require('json2csv');
    csvlines = []
	csvexists = fs.existsSync(csvfile)
	filedata = JSON.stringify(jsondata)
	if (csvexists) {
		//console.log('appending')
		fs.appendFileSync(csvfile, '\n'+filedata)
	} else {
		//console.log('writing')
		fs.writeFileSync(csvfile, filedata)
	}
}

function csvOrError(filename, jsondata) {
    if (jsondata && Object.keys(jsondata).length>0) {
	    JsonToCSVfile(filename+'.csv', jsondata)
    } else {
    	//console.log(chalk.yellow(citydata.city+' '+citydata.state+' has no '+filename+' info'))
    }
}

function JsonToCSVfile(csvfile, jsondata) {
	if (jsondata) {
		if (typeof fs == 'undefined') fs = require('fs');
		if (typeof json2csv == 'undefined') json2csv = require('json2csv');
	    csvlines = []
		csvexists = fs.existsSync(csvfile)
		json2csv({ data: jsondata, hasCSVColumnTitle: !csvexists }, function(err, csvline) {
			if (err) console.log(err);
			//console.log(csvline);
			if (csvline) {
				if (csvexists) {
					//console.log('appending')
					fs.appendFileSync(csvfile, '\n'+csvline)
				} else {
					//console.log('writing')
					fs.writeFileSync(csvfile, csvline)
				}
			} else {
				console.log('no csvline in '+csvfile)
			}
		});
	} else {
		console.log('fuck. no jsondata')
	}
}

for (i in obj) {
	maker = obj[i]
	//if (maker.label!='HONDA') continue
	//console.log(maker.label)
	for (j in maker.models) {
		model = maker.models[j]
		//console.log("  "+model.label)
		for (k in model.types) {
			typeinfo = model.types[k]
			typearr = typeinfo.match(/(.*) \(([0-9\/]+) => ([0-9\/]+)\)/)
			if (typearr && typearr.length==4) {
				//console.log("    "+typearr)
				out = {}
				out.make = maker.label
				out.model = model.label
				out.type = typearr[1]
				out.prodstart = typearr[2]
				out.prodstop = typearr[3]
				console.log(out)
				csvOrError('models', out)
			} else {
				out = {}
				out.make = maker.label
				out.model = model.label
				out.type = ''
				out.prodstart = ''
				out.prodstop = ''
				console.log(out)
				csvOrError('models', out)
			}
		}
	}
}