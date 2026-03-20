# bài tập 1 :u: Biểu đồ cột
#
# • Một lớp có kết quả học tập như sau: Xuất sắc: 6, Giỏi: 10, Trung bình: 12, Yếu: 4, Kém: 1
#
# • Vẽ biểu đồ cột thể hiện dữ liệu trên
#
# • Thêm tiêu đề và nhãn cho các trụ
'''
from matplotlib import pyplot as plt
ket_qua = ['Xuất sắc', 'Giỏi', 'Trung bình', 'Yếu','Kém']
so_luong = [6,10,12,4,1]
plt.bar(ket_qua, so_luong)
plt.title("Kết quả học tập")
plt.xlabel("kết quả")
plt.ylabel("số lượng")
plt.show()
'''
# bài 2: : Nhiều đồ thị trên cùng một biểu đồ
#
# • Vẽ 2 hàm số: 𝑦=𝑥2 (màu xanh), 𝑦=𝑥3 (màu đỏ)
#
# • Hiển thị cả hai trên cùng một biểu đồ
#
# • Thêm chú thích (legend) để phân biệt từng đường
'''
from matplotlib import pyplot as plt
import numpy as np

x = np.arange(-5, 5, 0.0001)
y = x**2
z = x**3
plt.figure(figsize=(5.5, 2))
plt.subplot(1, 2, 1)
plt.plot(x, y, 'b')
plt.subplot(1, 2, 2)
plt.plot(x, z, 'r')
plt.show()
'''

'''
# bài 3: Biểu đồ tròn (Pie Chart)
#
# • Thể hiện phần trăm doanh số của 5 sản phẩm: A: 30%, B: 25%, C: 15%, D: 20%, E: 10%
#
# • Vẽ biểu đồ tròn có kèm nhãn

from matplotlib import pyplot as plt
nhan = ['A', 'B', 'C', 'D', 'E']
phan_tram = [30, 25, 15, 20, 10]
plt.pie(phan_tram, labels=nhan, autopct='%1.1f%%')
plt.title('Phần trăm danh số của các sản phẩm')
plt.show()
'''
# bài 4:: Biểu đồ Cột Ngang – Xếp hạng Diện tích Thành phố Viết chương trình hiển thị Top 10 thành phố lớn nhất theo diện tích ở California bằng biểu đồ cột ngang
# Gợi ý:
# • Sử dụng cột area_total_km2
# • Sắp xếp dữ liệu theo diện tích giảm dần
# • Dùng plt.barh

import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('california_cities.csv')
top_10 = df.sort_values(by='area_total_km2', ascending=False).head(10)
plt.barh(top_10['city'], top_10['area_total_km2'], color='skyblue')
plt.xlabel('Diện tích (km2)')
plt.ylabel('Thành phố')
plt.title('Top 10 thành phố lớn nhất California theo diện tích')
plt.gca().invert_yaxis()
plt.show()

