from flask import Flask, render_template as render, url_for
from flask_bootstrap import Bootstrap

app = Flask(__name__)
Bootstrap(app)

@app.route('/')
def index():
    return render('game.html')

if __name__ == '__main__':
    app.run(debug=True)