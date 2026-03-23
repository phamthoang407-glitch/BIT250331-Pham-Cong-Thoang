# BÀI 1
'''
# Nhập 5 chuỗi bất kỳ từ bàn phím, sử dụng insertion sort để sắp xếp đồ dài các chuỗi theo thứ tự giảm dần.
# In ra màn hình từng bước sắp xếp.
def insertion_sort(strings):
    for i in range(1, len(strings)):
        key = strings[i]
        j = i - 1
        while j >= 0 and len(strings[j]) < len(key):
            strings[j + 1] = strings[j]
            j -= 1
        strings[j + 1] = key
        print(f"Bước {i}: {strings}")
strings = []
for i in range(5):
    s = input(f"Nhập chuỗi thứ {i+1}: ")
    strings.append(s)
print("\nChuỗi ban đầu:", strings)
print("\nQuá trình sắp xếp:")
insertion_sort(strings)
print("\nKết quả cuối cùng:", strings)
'''
# Bài 3:Viết chương trình nhận vào một danh sách số từ người dùng và in ra tất cả các số chẵn, đồng thời tính tổng của các số chẵn đó.
'''
sd = list(map(int, input("Nhap vao mot day so ").split()))
chan = []
for so in sd:
    if so % 2 == 0:
        chan.append(so)
        tong = sum(chan)
print(f"{chan}")
print(f"Tong cac so chan = {tong}")

'''
'''
# Bài 4 - Khởi tạo một danh sách các số nguyên
# - Thêm phần tử vào danh sách
# - Nhập giá trị k và kiểm tra số lần xuất hiện của nó trong danh sách
# - Tính tổng tất cả các số nguyên tố trong danh sách
# - Sắp xếp danh sách
# - Xóa danh sách
n = [1,2,3,4,5,6,7,8]
n.append(int(input("Nhap vao so can chen :")))
print(f"them phan tu vao danh sach {n}")
k = int(input("Nhap vao gia tri k :"))
m = n.count(k)
print(f"so {k} xuat hien {m} lan")
r = n.sort()
print(f"danh sach sau khi sap xep {r}")
h = n.clear()
print(f"danh sach sau khi xoa {h}")
import math
def so_nguyen_to(num):
    if num < 2:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True
nguyen_to = [so for so in n if so_nguyen_to(so)]
tong = sum.nguyen_to()
print(tong)
'''
'''
# bai 5
n = {"Thoang", "Trieu", "Thang"}
key = input("NHap key ")
if key in n:
    print("key ton tai")
else:
    print("key khong ton tai")
    '''
'''
# bai 8-
student = ("TRIEU", 19, 3.0)
name, age, gpa = student
print("hoc sinh:", name)
print("tuổi:", age)
print("gpa:", gpa)
'''
'''
# Bai 6 :
n = int(input("Nhập số người: "))
people = {}
for char in range(n):
    name = input("Nhập tên: ")
    age = int(input("Nhập tuổi: "))
    people[name] = age
tuoitb = sum(people.values()) / len(people)
print("Danh sách:", people)
print("Tuổi trung bình:", tuoitb)
'''
'''
# bai 2
def tim_kiem(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
arr = ['hi', 'hello','Trieu','Thang','Thoang']
index = tim_kiem(arr,  str(input("Nhap vao chuoi can tim :")))
print(" so can tim o vi tri : ", index)
'''
'''
# bai 9 Viết chương trình cộng hai ma trận cùng kích thước, giá trị của ma trận nhập từ bàn phím
# - Báo lỗi nếu nhập vào giá trị trống
import numpy as np
matrix1 = np.array([[1,0],[0,1]])
matrix2 = np.array([[1,2],[2,1]])
result = np.dot(matrix1, matrix2)
print(result)
'''


link ảnh : https://drive.google.com/drive/folders/1rJVJV5e2F_kOD1s4tCMJIYkHZ_cG_JMD?usp=sharing




















