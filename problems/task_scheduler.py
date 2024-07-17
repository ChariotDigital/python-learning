

# you are given an array Cp tasks, each repersented by letter A-Z 
# each cycle allows the completion of one task. tasks can be completed in any order, but theres a contraint
# IDENTICAL tasks must be sepearated by at least n intervals


# Burte force:
# try out every premutation of paths through the numbers of tasks that satisfy the constraint
# not sure how many total are avaulable or the frequency of tasks
# we do not know during each cycle how many chars are left or the frequency of each character

# Optimal solution
# we know that n+1 is the min amount of unique characters we can place in a row before we process a character we have already seen
# setup a freq map and then make a heap from the map
# pop at most n+1 values from the heap, and then decrement each.
# if the popped values are greater than 0 after being decremented, place them back in the heap
# for this cycle, add to time n+1 unless the heap is empty,, in which case add the number of characters left in the last temp array
 



import heapq

class TestCase:
    def __init__(self, case, n) -> None:
        self.case = case
        self.n = n

def task_scheduler(tasks, n):
    intervals = 0
    fq_map = {char: tasks.count(char) for char in tasks}
    max_heap = []
    for val in list(fq_map.values()):
        heapq.heappush(max_heap, val)


    while len(max_heap) != 0:
        temp = []
        for i in range(n+1):
            if len(max_heap) != 0:
                temp.append(heapq.heappop(max_heap))
        print(temp)
        for freq in temp:
            freq -= 1
            if freq > 0:
                print(f"freq added: {freq}")
                heapq.heappush(max_heap, freq)
        
        intervals += len(temp) if len(max_heap) == 0 else n +1
    return intervals


test_cases = [
   TestCase(['A', 'A', 'A', 'B', 'B','C', 'D'], 2)
]

for case in test_cases:
    print(task_scheduler(case.case, case.n))
