n = int(input("Masukkan jumlah peserta : "))
a = sorted(
    list(map(int, input("Masukkan tinggi peserta : ").strip().split()))[:n])
for idx, val in enumerate(a):
    print("Nomor urut ", (idx+1), ": ", val)
