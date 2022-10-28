import React from 'react'

import MinhNgoc from '../image/MinhNgoc.jpg'
function About() {
  return (
    <div className="container-about">
    <div>
      <div className="title-heading">Sinh Viên Thực Hiện</div>
      <img
        className="image-about"
        src={MinhNgoc}
        alt="Vương Minh Ngọc avatar"
      />
    </div>

    <div className="container-desc__wrapper">
      <div className="container-desc">
        <p className="context">Họ và tên: Vương Minh Ngọc</p>
        <p className="context">MSSV: 46.01.104.124</p>
        <p className="context">Email: ngocvuong443@gmail.com</p>
        <p className="context">Khoa: Công nghệ thông tin</p>
        <p className="context">Trường: Đại học Sư phạm TP.HCM</p>
        <p className="context">Lớp: 2211COMP1031</p>
      </div>
    </div>
  </div>
  )
}

export default About
