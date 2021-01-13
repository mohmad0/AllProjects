import os
import ffmpeg
converter = os.system('ffmpeg -i who.webm -codec copy test.mp4')
input('pree to exit.....')
print(converter)
