const Trang2 = () => {
  const dssv = [
    {
      id: 1,
      hoten: "Nguyễn Văn An",
      lop: "K19",
      email: "abc@1234.edu.vn",
      anh: "https://htmediagroup.vn/wp-content/uploads/2022/11/Anh-58-copy-min.jpg.webp",
    },
    {
      id: 2,
      hoten: "Trần Văn Bình",
      lop: "K19",
      email: "abc@1234.edu.vn",
      anh: "https://htmediagroup.vn/wp-content/uploads/2022/08/Anh-cong-so-1-min.jpg.webp",
    },
    {
      id: 3,
      hoten: "Hà Thị Hiền",
      lop: "K19",
      email: "abc@cuong.edu.vn",
      anh: "https://smilemedia.vn/wp-content/uploads/2022/08/Concept-chup-anh-ca-nhan-chan-dung.jpg",
    },
    {
      id: 4,
      hoten: "Nguyễn Kiều Hải My",
      lop: "K19",
      email: "abc@cuong.edu.vn",
      anh: "https://studiochupanhdep.com//Upload/Images/Album/anh-beauty-01.jpg",
    },

    {
      id: 5,
      hoten: "Nguyễn Thị Hòa Minzi",
      lop: "K19",
      email: "hoaminzi@gdu.edu.vn",
      anh: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1OnhWi.img?w=720&h=960&m=6&x=247&y=169&s=278&d=278",
    },
  ];

  return (
    <div className="student-grid-container">
      {" "}
      {/* <--- THAY THẾ STYLE INLINE */}
      <div className="student-grid">
        {" "}
        {/* <--- THAY THẾ STYLE INLINE */}
        {dssv.map((motsinhvien) => (
          <div
            key={motsinhvien.id}
            className="student-card" // <--- THAY THẾ STYLE INLINE
          >
            <img src={motsinhvien.anh} alt={motsinhvien.hoten} />
            <h3>{motsinhvien.hoten}</h3>
            <p>{motsinhvien.lop}</p>
            <p>{motsinhvien.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trang2;
