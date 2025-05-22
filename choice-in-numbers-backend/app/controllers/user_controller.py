# filepath: /Users/julionmalek/Developer/choice-in-numbers/choice-in-numbers-backend/flask-backend/app/controllers/user_controller.py
from flask import request, jsonify
from app.services.user_service import UserService

class UserController:
    def get_users(self):
        users = UserService.get_all()
        return jsonify(users), 200

    def get_user(self, user_id):
        user = UserService.get_by_id(user_id)
        return jsonify(user), 200

    def create_user(self):
        data = request.json
        user = UserService.create(data)
        return jsonify({'message': 'User created', 'data': user}), 201

    def update_user(self, user_id):
        data = request.json
        updated = UserService.update(user_id, data)
        return jsonify({'message': 'User updated', 'data': updated}), 200

    def delete_user(self, user_id):
        UserService.delete(user_id)
        return '', 204