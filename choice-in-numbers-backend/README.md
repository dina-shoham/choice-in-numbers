# Flask Backend Project

This is a Flask backend project that provides a structured way to manage various resources such as users, postcards, testimonials, payments, and notifications. The project is organized into several components, including controllers, routes, services, and models.

## Project Structure

```
choice-in-numbers-backend/
├── app/
│   ├── __init__.py
│   ├── config.py
│   ├── models/
│   │   ├── __init__.py
│   │   └── (your models here, e.g., user.py, postcard.py, testimonial.py)
│   ├── controllers/
│   │   ├── __init__.py
│   │   ├── postcard_controller.py
│   │   ├── user_controller.py
│   │   ├── testimonial_controller.py
│   │   ├── payment_controller.py
│   │   └── notification_controller.py
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── postcard_routes.py
│   │   ├── user_routes.py
│   │   ├── testimonial_routes.py
│   │   ├── payment_routes.py
│   │   └── notification_routes.py
│   ├── services/
│   │   ├── __init__.py
│   │   ├── postcard_pdf_service.py
│   │   ├── email_service.py
│   │   ├── sms_service.py
│   │   └── payment_service.py
│   └── utils/
│       ├── __init__.py
│       └── (any utility/helper files)
├── migrations/
│   └── (if using Flask-Migrate for DB migrations)
├── tests/
│   └── (unit and integration tests)
├── requirements.txt
├── run.py
└── README.md

```

## Features

- **User Management**: Create, read, update, and delete user profiles.
- **Postcard Management**: Handle postcard creation, updates, and deletions.
- **Testimonial Management**: Manage testimonials from users.
- **Payment Processing**: Handle payment transactions and statuses.
- **Notification System**: Send notifications to users.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd flask-backend
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```
     source venv/bin/activate
     ```

4. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

## Running the Application

To run the Flask application, execute the following command:

```
python run.py
```

The application will start on `http://127.0.0.1:5000/`.

## Testing

Unit and integration tests are located in the `tests/` directory. You can run the tests using:

```
pytest
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.