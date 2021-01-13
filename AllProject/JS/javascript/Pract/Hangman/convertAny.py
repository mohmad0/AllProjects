from pydub import AudioSegment
sound = AudioSegment.from_file("fail.m4a")
sound.export("fail.m4a", format="mp3", bitrate="128k")


#wav_audio = AudioSegment.from_file("audio.wav", format="wav")fail.m4a
#raw_audio = AudioSegment.from_file("audio.wav", format="raw",
 #                                  frame_rate=44100, channels=2, sample_width=2)

#wav_audio.export("audio1.mp3", format="mp3")
#raw_audio.export("audio2.mp3", format="mp3")
