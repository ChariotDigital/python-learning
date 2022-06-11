class Solution:
    
        
    def isPalindrome(self, s: str) -> bool:
                    
        s2 = (re.sub(r"[^a-zA-Z0-9 ]", "", s)).lower()
        s3 = s2.replace(" ","")
        print(s3)
        return s3 == s3[::-1]
                