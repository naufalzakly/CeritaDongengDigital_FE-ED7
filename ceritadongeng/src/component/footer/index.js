import React from "react";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialInstagram,
  TiHeartFullOutline,
} from "react-icons/ti";
import { BiCopyright } from "react-icons/bi";
import "./index.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container-fluid">
        <div className="row">
          {/* kolom 1 */}
          <div className="col-md-3 col-sm-6 ml-2">
            <h6>Logo</h6>
            <ul className="list-unstyled">
              <li>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</li>
              <li><button className="btn btn-primary mx-2"> Logo YABB </button><button className="btn btn-primary "> Logo YABB </button></li>
            </ul>
          </div>
          {/* kolom 2 */}
          <div className="col-md-3 col-sm-6">
            <h6>Profile</h6>
            <ul className="list-unstyled">
              <li><a href="./index">About Us</a></li>
              <li><a href="./index">Legal Information</a></li>
              <li><a href="./index">Contact Us</a></li>
              <li><a href="./index">Team</a></li>
            </ul>
          </div>
          {/* kolom 3 */}
          <div className="col-md-3 col-sm-6">
            <h6>Pusat Bantuan</h6>
            <ul className="list-unstyled">
              <li><a href="./index">Komunitas</a></li>
              <li><a href="./index">Referensi</a></li>
              <li><a href="./index">FAQs</a></li>
              <li><a href="./index">informasi Cerita</a></li>
            </ul>
          </div>
          {/* kolom 4 */}
          <div className="col-md-3 col-sm-6">
            <h6>Kontak</h6>
            <ul className="list-unstyled">
              <li><a href="./index">WhatsApp</a></li>
              <li><a href="./index">Email:</a></li>
              <li><a href="./index">Lokasi:</a></li>
            </ul>
            <TiSocialFacebook size="2em" />
            <TiSocialInstagram size="2em" />
            <TiSocialTwitter size="2em" />
          </div>
        </div>

        {/* footer bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            <BiCopyright /> 2022 | All rights reserved
          </p>
          <p className="text-xs-center">
            Created with <TiHeartFullOutline /> by Team ED_7
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
