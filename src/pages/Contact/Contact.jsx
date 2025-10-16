import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="contact__title">Contact Us</h2>
        <p className="contact__desc">
          Agar siz Dehqonobod haqida ko‘proq bilmoqchi bo‘lsangiz yoki takliflaringiz
          bo‘lsa, biz bilan bog‘laning. Sizning fikringiz biz uchun muhim!
        </p>

        <div className="contact__content">
          <form className="contact__form">
            <div className="form__group">
              <label>Ismingiz</label>
              <input type="text" placeholder="Ismingizni kiriting" required />
            </div>
            <div className="form__group">
              <label>Email manzilingiz</label>
              <input type="email" placeholder="Email manzil" required />
            </div>
            <div className="form__group">
              <label>Xabaringiz</label>
              <textarea rows="5" placeholder="Xabar yozing..." required></textarea>
            </div>
            <button type="submit" className="btn">Yuborish</button>
          </form>

          <div className="contact__info">
            <h3>Manzilimiz</h3>
            <p>Dehqonobod, Farg'ona viloyati, O‘zbekiston</p>
            <h3>Telefon</h3>
            <p>+998 94 436 17 83</p>
            <h3>Email</h3>
            <p>info@dehqonobod.uz</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
