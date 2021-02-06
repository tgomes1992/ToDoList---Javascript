import os
from help import create_file
from flask import Flask,render_template,request,redirect,url_for,jsonify,send_file
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


@app.route("/modificar/<id>",methods=['POST'])
def modificar(id):
    atividade = Atividades.query.get(id)
    atividade.atividade = request.form.get("atividade")
    atividade.descricao = request.form.get("description")
    atividade.deadline = date_sql(request.form.get('data'))
    db.session.commit()
    db.session.close()
    resposta = request.form.get('data')
    return redirect(url_for('index'))

@app.route("/excluir/<id>",methods=['POST'])
def remover(id):
    print(id)
    atividade = Atividades.query.get(id)
    db.session.delete(atividade)
    db.session.commit()
    db.session.close()
    return redirect(url_for('index'))



@app.route("/get_atividade/<id>",methods=['GET'])
def buscar_atividades(id):
    resposta = id
    atividade = Atividades.query.get(id)
    json = {
        'id': atividade.id,
        'atividade':atividade.atividade,   
        'descricao': atividade.descricao,    
        'deadline': atividade.deadline 
    }
    return json




@app.route("/get_file/",methods=['GET'])  
def get_file():
    return send_file(create_file(),attachment_filename="teste.txt",as_attachment=True)



if __name__:"__main__"
app.run(debug=True)

