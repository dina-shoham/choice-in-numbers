from flask import Blueprint
from app.controllers.payment_controller import PaymentController

bp = Blueprint('payments', __name__, url_prefix='/payments')
ctrl = PaymentController()

bp.route('/', methods=['GET'])(ctrl.get_payments)
bp.route('/<int:payment_id>', methods=['GET'])(ctrl.get_payment)
bp.route('/', methods=['POST'])(ctrl.create_payment)
bp.route('/<int:payment_id>', methods=['PUT'])(ctrl.update_payment)
bp.route('/<int:payment_id>', methods=['DELETE'])(ctrl.delete_payment)