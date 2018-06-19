_Task 1_ - Your first task today is to copy the library files from your previous api project including:

1.  _check-required-fields.js_ - check required fields within the incoming request body.
2.  _clean-obj.js_ - cleans incoming request body.
3.  _create-missing-field-msg.js_ - Creates a response message by stating

> "You're missing the following fields in your request body: " and concatenates a list of missing keys.

> _REMEMBER TO COMMIT AND PUSH REGULARLY_ REMEMBER TO CREATE A NEW BRANCH FOR EACH TASK.

_Task 2_ - Next, within your `POST /instruments` express route middleware, check for required fields. If required fields are missing, send a `400` response status code and a message stating which required fields are missing. Use your previous cats api project for guidance, if necessary.

_Task 3_ - Within your `POST /instruments` express route middleware, clean the incoming object removing any unnecessary fields from the request body before sending to the database.

https://pouchdb.com/api.html#create_document

_Task 4_ - Create a `DELETE /instruments/:id` route. Be sure to return the appropriate response status code if the instrument is not in the database or has already been deleted.

https://pouchdb.com/api.html#delete_document

_Task 5_ - Create a `PUT /instruments/:id` route. Check for the existence of _all_ required request body keys/props including the `_id`, `_rev`, and `type` props. Clean any unnecessary keys/props from the incoming request body.

https://pouchdb.com/api.html#create_document

_Task 6_ - You choose the domain, such as automobiles, dogs, beers, running shoes, or video games. Create your own database. Fill the database up with documents. Create a new nodejs/express app. Create the following endpoints:

- Create a thing
- Read a thing
- Update a thing
- Delete a thing (edited)

tripott [9:05 AM]
https://github.com/tripott/my-cat-api/tree/master/lib
GitHub
tripott/my-cat-api
my-cat-api - a little cat api, meow.
