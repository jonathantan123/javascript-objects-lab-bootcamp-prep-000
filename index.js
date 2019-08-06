var recipes = []

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { 
  object[key] = value
  return object 
}


function deleteFromObjectByKey(object, key) {
  var newObject= Object.assign( {}, Object)
  delete newObject[key]
  return Object
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({}, object, {[key] :value})
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object }
  
  