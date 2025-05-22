# filepath: /Users/julionmalek/Developer/choice-in-numbers/choice-in-numbers-backend/flask-backend/app/controllers/notification_controller.py
from flask import request, jsonify
from app.services.notification_service import NotificationService

class NotificationController:
    def get_notifications(self):
        notes = NotificationService.get_all()
        return jsonify(notes), 200

    def get_notification(self, notification_id):
        note = NotificationService.get_by_id(notification_id)
        return jsonify(note), 200

    def create_notification(self):
        data = request.json
        note = NotificationService.create(data)
        return jsonify({'message': 'Notification created', 'data': note}), 201

    def update_notification(self, notification_id):
        data = request.json
        updated = NotificationService.update(notification_id, data)
        return jsonify({'message': 'Notification updated', 'data': updated}), 200

    def delete_notification(self, notification_id):
        NotificationService.delete(notification_id)
        return '', 204