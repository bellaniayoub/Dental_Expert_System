# from flask import Flask, request, jsonify


# app = Flask(__name__)

# # Initialize Prolog instance
# prolog = Prolog()

# # Consult the Prolog file


# @app.route("/query", methods=["GET"])
# def query_prolog():
#     try:
#         # Get the query from request arguments
#         query = request.args.get("query")
        
#         if not query:
#             return jsonify({"error": "Query parameter is required!"}), 400

#         # Run the Prolog query
#         results = list(prolog.query(query))

#         # Return results as JSON
#         return jsonify(results)
    
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# if __name__ == "__main__":
#     app.run(debug=True)
from flask import Flask, request, jsonify
from flask_cors import CORS
from pyswip import Prolog
app = Flask(__name__)
CORS(app)
prolog = Prolog()

prolog.consult("Expert_System.pl")
@app.route('/api/submit', methods=['POST'])
def submit_data():
    data = request.json
    section = data.get('category')
    questions = data.get('indices', [])
    
    # Log received data
    print(f"Received section: {section}")
    print(f"Received questions: {questions}")
    
    # Example response
    response = {
        "message": "Data received successfully",
        "received_section": section,
        "received_indices": questions,
        "prediction": "Helllo"
    }
    return jsonify(response), 200

if __name__ == '__main__':
    app.run(debug=True)
