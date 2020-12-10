# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

| endpoint               | method  | Description                                                   |
| -----------------------| --------| --------------------------------------------------------------|
| `/products`            | `GET`   | Retrieve list of all products                                 |
| `/products/:id`        | `GET`   | Retrieve a specific product's info                            |
| `/products`            | `POST`  | Create new product & add to list of existing products         |
| `/products/:id`        | `PUT`   | Update/edit a specific product entirely (new object)          |
| `/products/:id`        | `PATCH` | Update/edit part of a specific product                        |
| `/products/:id`        | `DELETE`| Delete a specific product                                     |                      
| `/clients`             | `GET`   | Retrieve list of all clients                                  |
| `/clients/:id`         | `GET`   | Retrieve a specific client's profile                          |
| `/clients`             | `POST`  | Create new client profile & add to list of existing clients   |
| `/clients/:id`         | `PUT`   | Update/edit a specific client's profile entirely              |
| `/clients/:id`         | `PATCH` | Update/edit part of a specific client's profile               |
| `/clients/:id`         | `DELETE`| Delete a specific client profile                              |
| `/reservations`        | `GET`   | Retrieve list of reservations                                 |
| `/reservations/:id`    | `GET`   | Retrieve info about a specific reservation                    |
| `/reservations`        | `POST`  | Create/add a new reservation                                  |
| `/reservations/:id`    | `PUT`   | Update/edit a reservation entirely                            |
| `/reservations/:id`    | `PATCH` | Update/edit part of a reservation                             |
| `/reservations/:id`    | `DELETE`| Delete a reservation                                          |


