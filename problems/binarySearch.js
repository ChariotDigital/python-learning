//Binary Search Tempalte
function binarySearch(arr, target) {
    let l = 0;
    let r = arr.length-1;

    while( l +1 < r) {
        let mid = (l+r)/2;
        if(target === arr[mid]) {
            return mid;
        }  
        
        if(target > arr[mid]) {
            l = mid;
        } else {
            r = mid;
        }
    }

    if(arr[l] == target) {
        return l;
    }
    if(arr[r] == target) {
        return r;
    }
    return -1
}

//find the index of th enumber that is closest to the target without being it
function findNearest(arr, target) {
    let l = 0;
    let r = arr.length-1;

    while( l + 1 < r) {
        let mid = (l+(r-1));
        if(target > arr[mid]) {
            l = mid;
        } else {
            r = mid;
        }
    }
   

    if(Math.abs(target = arr[l]) <= Math.abs(target = arr[r])) {
        return l;
    } else {
        return r;
    }
}

//Find where the target number should be placed assuming this list is sorted

var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        let mid = Math.floor((start+ end) / 2);
        
        if (target === nums[mid]) {
            return mid;
        } 
        
        if (target > nums[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    return start;
};

function searchRange(nums, target) {
    let l = 0, r = nums.length;
    let index = -1;
    
    while (l < r) {
      let mid = Math.floor((l + r) / 2);
      if (nums[mid] === target) {
        index = mid;
        break;
      }
      if (nums[mid] < target) {
        l = mid + 1;
      }
      else {
        r = mid;
      }
    }
    
    if (index < 0) { return [-1, -1] };
    
    l = r = index;
    while (nums[l] === nums[index]) l--;
    while (nums[r] === nums[index]) r++;
    return [l + 1, r - 1];
  }