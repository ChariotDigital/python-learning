class Solution
    def solveNQueens(self, m:init) -> List[List[str]]:
        cols = set()
        posDiag = set()
        negDiag = set()
        
        res = []
        board = [['.'] * n for i in range(n)]

        def backtrack(r):
            if n == r:
                copy = [''.join(row) for row in board]
                res.append(copy)
                return
            

            for c in range(n)
                if c in col or (r+c) in posDiag or (r-c) in negDiag
                    continue

                col.add(c)
                posDiag.add(c)
                negDiag.add(c)

                backtrack(r+1)
                
                col.remove(c)
                posDiag.remove(c)
                negDiag.remove(c)
            


def quicksort(array):
    # If the input array contains fewer than two elements,
    # then return it as the result of the function
    if len(array) < 2:
        return array

    low, same, high = [], [], []

    # Select your `pivot` element randomly
    pivot = array[randint(0, len(array) - 1)]

    for item in array:
        # Elements that are smaller than the `pivot` go to
        # the `low` list. Elements that are larger than
        # `pivot` go to the `high` list. Elements that are
        # equal to `pivot` go to the `same` list.
        if item < pivot:
            low.append(item)
        elif item == pivot:
            same.append(item)
        elif item > pivot:
            high.append(item)

    # The final result combines the sorted `low` list
    # with the `same` list and the sorted `high` list
    return quicksort(low) + same + quicksort(high)


def fixed_sliding_window(arr: List[int], k: int):
    curr_subarray = sum(arr[:k])
    result = [curr_subarray]

    f

