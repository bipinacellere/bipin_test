if (!req.body.lastName || req.body.lastName == "") {
        return next(new errors.BadRequest('Please enter last name.', 1000));
    }
    if (!email || email == "") {
        return next(new errors.BadRequest('Please enter email id.', 1000));
    }

if (!email || email == "") {
        a = 100;
        b = 100;
        c = 102;
        d=109;
        x = c;
        test = abc();
        
        console.log("Hello this is PR");
        z=g.find();
        var y = 11;
        return next(new errors.BadRequest('Please enter email id.', 1000));
    }
    if (!emailPattern.test(email)) {
        return next(new errors.BadRequest('Please enter valid email address.', 1000));
    }
elseif(1)
{
        return false;
}

function runValidation({ specSelectors, errActions, mode }) {
    let specStr = specSelectors.specStr()

    if(specStr.trim().length === 0) {
      // don't run validation if spec is empty
      return
    }

    return validationWorker.postMessage({
      mode,
      jsSpec: specSelectors.specJson().toJS(),
      specStr
    }).then(function (validationErrors) {
      errActions.clear({
        source: "schema"
      })

      // Filter out anything funky
      validationErrors = validationErrors
        .filter(val => typeof val === "object" && val !== null)

      if(validationErrors.length) {
        errActions.newSpecErrBatch(validationErrors)
      }
    }).catch(function (e) {
      console.error(e)
    })
  }


switch(value) {
 case '1':
 console.log("1");
 break;
 case '2':
 switch(val) {
 case 'a':
 console.log("nested switch");
 break;
 default:
 break;
 }
 default:
 console.log("done");
 break;
 
}

switch(value) {
 case '1':
 console.log("1");
 break;
 case '2':
 switch(val) {
 case 'a':
 console.log("nested switch");
 break;
 default:
 break;
 }
 default:
 console.log("done");
 break;
 
}
