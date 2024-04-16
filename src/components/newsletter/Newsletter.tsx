import React from 'react';

const SubscribeForm = () => {
  return (
    <div id="mc_embed_shell">
      <div
        id="mc_embed_signup"
        className="py-4 bg-white clear-left font-helvetica font-sans text-base px-4 w-[1/5]"
      >
        <form
          action="https://gmail.us18.list-manage.com/subscribe/post?u=a55c1e33464aaa3993284fcb0&amp;id=6d29289de3&amp;f_id=006421e7f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Suscríbete</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indica que es obligatorio
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Dirección de correo electrónico{' '}
                <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required={true}
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">
                Nombre <span className="asterisk">*</span>{' '}
              </label>
              <input
                type="text"
                name="FNAME"
                className=" text"
                id="mce-FNAME"
                required={true}
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Apellidos </label>
              <input
                type="text"
                name="LNAME"
                className=" text"
                id="mce-LNAME"
              />
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              ></div>
            </div>
            <div
              aria-hidden="true"
              style={{ position: 'absolute', left: '-5000px' }}
            >
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <input
                type="text"
                name="b_a55c1e33464aaa3993284fcb0_6d29289de3"
                tabIndex={-1}
                value=""
              />
            </div>
            <div className="optionalParent" style={{ textAlign: 'right' }}>
              <div className="clear foot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Suscribirse"
                  style={{ backgroundColor: '#90A951' }}
                />
                <p style={{ margin: '0px auto' }}>
                  <a
                    href="http://eepurl.com/iN8CLQ"
                    title="Mailchimp: marketing por correo electrónico fácil y divertido"
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        backgroundColor: 'transparent',
                        borderRadius: '4px',
                      }}
                    >
                      <img
                        className="refferal_badge"
                        src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                        alt="Intuit Mailchimp"
                        style={{
                          width: '220px',
                          height: '40px',
                          display: 'flex',
                          padding: '2px 0px',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        async
      />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);`,
        }}
        async
      />
    </div>
  );
};

export default SubscribeForm;
