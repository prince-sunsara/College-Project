import cv2
import face_recognition
import os
import time
import requests

def get_known_faces():
    known_faces = {}
    uploads_directory = os.path.join(os.path.dirname(__file__), 'uploads/')

    for filename in os.listdir(uploads_directory):
        image_path = os.path.join(uploads_directory, filename)
        image = face_recognition.load_image_file(image_path)
        encoding = face_recognition.face_encodings(image)

        if encoding:
            known_faces[filename] = encoding[0]

    return known_faces

def recognize_faces(frame, known_faces):
    live_encoding = face_recognition.face_encodings(frame)

    if live_encoding:
        live_encoding = live_encoding[0]

        for name, known_encoding in known_faces.items():
            result = face_recognition.compare_faces([known_encoding], live_encoding)
            if result[0]:
                return name

    return None

def main():
    known_faces = get_known_faces()
    recognized_names = []
    start_time = time.time()
    attendance_recorded = False

    video_capture = cv2.VideoCapture(0)  # Use 0 for default webcam

    while True:
        # Capture frame-by-frame
        ret, frame = video_capture.read()

        name = recognize_faces(frame, known_faces)
        print(name)
        
        if name:
            if name not in recognized_names:
                recognized_names.append(name)
                start_time = time.time()
                print(f"face recognized as {name}")
        
        # Check if 2 minutes have passed since the last recognition
        elapsed_time = time.time() - start_time
        if elapsed_time >= 120 and not attendance_recorded:
            # Send a request to your Node.js API to record attendance
            payload = {'students': recognized_names}
            try:
                response = requests.post("http://localhost:5000/images/recordAttendance", json=payload)
                response.raise_for_status()  # Raise an HTTPError for bad responses
                print(f"Attendance recorded: {response.text}")
                attendance_recorded = True
            except requests.RequestException as e:
                print(f"Error recording attendance: {e}")

        # Display the resulting frame
        cv2.imshow('Video', frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):  # Press 'q' to exit
            break

    # Release the webcam and close all windows
    video_capture.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
