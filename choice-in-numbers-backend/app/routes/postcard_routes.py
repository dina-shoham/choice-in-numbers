from flask import Blueprint
from app.controllers.postcard_controller import PostcardController

bp = Blueprint('postcards', __name__, url_prefix='/postcards')
ctrl = PostcardController()

bp.route('/', methods=['GET'])(ctrl.get_postcards)
bp.route('/<int:postcard_id>', methods=['GET'])(ctrl.get_postcard)
bp.route('/', methods=['POST'])(ctrl.create_postcard)
bp.route('/<int:postcard_id>', methods=['PUT'])(ctrl.update_postcard)
bp.route('/<int:postcard_id>', methods=['DELETE'])(ctrl.delete_postcard)