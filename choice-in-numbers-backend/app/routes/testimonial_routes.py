from flask import Blueprint
from app.controllers.testimonial_controller import TestimonialController

bp = Blueprint('testimonials', __name__, url_prefix='/testimonials')
ctrl = TestimonialController()

bp.route('/', methods=['GET'])(ctrl.get_testimonials)
bp.route('/<int:testimonial_id>', methods=['GET'])(ctrl.get_testimonial)
bp.route('/', methods=['POST'])(ctrl.create_testimonial)
bp.route('/<int:testimonial_id>', methods=['PUT'])(ctrl.update_testimonial)
bp.route('/<int:testimonial_id>', methods=['DELETE'])(ctrl.delete_testimonial)