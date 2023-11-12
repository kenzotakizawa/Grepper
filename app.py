from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/', methods=['GET', 'POST'])
def index():
    results = ""
    if request.method == 'POST':
        text = request.form['sequenceA']
        keyword = request.form['sequenceB']
        results = "\n".join(line for line in text.splitlines() if keyword in line)
    return render_template('index.html', results=results)

if __name__ == '__main__':
    app.run(debug=True)
