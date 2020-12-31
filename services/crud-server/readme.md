Using the CRUD server:

## User

GET: Sending to /users gets all the users.
POST: Send to /users to create a new user.
Requests look like
{
    "user_userName": "Doug",
    "user_firstName": "Doug",
    "user_lastName": "Waffle",
    "user_password": "hunter2",
    "user_email": "dwaffle13154@alumni.focuscollege.com"
}

## Article


GET: Sending this to /articles gets all the articles.
Sending to /articles/# gets the article with that number.
Article responses look like
{
    {
        "article_id": 2,
        "art_creationDate": "2020-12-12T11:50:47.000Z",
        "art_price": 4.5,
        "user_author": 2,
        "artype_id": 1,
        "art_body": "ipsum  dolor Lorem sit amet."
    }
}

POST:

Requests should look like 

{
    "price": 3,
    "author": 1,
    "type": 1,
    "body": "This is a test article.  This is only a test."
}

Price: the price of the article.  Set to 0 for free articles.
Author: The user # of the author in the databse.
Type: The type of the article.  Currently only 1 for News exists in the database.
Body: The text of the article.