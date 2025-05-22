from flask import request, jsonify
from app.services.postcard_service import PostcardService

class PostcardController:
    def get_postcards(self):
        postcards = PostcardService.get_all()
        return jsonify(postcards), 200

    def get_postcard(self, postcard_id):
        postcard = PostcardService.get_by_id(postcard_id)
        return jsonify(postcard), 200

    def create_postcard(self):
        data = request.json
        postcard = PostcardService.create(data)
        return jsonify({'message': 'Postcard created', 'data': postcard}), 201

    def update_postcard(self, postcard_id):
        data = request.json
        updated = PostcardService.update(postcard_id, data)
        return jsonify({'message': 'Postcard updated', 'data': updated}), 200

    def delete_postcard(self, postcard_id):
        PostcardService.delete(postcard_id)
        return '', 204