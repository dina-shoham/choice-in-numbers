# filepath: /Users/julionmalek/Developer/choice-in-numbers/choice-in-numbers-backend/flask-backend/app/controllers/testimonial_controller.py
from flask import request, jsonify
from app.services.testimonial_service import TestimonialService

class TestimonialController:
    def get_testimonials(self):
        items = TestimonialService.get_all()
        return jsonify(items), 200

    def get_testimonial(self, testimonial_id):
        item = TestimonialService.get_by_id(testimonial_id)
        return jsonify(item), 200

    def create_testimonial(self):
        data = request.json
        item = TestimonialService.create(data)
        return jsonify({'message': 'Testimonial created', 'data': item}), 201

    def update_testimonial(self, testimonial_id):
        data = request.json
        updated = TestimonialService.update(testimonial_id, data)
        return jsonify({'message': 'Testimonial updated', 'data': updated}), 200

    def delete_testimonial(self, testimonial_id):
        TestimonialService.delete(testimonial_id)
        return '', 204