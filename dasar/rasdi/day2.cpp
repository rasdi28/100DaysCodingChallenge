#include <vector>
#include <iostream>
#include <algorithm> // untuk sort()
#include <utility> // untuk pair

using namespace std;

int main() {
  // nomor peserta
  int n;
  cin >> n;

  vector<pair<int, int>> hasilPertandingan;

  for (int nomorPeserta = 1; nomorPeserta <= n; nomorPeserta++) {
    int skor;
    cin >> skor;
    hasilPertandingan.push_back({skor, nomorPeserta});
  }

  sort(hasilPertandingan.begin(), hasilPertandingan.end());

  for (auto &hasil : hasilPertandingan) {
   cout << "Peserta nomor urut " << hasil.second << ": " << hasil.first << endl;
  }

  return 0;
}