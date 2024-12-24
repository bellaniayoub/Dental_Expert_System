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
symptomes = {"general":["g0015","g0001","g0013","g0017","g0018",], "tooth":["g0001","g0002","g0004","g0005","g0006","g0008","g0009","g0010","g0012","g0014","g0019","g0020","g0023","g0024" ], "gum":["g0001","g0003","g0004","g0007","g0009","g0010","g0016","g0008","g0021","g0022","g0025","g0026","g0027","g0028"]}
prolog.consult("Expert_System.pl")
@app.route('/api/submit', methods=['POST'])
def submit_data():
    data = request.json
    section = data.get('category')
    questions = data.get('indices', [])
    print(questions)
    checked_questions = [symptomes[section][i] for i in questions]
    print(checked_questions)
    prolog_list = str(checked_questions).replace("'", "")
    query=f"diagnose_user('{section}', {checked_questions}, Result)"
    results = list(prolog.query(query))  
    # Format results for JSON response
    print(results)
    # Log received data
    print(f"Received section: {section}")
    print(f"Received questions: {questions}")
    
    # Example response
    response = {
        "message": "Data received successfully",
        "received_section": section,
        "received_indices": questions,
        "prediction": results
    }
    return jsonify(response), 200

if __name__ == '__main__':
    app.run(debug=True)
