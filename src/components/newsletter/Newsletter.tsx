import React from 'react';

const SubscribeForm = () => {
  return (
    <div
      id="mc_embed_signup"
      className="bg-white clear-left font-helvetica font-sans text-base px-4 py-2 w-96"
    >
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
        rel="stylesheet"
        type="text/css"
      />
      <style type="text/css">
        {`
              #mc_embed_signup { background: #fff; clear: left; font: 14px Helvetica, Arial, sans-serif; width: 600px; }
              /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block. */
            `}
      </style>
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
            <input
              type="text"
              name="b_a55c1e33464aaa3993284fcb0_6d29289de3"
              tabIndex={-1}
              value=""
            />
          </div>
          <div className="optionalParent">
            <div className="clear foot">
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                value="Suscribirse"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;
