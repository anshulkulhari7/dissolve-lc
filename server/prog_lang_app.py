# app.py
import sys
sys.path.append('..')
from flask import Flask, render_template, request, redirect, session, jsonify
from flask_cors import CORS, cross_origin
# from lcplugin.agent.create_vectorstore import CreatorVectorStore

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/')
def view_form():
    return render_template('login.html')

...
in_memory_datastore = {
   "COBOL" : {"name": "COBOL", "publication_year": 1960, "contribution": "record data"},
   "ALGOL" : {"name": "ALGOL", "publication_year": 1958, "contribution": "scoping and nested functions"},
   "APL" : {"name": "APL", "publication_year": 1962, "contribution": "array processing"},
}

@app.route('/programming_languages',  methods=['GET'])
@cross_origin()
def list_programming_languages():
   return {"programming_languages":list(in_memory_datastore.values())}

@app.route('/handle_post', methods=['POST'])
@cross_origin()
def handle_post():
    if request.method == 'POST':
        #response = funct(request)
        data = request.form()
        print(data)
        return jsonify({"response":"hello, welcome to post request"})
    else:
        return jsonify({"response":"hello, wrong input"})

if __name__ == '__main__':
    # file_paths = ["../lcplugin/code/headsets.html",
    #                 "../lcplugin/code/keyboard.html",
    #                 "../lcplugin/code/mice.html",
    #                 "../lcplugin/code/webcams.html",
    #                 "../lcplugin/code/website.html",
    #                 ]
    # urls = ["http://www.logitech.com/en-in/products/headsets.html",
    #         "http://www.logitech.com/en-in/products/keyboard.html",
    #         "http://www.logitech.com/en-in/products/mice.html",
    #         "http://www.logitech.com/en-in/products/webcams.html",
    #         "https://www.logitech.com/en-in"]
    


    # for i in range(len(file_paths)):
    #     vs = CreatorVectorStore(file_paths[i], urls[i])
    #     vs.create_vectorstore()
          
    app.run()