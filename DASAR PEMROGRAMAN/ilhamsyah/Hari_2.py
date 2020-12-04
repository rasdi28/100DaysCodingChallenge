jumlah = int(input("Berapa Jumlah Peserta : "))
waktu = {}

for i in range(0, jumlah): 
    catat = int(input("nomor urut "+ str(i+1)+":  " ))
    k =  ("nomor urut "+ str(i+1)+":  " )
    v =  catat
    waktu[k] = v

print("\n\n\nData Urutan Peserta berdasarkan tinggi lompatan : ")

waktu = {k: v for k, v in sorted(waktu.items(), key=lambda item: item[1])}
for k, v in waktu.items():
  print(k, v) 
