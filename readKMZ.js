import parseKMZ from 'parse2-kmz';
import fs from 'fs';

const filePath ='./UAS Geographical Zones.kmz';

parseKMZ
    .toJson(filePath)
    .then((data)=>{
        fs.writeFileSync('./Irish UGZ.geo.json', JSON.stringify(data));
    })
    .catch(console.error);