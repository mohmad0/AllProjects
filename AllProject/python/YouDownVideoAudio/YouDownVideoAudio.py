from pytube import YouTube
import moviepy.editor as mp
import os
import shutil

## while True:
    ## current_dir = os.path.dirname(os.path.realpath(__file__))

# ('.mp4', '3gp', 'avi', 'flv', '.h264', 'm4v', 'webm', 'mkv', 'mov', '3g2', 'mpg', 'rm', 'swf', 'vob', 'wmv')



link = input("Please Inter Your Vedio Url:...\n")
audioVideo = input("Do You Need (mp4 or mp3) :...\n")

# link = "https://www.youtube.com/watch?v=3W-yNYYHnpQ"

Videos = YouTube(link)

def finish():
	print("Download Done")

if audioVideo == 'mp4':
	try:
		print("Downloading....")
		Videos.streams.filter(progressive=True, file_extension='mp4' , res="360p" , type="video").first().download(output_path="./save")
		Videos.register_on_complete_callback(finish())
	except:
		print("Downloading....")
		Videos.streams.get_lowest_resolution().download(output_path="./save")
		Videos.register_on_complete_callback(finish())
else:
	try:
		print("Downloading....")
		Videos.streams.filter(progressive=False, only_audio=True , abr="128kbps" , type="audio").first().download(output_path="./save")
		# for stream in Videos.streams:
		# 	print(stream)
		os.chdir('save')
		for filename in os.listdir('.'):
		    if filename.endswith(('.mp4')):
		        # if not os.path.exists('Videos'):
		        #     os.mkdir('Videos')
		        clip = mp.VideoFileClip(os.path.join(filename))
		        clip.audio.write_audiofile(filename + '.mp3')
		        clip.close()
		        print('Audio done')
		        os.remove(filename)
		        os.chdir('../')
		        print(os.getcwd())
		        os.remove(filename)
		        os.chdir('./save')
		        shutil.copy(filename + '.mp3', '../')
		        os.remove(filename + '.mp3')
		        os.chdir('../')
		        os.rmdir('save')
		        if not os.path.exists('Audio'):
		            os.mkdir('Audio')
		        shutil.copy(filename + '.mp3', 'Audio')
		        os.remove(filename + '.mp3')
		Videos.register_on_complete_callback(finish())

	except:
		print("Downloading....")
		Videos.streams.get_lowest_resolution().download(output_path="./save")
		os.chdir('save')
		for filename in os.listdir('.'):
		    if filename.endswith(('.mp4')):

		        clip = mp.VideoFileClip(os.path.join(filename))
		        clip.audio.write_audiofile(filename + '.mp3')
		        clip.close()
		        print('Audio done')
		        os.remove(filename)
		        os.chdir('../')
		        print(os.getcwd())
		        os.remove(filename)
		        os.chdir('./save')
		        shutil.copy(filename + '.mp3', '../')
		        os.remove(filename + '.mp3')
		        os.chdir('../')
		        os.rmdir('save')
		        if not os.path.exists('Audio'):
		            os.mkdir('Audio')
		        shutil.copy(filename + '.mp3', 'Audio')
		        os.remove(filename + '.mp3')
		Videos.register_on_complete_callback(finish())


##########################################################################################

# for stream in Videos.streams.filter(res="360p" , subtype="mp4" , type="video" , progressive=True):
# 	print(stream)

# Videos.streams.get_lowest_resolution().download(output_path="./save")

# YouTube(link).streams.filter(res="360p" , subtype="mp4" , type="video" , progressive=True).download(output_path="./save")

# YouTube('https://www.youtube.com/watch?v=3W-yNYYHnpQ').streams.first().download()

# for stream in Videos.streams:
# 	print(streamt)
	# stream.filter(res="360p" , subtype="mp4" , type="video" , progressive=True).download(output_path="./save")
	# try:
	# 	stream.filter(res="360p" , subtype="mp4" , type="video" , progressive=True).download(output_path="./save")
	# except:
	# 	stream.get_highest_resolution().download(output_path="./save")