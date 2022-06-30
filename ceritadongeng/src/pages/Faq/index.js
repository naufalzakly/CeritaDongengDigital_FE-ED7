import React from "react";
import NavbarHome from "../../component/navbar/index";
import Footer from "../../component/footer/index";
import { Accordion, Container } from "react-bootstrap";
import SectionTitle from "../../component/sectionTitle/index";
import "./index.css";

const Faq = () => {
  return (
    <>
      <NavbarHome />
      <Container className="faq">
        <SectionTitle title="frequently asked questions (FAQ)" />
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Bagaimana cara saya mendaftar akun baru
            </Accordion.Header>
            <Accordion.Body>
              Kamu dapat membuat akun baru dengan mengunjungi halaman register
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Bagaimana Cara menemukan daftar bacaan saya
            </Accordion.Header>
            <Accordion.Body>
              Kamu bisa menemukan daftar bacaan kamu dengan login terlebih
              dahulu, kemudian ke menu profil dan disana akan terdapat menu
              untuk menuju halaman daftar bacaan.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Mengapa suara bacaan tidak terdengar
            </Accordion.Header>
            <Accordion.Body>
              Terdapat beberapa faktor yang dapat menyebabkan suara dari pembaca
              buku tidak terdengar.
            </Accordion.Body>
            <Accordion.Body>
              1. Pastikan bahwa speaker perangkat anda aktif dan berfungsi
            </Accordion.Body>
            <Accordion.Body>
              2. Gunakan perangkat tambahan pengeras suara untuk memastikan bawa
              perangkat bekerja dengan baik
            </Accordion.Body>
            <Accordion.Body>
              3. Pastikan akses koneksi internet anda baik sehingga situs dapat
              dimuat dengan baik
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <Footer />
    </>
  );
};

export default Faq;
