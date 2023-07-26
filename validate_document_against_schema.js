
import json from './Irish_UGZ_13062023.fixed.json' assert {type: "json"};
import schema from './schema.json' assert {type:"json"};

import Ajv from "ajv";
import {inspect} from "util";

const ajv = new Ajv({allErrors:true});
const validate = ajv.compile(schema);
const isValid = validate(json);

if(isValid)
{
    console.log("Passes validation");
}
else
{
    console.warn(validate.errors);
}


// parseAndLog(inputJSON);
//
// function parseAndLog(json)
// {
//     const data = parse(json);
//     if(data === undefined)
//     {
//         console.log(parse.message);
//         console.log(parse.position);
//     }
//     else
//     {
//         console.log(data);
//     }
// }