# coding: UTF-8
# -*- coding:utf-8 -*-
import requests
import time
import random
import os
import re
import string
from queue import Queue
from io import StringIO
import gzip
proxies_q = Queue()

def mkdir(path):
	folder = os.path.exists(path)
	if not folder:                   #判断是否存在文件夹如果不存在则创建为文件夹
		os.makedirs(path)            #makedirs 创建文件时如果路径不存在会创建这个路径
		print("---  new folder: "+path+" ---")
parent_path = os.path.dirname(os.path.abspath(__file__))
crawldata_path=parent_path+"/crawldata"
mkdir(crawldata_path)
genres_list = ["喜剧","动作","爱情","科幻","悬疑"]
# ["恐怖","音乐","历史","奇幻","情色"]
# headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"}
headers = \
{
    "Accept":"text/html, application/xhtml+xml, application/xml; q=0.9, */*; q=0.8", 
    "Accept-Encoding": "gzip",
    "Accept-Language": "zh-Hans-CN, zh-Hans; q=0.8, en-US; q=0.5, en; q=0.3",

    "Connection": "Keep-Alive",
    "Cookie" : "",
    "Host": "movie.douban.com",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
}
ua_list = [
{"User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/22.0.1207.1 Safari/537.1"},
{"User-Agent": "Mozilla/5.0 (X11(Linux); CrOS i686 2268.111.0) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.57 Safari/536.11"},
{"User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1092.0 Safari/536.6"},
{"User-Agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1090.0 Safari/536.6"},
{"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"}
]
ip_url = "https://proxy.horocn.com/api/proxies?order_id=G8CK1653527378469678&num=2&format=text&line_separator=win&can_repeat=yes"	
# ip_url = "http://tpv.daxiangdaili.com/ip/?tid=557882220022405&num=1&filter=on&delay=1&protocol=http"
def get_ip():
	print("hhhh")
	failed = 1
	while(failed):
		failed = 0
		ip=requests.get(ip_url).text
		ip_array = ip.split('\r\n')
		if(len(ip_array)<1):
			failed=1
			time.sleep(3)
			continue
		else:
			for ip in ip_array:
				proxies_q.put({"https": "http://"+ip})
	print("hjjjj")

def get_proxies():
	if proxies_q.empty():
		get_ip()
	proxies = proxies_q.get()
	print(proxies)
	return proxies
def decode_url(url, proxies):
	# headers["User-Agent"] = random.choice(ua_list)["User-Agent"]
	# n = ''.join(random.sample(string.digits,6))
	bid = ''.join(random.sample(string.ascii_letters+string.digits,11))
	random1 = ''.join(random.sample(string.digits,4))
	random2 = ''.join(random.sample(string.digits,5))
	random3 = ''.join(random.sample(string.digits,6))
	random4 = ''.join(random.sample(string.digits,7))
	# print(n, bid)
	cookie = "bid="+bid
	headers["Cookie"] = cookie
	cookies = {"Cookie" : cookie}
	agent = "Mozilla/5.0 (Windows 10.0; Win64; x64) AppleWebKit/"+random1+" (KHTML, like Gecko) Chrome/"+random2+random3+" Safari/"+random4
	headers["User-Agent"] = agent
	failed = 1
	while failed:
		try:
			# time.sleep(1) 	
			req = requests.get(url, headers=headers, proxies=proxies, cookies=cookies, timeout=2)
			info = req.text
			failed = 0
			# print(info)
		except KeyboardInterrupt:
			return
		except:
			print("timeout")
			failed += 1
			if(failed == 3):
				proxies = get_proxies()
				failed = 1
	return info

def main():
	# headers = random.choice(ua_list)
	proxies = get_proxies()
	for genre in genres_list:	#genre range
		txt_file_name = crawldata_path + "/" + genre + ".txt"
		with open(txt_file_name, "w", encoding="utf-8") as file:
			print(txt_file_name)
			for n in range(1,10):	#score range
				low = n-1
				to_next_range = 0
				for i in range(0,2000,20):	#start data range
					if(to_next_range==1):
						break
					url = "https://movie.douban.com/j/new_search_subjects?sort=R&range="+str(low)+","+str(n)+"&tags=&start="+str(i)+"&genres="+genre
					# url = "https://movie.douban.com/j/new_search_subjects?sort=R&range=0,1&&start=0&genres=%E5%89%A7%E6%83%85"
					# url = "http://www.ip111.cn"
					print("begin")
					failed = 1
					while failed:
						failed = 0
						info = decode_url(url, proxies)
						print(info)
						if((info.find('msg')!=-1)|(info.find('IP')!=-1)):	#crime catched by douban 
							proxies = get_proxies()
							print("police!!!!!")
							failed = 1
							continue
						film_name = re.findall(r'(?<=title\"\:\").*?(?=\")', info)
						print("------------------------------")
						print(film_name)
						if(len(film_name)==0):
							to_next_range = 1
							break
						for film in film_name:
							file.write(film+"\n")
							file.flush()
	return
main()

