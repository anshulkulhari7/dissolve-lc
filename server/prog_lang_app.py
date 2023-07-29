# app.py
 
from flask import Flask, render_template, request, redirect, session
 
app = Flask(__name__)

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
def list_programming_languages():
   return {"programming_languages":list(in_memory_datastore.values())}

@app.route('/handle_post', methods=['POST'])
def handle_post():
    if request.method == 'POST':
        html = request.form['html']
        query = request.form['query']
        metadata = request.form['metadata']
        print(html, query, metadata)
        return "hello, welcome to post request"
    else:
        return "hello, wrong input"

if __name__ == '__main__':
    app.run()