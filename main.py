### bài 1
### Thuật toán chọn
'''
def selection_sort(arr):

    n = len(arr)
    for i in range(n):
        max_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] > arr[max_idx]:

                max_idx = j
        arr[i], arr[max_idx] = arr[max_idx], arr[i]

    return arr
print(selection_sort([5, 4, 3, 2, 1]))
'''

'''
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False

        for j in range(n-1-i):
            if arr[j] < arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True

        if not swapped:
            break
    return arr
print(bubble_sort([3,5,7,1,2]))
print("vì thuật toán có 5 phần tử nên có 10 bước ")

'''
### bài 2
'''
### cách 1
numbers = [3,5,7,9,21,5,11]
odd_numbers = []

for num in numbers:
    if num % 2 != 0:
        odd_numbers.append(num)

print("Số lẻ:", odd_numbers)
'''
### cách 2
'''
numbers = [2,3,7,9,24,76,5]

odd_numbers = [num for num in numbers if num % 2 != 0]

print("Số lẻ:", odd_numbers)
'''



