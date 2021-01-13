import moviepy.editor as mp

while True:
    NameVideo = input('Enter The Name Video.... \n' )
    NameFormatVideo = input('Enter The Name Format Video (mp4 or webem or....) \n')
    NameAudioFileConverted = input('Enter The Name Audio Converted.... \n')
    NameFormatAudio = 'mp3'
    clip = mp.VideoFileClip(NameVideo + '.' + NameFormatVideo)
    clip.audio.write_audiofile(NameAudioFileConverted + '.' + NameFormatAudio)
