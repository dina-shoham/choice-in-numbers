from flask import Blueprint
from app.controllers.notification_controller import NotificationController

bp = Blueprint('notifications', __name__, url_prefix='/notifications')
ctrl = NotificationController()

bp.route('/', methods=['GET'])(ctrl.get_notifications)
bp.route('/<int:notification_id>', methods=['GET'])(ctrl.get_notification)
bp.route('/', methods=['POST'])(ctrl.create_notification)
bp.route('/<int:notification_id>', methods=['PUT'])(ctrl.update_notification)
bp.route('/<int:notification_id>', methods=['DELETE'])(ctrl.delete_notification)