import cv2
import face_recognition
import os

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
                return f"Face recognized as {name}"

    return "Face not recognized"

def main():
    known_faces = get_known_faces()

    video_capture = cv2.VideoCapture(1)  # Use 0 for default webcam

    while True:
        # Capture frame-by-frame
        ret, frame = video_capture.read()

        result = recognize_faces(frame, known_faces)
        print(result)

        # Display the resulting frame
        cv2.imshow('Video', frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):  # Press 'q' to exit
            break

    # Release the webcam and close all windows
    video_capture.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
