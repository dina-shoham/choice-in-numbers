from flask import Blueprint
from app.controllers.user_controller import UserController

bp = Blueprint('users', __name__, url_prefix='/users')
ctrl = UserController()

bp.route('/', methods=['GET'])(ctrl.get_users)
bp.route('/<int:user_id>', methods=['GET'])(ctrl.get_user)
bp.route('/', methods=['POST'])(ctrl.create_user)
bp.route('/<int:user_id>', methods=['PUT'])(ctrl.update_user)
bp.route('/<int:user_id>', methods=['DELETE'])(ctrl.delete_user)