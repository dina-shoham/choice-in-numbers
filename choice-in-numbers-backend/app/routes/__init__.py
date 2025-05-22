from flask import Blueprint

# Initialize the routes blueprint
routes_bp = Blueprint('routes', __name__)

# Import routes to register them with the blueprint
#from .example_routes import *  # Import all routes from example_routes.py