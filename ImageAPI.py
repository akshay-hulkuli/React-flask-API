from flask import Flask, request, jsonify, abort
from flask_cors import CORS, cross_origin
import os
import base64

# Initialize Flask application
app = Flask(__name__)
CORS(app, support_credentials=True)

# API that returns images list
@app.route('/Images', methods=['POST'])
# to avoid CORS policy blocks
@cross_origin(supports_credentials=True)
def get_images():
    # list to store multiple images 
    result = []
    # Accessing the image-files sent by the react website
    images = request.files.getlist("images")
    print(images)
    image_names = []
    for image in images:
        image_name = image.filename
        image.save(os.path.join(os.getcwd(), image_name))
        # opening the image
        image_raw = open(image_name, 'rb').read()
        # Use the image. ex - for object detection
        # ..
        # ..
        # Once the resultent image is obtained encode it to base64 string so that it can be jsonified
        my_string = base64.encodebytes(image_raw).decode('ascii')
        result.append({
            "image":my_string,
        })

    #remove temporary images
    for name in image_names:
        os.remove(name)
    try:
        return jsonify({"result":result}), 200

    except FileNotFoundError:
        abort(404)


if __name__ == '__main__':
    app.run(debug=True, host = '0.0.0.0', port=5000)
