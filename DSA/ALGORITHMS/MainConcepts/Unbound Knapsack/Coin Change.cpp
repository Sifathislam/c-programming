// https://practice.geeksforgeeks.org/problems/coin-change2448/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article
// //{ Driver Code Starts
// #include <bits/stdc++.h>
// using namespace std;

// // } Driver Code Ends
// class Solution {
//   public:
//     long long int count(int c[], int n, int s) {

//         long long int dp[n+1][s+1];
        
//         for(int i = 0; i <= n; i++){
//             for(int j = 0; j <= s; j++){
//                 if(i == 0 && j == 0){
//                     dp[i][j] = 1;
//                     continue;
//                 }
//                 if(i == 0){
//                     dp[i][j] = 0;
//                     continue;
//                 }
//                 if(j >= c[i - 1]){
//                     dp[i][j] = dp[i][j - c[i - 1]] + dp[i - 1][j];
//                 }
//                 else{
//                     dp[i][j] = dp[i - 1][j];
//                 }
                
//             }
//         }
//         return dp[n][s];
//     }
// };

// //{ Driver Code Starts.
// int main() {
//     int t;
//     cin >> t;
//     while (t--) {
//         int sum, N;
//         cin >> sum >> N;
//         int coins[N];
//         for (int i = 0; i < N; i++) cin >> coins[i];
//         Solution ob;
//         cout << ob.count(coins, N, sum) << endl;
//     }

//     return 0;
// }


// // } Driver Code Ends