// https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/description/
// // class Solution {
// // public:
// //     int minInsertions(string a) {
// //         int n = a.size();
// //         string b = a;
// //         reverse(b.begin(), b.end());

// //         int dp[n + 1][n + 1];

// //         for(int i = 0; i <= n; i++){
// //             for(int j = 0; j <=n; j++){
// //                 if(i == 0 || j == 0){
// //                     dp[i][j] = 0;
// //                     continue;
// //                 }

// //                 if(a[i - 1] == b[j - 1]){
// //                     dp[i][j] = dp[i - 1][j - 1] + 1;
// //                 }
// //                 else{
// //                     dp[i][j] = max(dp[i - 1][j] , dp[i][j - 1]);
// //                 }
// //             }
// //         }

// //         return n - dp[n][n];
// //     }
// // };