Using the CRUD server:

Endpoints:
## /users

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

DELETE: Deletes a user with a given user ID.
Requests look like 
{
    "user_id": "1"
}

### /user

PATCH: Allows users to change their information.
Requests look like {
    user_id: number,
    user_firstName?: string
    user_lastName?: string
    user_email?: string
    user_password?: string
    user_twitter?:string
    user_facebook?:string
    user_instagram?:string
}

POST: Gets a user with a specific username.  Requests look like
{
    "user_userName": "userName"
}

PUT: Changes the user's role in the system.  Requests look like
{
    //To be determined.
} 

## /articles


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

PATCH:

For changing the publication status of an article.  Requests should look like

{
    art_id: 1
}

### /article

GET: Gets an article by it's ID number.

POST: Creates a new article.  Requests look like 
{
    user_userName: article.user_userName,
    art_id: article.art_id,
    art_price: article.art_price,
    artype_id: article.artype_id,
    art_title: article.art_title,
    description: article.description,
    user_author: article.user_author,
    art_body: article.art_body,
    art_image: article.art_image,
    art_category: article.art_category,
    series_id: article.series_id
}
Throws: 400 Bad Request error.  All of the information is needed for a successful article creation.

PUT: Edits an existing article.  Requests can contain any of 
{
    user_userName: article.user_userName,
    art_id: article.art_id,
    art_price: article.art_price,
    artype_id: article.artype_id,
    art_title: article.art_title,
    description: article.description,
    user_author: article.user_author,
    art_body: article.art_body,
    art_image: article.art_image,
    art_category: article.art_category,
    series_id: article.series_id
}
Unlike POST, this can contain any or all of the above, depending on what the user decides they need to change.

## /organizations

PATCH: Changes a user's role within an organization, promoting or demoting them as a creator decides.  Requests look like 
{
    ord_id:number
    user_id:number
    user_role:number        
}

POST: Creates a new organization Requests look like:
{
    org_creator: user,
    org_title: orgName,
    org_price: orgPrice,
    org_desc: orgDesc,
    user_id: user
}

### /organizations

GET: Gets all the organizations.

DELETE: Put the orgId number in the params.  Will delete the organization with the appropriate ID number.

PATCH: Adds or removes users from organizations.  Requests look like 
{
    ord_id:number,
    user_id:number,
    user_role:number,
    addUser:boolean
}
Set addUser to true to add a user to an organization.  Set it to false to remove a user.

POST: Gets all the users in a specific organization.  Requests look like 
{
    ord_id: number
}

PUT: Bans or unbans an organization. Requests look like
{
    ord_id: number,
    org_status: number
}
Set org_status to 1 for unbanned and 0 for banned.

## /paymentInfo

POST: Gets the payment info for a user.  Requests look like 
{
    user_id: number,
}
Throws: 400 Bad Request.  You need to send a user ID.

### /payments 

POST: Creates new payment info for a user.  Requests look like:
{
    user_id: number;
    cardholder_firstame: string;
    cardholder_lastname: string;
    card_no: number;
    card_expiry: string;
    card_cvv: number;
}
Throws 400 Bad Request when required information is missing.

PATCH: Changes a user's payment information.  Requests look like:
{
            user_id: number
            first_name: string,
            last_name: string,
            cardNo: number,
            expiry_date: string,
            cvv: number
}
User ID is manditory, everything else is optional, as only some parts of the information may need to be changed.

## /purchaseArticle

GET: Gets all the articles a user owns.  Put the user_id in the params.
Throws: 404 Not Found - Article does not exist.

POST: Adds an article to the list of articles a user owns.  Requests look like
{
    art_id: number,
    user_id: number
}
Throws: 400 Bad Request.

## /rating

GET: Gets all the ratings for all the articles.

POST: Creates a new rating for an article.  Requests look like 
{
        rating_title: string,
        rating_value: number,
        rating_review: string,
        user_user_id: number,
        article_art_id: number,
}
Throws: 400 Bad Request.

## /series

GET: Gets all the series in the database.

POST: Creates a new series.  Requests look like 
{
        series_id: number,
        series_owner: number,
        series_title: string,
        series_desc: string,
        series_price: number,
        series_category: string
} 
Throws: 400 Bad Request.

## /tokens

POST: Takes a username and password, and returns a JWT token to identify the logged in user.  Requests look like
{
    user_userName: string,
    user_password: string
}