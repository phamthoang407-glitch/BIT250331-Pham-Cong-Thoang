# BÀi tập 1: Viết hàm nhận vào một tuple các số nguyên và trả về :
#+ Tổng
#+ Giá trị lớn nhất
#+ Giá trị nhỏ nhất
'''
def main():
    so_nguyen = get_so_nguyen()
    tong = get_tong(so_nguyen)
    GTLN = get_GTLN(so_nguyen)
    GTNN = get_GTNN(so_nguyen)
    print(f"Tổng của các số nguyên là: {tong}")
    print(f"Giá trị lớn nhất là: {GTLN}")
    print(f"Giá trị nhỏ nhất là: {GTNN}")
def get_so_nguyen():
        chuoi = input("Nhập vào các số nguyên : ")
        return list(map(int, chuoi.split()))
def get_tong(ds):
        return sum(ds)
def get_GTLN(ds):
        return max(ds)
def get_GTNN(ds):
        return min(ds)
if __name__ == "__main__":
        main()

'''# BÀi 2;Tạo dictionary lưu tên sinh viên làm key và điểm số làm value.
# Viết hàm tính điểm trung bình của các sinh viên
# (Ví dụ: Nếu có 3 sinh viên thì sẽ tính tổng số điển chia cho 3).
'''
def tao_dictionary():
    sinh_vien = {
        "Phú": 8,
        "Kiệt": 7.5,
        "Hải": 10
    }
    return sinh_vien
def tinh_diem_trung_binh(ds):
    tong = sum(ds.values())
    so_sv = len(ds)
    return tong / so_sv
def main():
    ds_sinh_vien = tao_dictionary()
    print("Danh sách sinh viên và điểm số:", ds_sinh_vien)
    dtb = tinh_diem_trung_binh(ds_sinh_vien)
    print(f"Điểm trung bình của các sinh viên là: {dtb:.2f}")
if __name__ == "__main__":
    main()
'''
'''
# BÀi 3 Viết chương trình kiểm tra một key có tồn tại trong dictionary hay không.
def main():
    sinh_vien = {
        "Phú": 8,
        "Kiệt": 7.5,
        "HẢi": 9
    }
    ten = input("Nhập tên sinh viên cần kiểm tra: ")
    if ten in sinh_vien:
        print(f"Sinh viên {ten} có trong danh sách, điểm số là {sinh_vien[ten]}")
    else:
        print(f"Sinh viên {ten} không có trong danh sách.")
if __name__ == "__main__":
    main()
'''
'''
#BÀi 4;Tạo lớp Hoa có các thuộc tính: Tên, Màu .
# Tạo một đối tượng và in thông tin Hoa bằng hàm print() sử dụng đối tượng vừa tạo.
class Hoa:
    def __init__(self, ten, mau):
        self.ten = ten
        self.mau = mau
    def __str__(self):
        return f"Hoa: {self.ten}, Màu: {self.mau}"
hoa_hong = Hoa("Hoa Hồng", "Đỏ")

print(hoa_hong)
'''
# bÀI 5: Tạo lớp Product với thuộc tính _price và getter/setter kiểm tra giá > 0.
# Viết hàm __str__ để in thông tin price của product.
class Product:
    def __init__(self, price):
        self._price = None
        self.price = price
    @property
    def price(self):
        return self._price
    @price.setter
    def price(self, value):
        if value > 0:
            self._price = value
        else:
            raise ValueError("Giá sản phẩm phair lớn hơn 0")
    def __str__(self):
        return f"Product price: {self._price}"
p = Product(100)
print(p)
try:
    p.price = -2
except ValueError as e:
    print("Lỗi:", e)
