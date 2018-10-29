# API Client Methods

## Create objects

- Use `addObject()` to push 1 object to Algolia
- Use `addObjects()` to push an array of objects to Algolia

## Update record(s)

- **-> objectID required**
- **Requires all properties as to not lose on save**
- Use `saveObject()` to modify a pre-existing object
- Use `saveObjects()` to modify an array of objects

## Partially Update

- **-> objectID required**
- Use `partialUpdateObject()` to Update part of 1 object
- Use `partialUpdateObjects()` to Update parts of an array of objects

## Delete object

- **-> objectID required**
- Use `deleteObject()` to delete a single object
- Use `deleteObjects()` to delete an array of objects
