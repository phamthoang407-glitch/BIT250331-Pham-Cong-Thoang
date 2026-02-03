### bài 1
'''
x = 0
n = int(input("Nhập số từ 1 đến 9:"))
if 1 <= n <= 9:
          for x in range(1,11):
            print(f"{n}x{x}={n*x}")
else :
    print(" Giá trị đã nhập không đúng")
'''
### bài 2
'''
n = input("Nhập số nguyên dương:")
n = int(n)
if n < 2 :
    print(f"Số {n} không phải số nguyên tố")
else:
    ketqua = True
    for i in range(2,n-1):
        n % i == 0;
        ketqua = False
        break
    if ketqua:
        print(f" Số {n} là số nguyên tố")

    else:
         print(f"Số {n} không phải số nguyên tố")
'''
### bài 3
'''
n = int(input("Nhập số lượng phần tử Fibonacci : "))
a, b = 0, 1
count = 0
while count < n:
    print(a, end=" ")
    a, b = b, a + b
    count += 1
'''
### Bài 4
'''
n = input(" Nhập một số :")
tong = 0
for i in n:
    tong += int(i)
print(f"Tổng các chữ số là {tong}")
'''
### Bài 5
'''
n = input(" Nhập vào một chuỗi :")
m = input(" Nhập vào một kí tự :")
so_lan = n.count(m)
print(f"so_lan = {so_lan}")
'''
### Bài 6
'''
def giai_thua(n):
    if n == 0 or n == 1:   
        return 1
    else:
        return n * giai_thua(n - 1) 
so = int(input("Nhập số: "))
print("Giai thừa của", so, "là:", giai_thua(so))
'''
### Bài 7
'''
a = int(input("Nhập số nguyên dương thứ nhất: "))
b = int(input("Nhập số nguyên dương thứ hai: "))
if a <= 0 or b <= 0:
    print("Nhập lại số nguyên dương!")
else:
    usc = 1
    for i in range(1, min(a, b) + 1):
        if a % i == 0 and b % i == 0:
            gcd = i
    print(f"Ước số chung lớn nhất của {a} và {b} là: {usc}")
'''
### bài 8
'''
n = input("Nhập số nguyên dương: ")
dao = n[::-1]
print("Số sau khi đảo ngược là:", dao)
'''
### bài 9
'''
n = input(" Nhập vào một sóo nguyên dương có 5 chữ số :")
if len(n) == 5:
    lon_nhat = max(n)
    print(f"Chữ số lớn nhất là :",lon_nhat)
else:
    print("Nhâp lại")
'''
### bài 10
'''
def tong(n):
    if n == 1:
        return 1
    else:
        return n + tong(n - 1)
n = int(input("Nhập một số nguyên dương: "))
if n > 0:
    print(f"Tổng các số từ 1 đến {n} là:", tong(n))
else:
    print("Vui lòng nhập số nguyên dương!")
'''
### bài 11
'''
n = input(" Nhập vào số điểm của bạn :")
n = int(n)
if n>=8:
    print("Giỏi")
elif 6.5<n<7.9:
    print("Khá")
elif 5<n<6.4:
    print("Trung bình")
elif 0<n<5:
    print("Yếu")
else:
    print("Nhập lại")
'''
### bài 12
'''
n = int(input("Nhập một số nguyên dương: "))
tong = 0
for i in range(1, n + 1):
    if i % 2 != 0:
        tong += i
print(f"Tổng các số lẻ từ 1 đến {n} là: {tong}")
'''
### bài 13
'''
mat_khau = ""
while mat_khau != "python123":
    mat_khau = input("Nhập mật khẩu: ")
print("Đăng nhập thành công!")
'''
### bài 14
'''
n = int(input("Nhập một số nguyên dương: "))

if n < 2:
    print(f"{n} không phải là số nguyên tố")
else:
    la_nguyen_to = True
    for i in range(2, int(n**0.5) + 1): 
        if n % i == 0:
            la_nguyen_to = False
            break
    if la_nguyen_to:
        print(f"{n} là số nguyên tố")
    else:
        print(f"{n} không phải là số nguyên tố")
'''
### bài 15
'''
n = int(input("Nhập một số nguyên dương: "))
tong = 0
while n > 0:
    so = n % 10
    tong += so
    n //= 10
print("Tổng các chữ số là:", tong)
'''





