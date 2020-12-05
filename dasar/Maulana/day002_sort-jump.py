def sortJump(n, data):
	result = dict(sorted(data.items(), key=lambda val: val[1]))
	
	for i, j in result.items():
		print(f"Peserta nomor urut {i}: {j}")


if __name__ == '__main__':
	n = int(input("n\t: "))
	data = list(map(int, input().split(' ')))[:n]
	data = { i+1:j for i, j in zip(list(range(n)), data) }

	sortJump(n, data)