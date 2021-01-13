from pytube import Playlist
import moviepy.editor as mp
import os
import shutil

playlist_link = input("Please Inter You Playlist Link:...\n")
audioVideo = input("Do You Need (mp4 or mp3) :...\n")
currentFolder = os.getcwd()

playlist = Playlist(playlist_link)

for video in playlist.videos:
	# video.streams.filter(res="360p" , subtype="mp4" , type="video" , progressive=True).order_by('resolution').desc().first().download(output_path="./save")

	def finish():
		print("Download Done")

	if audioVideo == 'mp4':
		try:
			print("Downloading....")
			video.streams.filter(progressive=True, file_extension='mp4' , res="360p" , type="video").first().download(output_path="./save")
			video.register_on_complete_callback(finish())
		except:
			print("Downloading....")
			video.streams.get_lowest_resolution().download(output_path="./save")
			video.register_on_complete_callback(finish())
	else:

		try:
			print("Downloading....")
			video.streams.filter(progressive=False, only_audio=True , abr="128kbps" , type="audio").first().download(output_path="./save")
			# for stream in video.streams:
			# 	print(stream)
			os.chdir('save')
			for filename in os.listdir('.'):
			    if filename.endswith(('.mp4')):
			        # if not os.path.exists('video'):
			        #     os.mkdir('video')
			        clip = mp.VideoFileClip(os.path.join(filename))
			        clip.audio.write_audiofile(filename + '.mp3')
			        clip.close()
			        print('Audio done')
			        os.remove(filename)
			        os.chdir('../')
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
			        os.chdir(currentFolder)
			video.register_on_complete_callback(finish())
			# print(os.listdir("."))

		except:
			print("Downloading....")
			video.streams.get_lowest_resolution().download(output_path="./save")
			os.chdir('save')
			for filename in os.listdir('.'):
			    if filename.endswith(('.mp4')):
			        # if not os.path.exists('video'):
			        #     os.mkdir('video')
			        clip = mp.VideoFileClip(os.path.join(filename))
			        clip.audio.write_audiofile(filename + '.mp3')
			        clip.close()
			        print('Audio done')
			        os.remove(filename)
			        os.chdir('../')
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
			        os.chdir(currentFolder)
			video.register_on_complete_callback(finish())
			# print(os.listdir("."))