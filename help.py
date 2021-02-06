import os


def filename(str,filetype):
    return str+"."+filetype



def create_file():
    file = open("files/texte.txt",'w')
    file.write("esse arquivo foi escrito com python")
    file.close()
    folder = os.path.join(os.getcwd(),"texte.txt")
    return folder


def clean_file_folder():
    folder = os.listdir('files')
    for i in folder:
        os.remove(os.path.join('files',i))
    return 'Done'


#clean_file_folder()
# create_file()

