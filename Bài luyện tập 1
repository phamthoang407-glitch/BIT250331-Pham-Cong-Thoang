'''
### Bài 1: : Tính giá trị của biểu thức: (a² + b²) / (a - b) với a = 10, b = 4. In ra kết quả.
a = 10
b = 4
gia_tri = (a^2+b^2)/(a-b)
print(f"Giá trị của biểu thức là {gia_tri}")
'''

'''
### BÀi 2 : Viết chương trình nhập hai số, tính các giá trị: lũy thừa, căn bậc 2, chia lấy phần nguyên, chia lấy phần dư, làm tròn số.
import math
a = float(input("Nhập vào giá trị của a = "))
b = (float(input("Nhập vào giá trị của b = ")))
luy_thua = a*b
can_bac_2_cua_a = a*(1/2)
can_bac_2_cua_b = b*(1/2)
tron = a, b
if a>b:
    chia_lay_phan_nguyen = a//b
    chia_lay_phan_du = a%b
else :
    chia_lay_phan_nguyen = b//a
    chia_lay_phan_du = b%a
print(f"Lũy thừa = {luy_thua}")
print(f"Căn bậc 2 của a  = {can_bac_2_cua_a} và b =  {can_bac_2_cua_b}")
print(f"Chia lấy phần nguyên = {chia_lay_phan_nguyen}")
print(f"Chia lấy phần dư = {chia_lay_phan_du}")
print(math.floor(a))
print(math.floor(b))
'''
'''
### BÀi 3 : Yêu cầu người dùng nhập vào một số trong khoảng từ 1 đến 9, sau đó hiển thị bảng cửu chương của số đó từ 1 đến 9.

i = int(input("Nhập vào một số trong khỏang từ 0 đến 9 :  "))
if 0<i<9:
    print(f"Bảng cửu chương của {i} là :")
    for j in range(0,10):

        j += 1
        nhan = i * j
        print(f"{i}*{j} = {nhan}")


else:
    print("Nhập lại !!!!")
'''
"""
### BÀi 4 :Viết một chương trình in ra các số từ 1 đến 100, bỏ qua các số chia hết cho 3.
for i in range(0,101):
    if i % 3 == 0:
        continue
    else:
        print(f"{i}", end = ",")"""
'''
### BÀi 5 : Xử lý danh sách đa chiều. Viết chương trình cho phép:

### Khởi tạo và nhập một ma trận M x N với các phần tử ngẫu nhiên
### Hiển thị bất kỳ hàng nào dựa trên đầu vào của người dùng (ví dụ: yêu cầu hiện thị hàng 3)
### Hiển thị bất kỳ cột nào dựa trên đầu vào của người dùng (ví dụ: yêu cầu hiện thị cột 2)
### Hiển thị giá trị lớn nhất trong ma trận
matrix = [
    [1,3,4,6,7],
    [0,4,5,7,3],
    [1,2,8,9,0],
    [3,7,5,4,2]
]
for row in matrix:
    for elem in row:
        print('{:>4}'.format(elem), end='')
    print()
n = int(input("Nhập vào hàng muốn xem :"))
m = int(input("Nhập vào cột muốn xem :"))
print(matrix[n])
print(matrix[m])
max1 = max(max(row) for row in matrix)
print(max1)
'''
'''
### BÀi 6 :Tách và xử lý chuỗi. Cho một chuỗi như "`5; 7; 8; -2; 8; 11; 13; 9; 10`" (có thể nhập từ bàn phím):

### In từng số trên một dòng riêng
### In ra có bao nhiêu số chẵn
### In ra có bao nhiêu số âm
### In ra có bao nhiêu số nguyên tố
### Tính và in giá trị trung bình
list = [5,7,8,-2,8,11,13,9,10]
dem = 0
dem1 = 0
dem2 = 0
for so in list:
    print(so)

for so in list:
    if so % 2 == 0:
        dem +=1
print(f"Có {dem} số chẵn")

for so in list:
    if so % 2 != 0:
        dem1 +=1
print(f"Có {dem1} số lẻ")

def so_nguyen_to(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
primes = [x for x in list if isinstance(x, int) and so_nguyen_to(x)]
for j in range(len(primes)):
    dem2 += 1
print(f"Có {dem2} số nguyên tố ")

tong = 0
trung_binh = 0
for m in range(len(list)):
    tong += list[m]
    trung_binh = tong / 2
print(f"Giá trị trung bình = {trung_binh}")
'''
'''
# Bài 7:Tạo lớp `Student` có `tên` và `điểm`. Khởi tạo 2 đối tượng sinh viên khác nhau.
class Student:
    pass
def main():
    student1 = get_student()
    student2 = get_student()
    print(f"{student1.name} có {student1.diem} điểm")
    print(f"{student2.name} có {student2.diem} điểm")
def get_student():
    student = Student()
    student.name = input("Tên: ")
    student.diem = input("Điểm: ")
    return student
if __name__ == "__main__":
    main()'''
'''
# Bài 8; Xác thực điểm sinh viên nằm trong khoảng `0–10`.
diem = float(input("Nhập vào điểm của sinh viên : "))
if 0<= diem<=10:
    print(f"Điểm của sinh viên đó là {diem}")
else:
    print("Nhập sai điểm")
    '''
# BÀi 9 :Thêm phương thức `display()` vào lớp `Student` để in thông tin theo format: "Sinh viên A có điểm là 10"

class Student:
    def __init__(self, name="", diem=0):
        self.name = name
        self.diem = diem
    def display(self):
        print(f"Sinh viên {self.name} có điểm là {self.diem}")
def get_Student():
    name = input("Tên: ")
    diem = input("Điểm: ")
    return Student(name, diem)
def main():
    student = get_Student()
    student.display()
if __name__ == "__main__":
    main()






