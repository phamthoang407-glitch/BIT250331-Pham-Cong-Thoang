const questions = [

    // ==========================
    // CHỦ ĐỀ 1: MẬT KHẨU & XÁC THỰC
    // ==========================

    {
        id: 1,
        category: "Mật khẩu & Xác thực",
        difficulty: "Dễ",

        question: "Một mật khẩu nào dưới đây được xem là an toàn nhất?",

        options: [
            "12345678",
            "password123",
            "Thoang2007",
            "T@9kLm#42pQ"
        ],

        answer: 3,

        explanation:
        "Mật khẩu mạnh nên chứa chữ hoa, chữ thường, số và ký tự đặc biệt. Không nên dùng thông tin cá nhân."
    },


    {
        id: 2,
        category: "Mật khẩu & Xác thực",
        difficulty: "Trung bình",

        question:
        "Xác thực hai yếu tố (2FA) giúp bảo vệ tài khoản bằng cách nào?",

        options: [
            "Tăng tốc độ đăng nhập",
            "Yêu cầu thêm một bước xác minh ngoài mật khẩu",
            "Làm mật khẩu ngắn hơn",
            "Cho phép chia sẻ tài khoản an toàn"
        ],

        answer: 1,

        explanation:
        "2FA thêm một lớp bảo vệ như mã OTP, ứng dụng xác thực hoặc thiết bị bảo mật."
    },


    // ==========================
    // CHỦ ĐỀ 2: PHISHING
    // ==========================

    {
        id: 3,
        category: "Phishing",
        difficulty: "Dễ",

        question:
        "Bạn nhận được email yêu cầu đăng nhập vào ngân hàng qua một đường link lạ. Bạn nên làm gì?",

        options: [
            "Bấm ngay để kiểm tra",
            "Nhập thông tin tài khoản",
            "Kiểm tra nguồn gửi và không truy cập link đáng ngờ",
            "Chuyển tiếp email cho bạn bè"
        ],

        answer: 2,

        explanation:
        "Đây có thể là hình thức phishing nhằm đánh cắp tài khoản. Không nên truy cập các đường link không rõ nguồn gốc."
    },


    {
        id: 4,
        category: "Phishing",
        difficulty: "Trung bình",

        question:
        "Dấu hiệu nào thường xuất hiện trong một tin nhắn lừa đảo?",

        options: [
            "Yêu cầu cung cấp mật khẩu hoặc mã OTP",
            "Thông báo từ ứng dụng chính thức",
            "Nội dung rõ ràng",
            "Có địa chỉ website chính xác"
        ],

        answer: 0,

        explanation:
        "Không tổ chức uy tín nào yêu cầu người dùng cung cấp mật khẩu hoặc mã OTP."
    },


    // ==========================
    // CHỦ ĐỀ 3: MÃ ĐỘC
    // ==========================

    {
        id: 5,
        category: "Mã độc",
        difficulty: "Dễ",

        question:
        "Malware là thuật ngữ dùng để chỉ điều gì?",

        options: [
            "Phần mềm thiết kế website",
            "Phần mềm độc hại",
            "Trình duyệt web",
            "Ứng dụng di động"
        ],

        answer: 1,

        explanation:
        "Malware là phần mềm độc hại được tạo ra nhằm phá hoại, đánh cắp dữ liệu hoặc kiểm soát thiết bị."
    },


    {
        id: 6,
        category: "Mã độc",
        difficulty: "Khó",

        question:
        "Ransomware thường thực hiện hành vi nào?",

        options: [
            "Tăng tốc máy tính",
            "Mã hóa dữ liệu và yêu cầu tiền chuộc",
            "Cập nhật hệ điều hành",
            "Bảo vệ tài khoản"
        ],

        answer: 1,

        explanation:
        "Ransomware khóa hoặc mã hóa dữ liệu của nạn nhân và yêu cầu trả tiền để khôi phục."
    },


    // ==========================
    // CHỦ ĐỀ 4: MẠNG XÃ HỘI
    // ==========================

    {
        id: 7,
        category: "Mạng xã hội",
        difficulty: "Dễ",

        question:
        "Khi nhận được tin nhắn Facebook nhờ vay tiền gấp từ người thân, bạn nên làm gì?",

        options: [
            "Chuyển tiền ngay",
            "Gọi điện hoặc xác minh bằng cách khác",
            "Đăng công khai tin nhắn",
            "Gửi mật khẩu Facebook"
        ],

        answer: 1,

        explanation:
        "Kẻ xấu có thể chiếm tài khoản Facebook và giả danh người thân để lừa đảo."
    },


    // ==========================
    // CHỦ ĐỀ 5: WIFI
    // ==========================

    {
        id: 8,
        category: "Wi-Fi & Mạng",

        difficulty: "Trung bình",

        question:
        "Sử dụng Wi-Fi công cộng có thể gây nguy hiểm vì?",

        options: [
            "Mạng quá nhanh",
            "Có nguy cơ bị đánh cắp dữ liệu",
            "Làm hỏng điện thoại",
            "Không thể truy cập Internet"
        ],

        answer: 1,

        explanation:
        "Wi-Fi công cộng không an toàn có thể bị kẻ xấu theo dõi hoặc đánh cắp thông tin."
    },


    // ==========================
    // CHỦ ĐỀ 6: QUYỀN RIÊNG TƯ
    // ==========================

    {
        id: 9,
        category: "Quyền riêng tư",

        difficulty: "Dễ",

        question:
        "Thông tin nào sau đây không nên chia sẻ công khai trên mạng?",

        options: [
            "Món ăn yêu thích",
            "Sở thích cá nhân",
            "Mật khẩu và mã OTP",
            "Bộ phim yêu thích"
        ],

        answer: 2,

        explanation:
        "Mật khẩu và mã OTP là thông tin bảo mật tuyệt đối không được chia sẻ."
    },


    // ==========================
    // CHỦ ĐỀ 7: THÓI QUEN AN TOÀN
    // ==========================

    {
        id: 10,
        category: "Thói quen an toàn",

        difficulty: "Trung bình",

        question:
        "Việc cập nhật hệ điều hành thường xuyên giúp gì?",

        options: [
            "Làm máy nặng hơn",
            "Sửa lỗi bảo mật và cải thiện an toàn",
            "Xóa toàn bộ dữ liệu",
            "Tắt Internet"
        ],

        answer: 1,

        explanation:
        "Các bản cập nhật thường chứa bản vá bảo mật giúp bảo vệ thiết bị."
    }

];


// LƯU Ý: Không dùng "export default" ở đây vì file này được nhúng bằng
// <script src="js/questions.js"></script> (script thường, không có
// type="module"). "export" chỉ hợp lệ trong module -> nếu để export,
// trình duyệt sẽ báo lỗi cú pháp và biến "questions" sẽ KHÔNG tồn tại
// ở phạm vi global, khiến quiz.js không tìm thấy dữ liệu câu hỏi.
// Biến "const questions" khai báo ở trên đã tự động là biến global
// khi chạy như script thường, nên các file khác (quiz.js) dùng được luôn.