import os

while True:

    # create folder porject

    name_main_folder = input('Enter Your Name Folder \n')

    if not os.path.exists(name_main_folder):
        os.mkdir(name_main_folder)
    os.chdir(name_main_folder)

    print('You Now In ==> ' + name_main_folder )

    ############################################################################################

    # create pug folder && file

    check_name_folder_js = input('do you want Folder pug With File js (y or n) ? \n')

    if check_name_folder_js == 'y':
        if not os.path.exists("Pug"):
            os.mkdir("Pug")
            os.chdir("Pug")
            open('main.pug', 'w+')
            os.chdir('../')

    elif check_name_folder_js == 'n':
        check_name_file_js = input('do you want File pug (y or n) ? \n')
        if check_name_file_js == 'y':
            open('main.pug', 'w+')
        else:
            print('oky thanks')

    ############################################################################################

