import React from 'react'

const Newsletter = () => {
  return (
    <section className="newsletter_section newsletter_padding border-top">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="newsletter_inner d-flex justify-content-between align-items-center">
                    <div className="newsletter_text">
                        <h3>Nhận thông tin cập nhật</h3>
                        <p>Bằng cách đăng ký nhận bản tin hàng tuần của chúng tôi</p>
                    </div>
                    <div className="newsletter_subscribe">
                        <form id="mc-form">
                            <input className="border-0" id="mc-email" type="email"
                                placeholder="Nhập địa chỉ email" />
                            <i className="icon-envelope-open icons"></i>
                            <button className="border-0" id="mc-submit">Đăng kí</button>
                        </form>
                        <div className="mailchimp-alerts text-centre">
                            <div className="mailchimp-submitting"></div>
                            <div className="mailchimp-success"></div>
                            <div className="mailchimp-error"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Newsletter