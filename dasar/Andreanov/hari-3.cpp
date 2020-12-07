/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>

using namespace std;

int main()
{
    int a,counter;
    cout<<"Stok Komputer kita ada : ";
    cin>>a;
    for(counter = 1; counter < a+1; counter++){
        cout<<"Komputer "<<counter<<"\n";
    }

    return 0;
}
