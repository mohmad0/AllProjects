import moviepy.editor as mp

while True:
    NameVideo = input('Enter The Name Video.... \n' )
    NameFormatVideo = input('Enter The Name Format Video (mp4 or webem or....) \n')
    NameFileConverted = input('Enter The Name Video Converted.... \n')
    NameFormat = input('Enter The Name Format Video (mp4 or webem or....) \n')
    clip = mp.VideoFileClip(NameVideo + '.' + NameFormatVideo)
    clip.write_videofile(NameFileConverted + '.' + NameFormat)

# NameFileVideo = input('Enter The Name File Video.... \n' ) NameFileVideo + '/'
# NameFileSave = input('Enter The Name File Save.... \n' ) NameFileSave + '/' + 
