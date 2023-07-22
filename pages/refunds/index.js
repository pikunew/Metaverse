"use client";

import styles from "../../styles";
import { Navbar, Footer } from "../../components";

const refunds = () => {
  return (
    <>
      <Navbar />

      <section className={`${styles.paddings}`}>
        <Navbar />
        <div className="  mt-16 flex flex-col justify-center text-justify ">
          <div className=" px-32">
            <h3 className=" font-bold text-3xl">Refunds</h3>
            <br />
            <br />
            <p>
              Our policy on refunds is applicable if you participate in any
              service, namely training or where you pay a fee. Donations once
              paid cannot be refunded. To be eligible for a refund, you must
              cancel the participation by sending an email by 6:00 pm of the
              previous day, for example, if the training is on the 30th of
              August, you should send a cancellation email by the 29th of August
              6:00 pm. If you cancel during this time, the entire amount is
              refunded, however, if any cancellation is done post this time, you
              need to forgo the amount. Transfer Yes, we can transfer the amount
              paid for one training to another if you inform us by 6:00 pm of
              the previous day, post this time, we can not transfer the amount
              to the next training. Amount transfer to next training is
              applicable only for training conducted in the same financial year
              as the original training date. However, should a training of
              suitable choice or the same not be available, the amount will be
              refunded. The amount is returned in the same manner in which it is
              received, i.e: the same electronic mode is refunded, the refund
              time is as per the bank and the third party, our refunds are
              processed in 7 days, so you should expect the amount to reach back
              to you within 15 days of your request for cancellation. Government
              deduction or taxes, if applicable can not be refunded and shall be
              informed at the time of refund. Please write to
              empower@mahilabol.org for any more information on this.
            </p>
            .
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default refunds;
