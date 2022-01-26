import React from "react";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Container } from "./fasonuretimcs";

const Fasonuretim = () => {
  return (
    <Container>
      <Link to="#" className="fason_link">
        <h3>
          <div className="fason_header_icon">
            <FaLink />
          </div>
          Fason Üretimi
        </h3>
      </Link>
      <p className="fason_text">
        {" "}
        Firmamıza fason ürün üretimi için müracaat ettiğinizde, öncelikle
        isteklerinizi ve sizin için önemli olan noktalar konusunda anlaşma
        sağlamamız gerekiyor. Bu amaçla, diğer süreçler öncesinde ilk
        yapacağımız şey sizinle samimi bir toplantı gerçekleştirerek üretimin
        tüm aşamalarında nasıl bir yol izlememiz gerekeceğine karar vermek
        olacak. Analiz sürecinde, istekleriniz ile tecrübemizi birleştirip
        izlenmesi gereken en doğru yolu buslacağımıza inanıyoruz. Süreç
        başlangıcında neyi, nasıl yapacağımız hususunda genel bir çerçeve çizmiş
        olacağız. Süreç başlangıcında aşağıdaki aşamaları izleyeceğiz
      </p>

      <div className="fason_index">
        <ul className="index_ul">
          <li className="ul_items">Ar-Ge Desteği</li>
          <li className="ul_items">Formülasyon Desteği</li>
          <li className="ul_items">Marka, Ruhsat ve Bakanlık Belgeleri</li>
          <li className="ul_items">Grafik Tasarım Desteği</li>
          <li className="ul_items">Ambalaj Desteği</li>
          <li className="ul_items">Depo Desteği</li>
          <li className="ul_items">Danismanlik Hizmetleri</li>
        </ul>
      </div>
    </Container>
  );
};

export default Fasonuretim;
