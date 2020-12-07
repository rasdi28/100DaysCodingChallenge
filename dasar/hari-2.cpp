/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include<iostream>
using namespace std;
int main()
{
   int data[100];
   int a,i, j, tmp;
  
  cout << "Masukkan Jumlah Peserta : ";
  cin>>a;
  cout << endl;

   for(i=0; i<a; i++)
   {
       cout<<"Masukkan Tinggi Lompatan Peserta "<<(i+1)<<" : ";
      cin>>data[i];
   }
  
   for(i=0; i<a; i++)
   {
       for(j=i+1; j<a; j++)
      {
          if(data[i]>data[j])
         {
             tmp = data[i];
            data[i] = data[j];
            data[j] = tmp;
         }
      }
   }
   
   cout<<"\nData setelah diurutkan : "<<endl;
   for(i=0; i<a; i++)
   {
       cout<<data[i]<<" ";
   }
   return 0;
} 