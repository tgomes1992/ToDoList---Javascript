import os
from flask import Flask,render_template,request,redirect,url_for,jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import  Migrate
import sys
from datetime import datetime

#create the app config, including the database data
#templates folder for html, static for css an js files




app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = r'sqlite:///D:\Projects\Javascript -  Focused\ToDoList---Javascript\atividades.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)
migrate = Migrate(app, db)

class Atividades(db.Model):
    id = db.Column(db.Integer(),primary_key=True)
    atividade =  db.Column(db.String(),nullable=False)
    descricao =  db.Column(db.String(),nullable=False)
    deadline = db.Column(db.Date())


db.create_all()

#help functions
def date_sql(data):
    str = data
    ndate = datetime.strptime(data,'%Y-%m-%d').date()
    return ndate

#endpoints

@app.route('/')
def index():
    atividades = Atividades.query.all()
    return  render_template("main.html",atividades=atividades)

@app.route("/cadastrar_atividade",methods=['POST'])
def cadastro():
    date = date_sql(request.form.get("data"))
    natividade = Atividades(atividade=request.form.get("atividade"),descricao=request.form.get("description"),deadline=date)
    db.session.add(natividade)
    db.session.commit()
    db.session.close()
    return redirect(url_for('index'))



if __name__:"__main__"
app.run(debug=True)

