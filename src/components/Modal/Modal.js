import React, { useEffect, useState } from 'react';
import { StyledModal, SuccessBlock } from './Modal.Styled';
import { useTranslation } from 'react-i18next';
import { Formik, Field } from 'formik';
import { Form, InputField, Button, Label, TextLabel } from '../../elements';
import { countries } from '../../countries';
import DropdownSelect from '../../elements/Select/DropdownSelect';
import DropdownPhone from '../../elements/Select/DropdownPhone';
import { ReactComponent as SuccessIcon } from '../../assets/success-icon.svg';
import { capitalize } from '../../utils/functions';

const Modal = ({ show, setShow }) => {
  const { t } = useTranslation();
  const [success, setSuccess] = useState(false);
  const options = countries.map(item => ({ ...item, label: item.value }));

  useEffect(() => {
    show ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'visible');
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <StyledModal className={show ? 'show' : ''} tabindex="-1" role="dialog" show={show}>
      <div className="wrap-div">
        <header>
          <div>
            <h2>{t('partnership')}</h2>
            <button
              className="close"
              onClick={() => {
                setShow(false);
                setSuccess(false);
              }}
            >
              &#10006;
            </button>
          </div>
        </header>

        <section>
          <Formik
            initialValues={{ email: '', name: '', country: '', city: '', phone: '' }}
            validate={values => {
              console.log('validate: ', values);

              const errors = {};

              if (!values.email) {
                errors.email = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }

              if (!values.name) {
                errors.name = t('required');
              }

              if (!values.phone) {
                errors.phone = t('required');
              }

              if (!values.country) {
                errors.country = t('required');
              }

              if (!values.city) {
                errors.city = t('required');
              }

              return errors;
            }}
            onSubmit={values => {
              // async request ...
              setSuccess(true);
            }}
          >
            {({ touched, errors, values, handleChange, handleBlur, handleSubmit, setValues, isValid, dirty }) => (
              <Form onSubmit={handleSubmit}>
                <div style={{ display: `${success ? 'none' : 'block'} ` }}>
                  <h3>Meydançanız üçün pul qazanmağın ən yaxşı yolu!</h3>

                  <div className="mb-20 mb-15_m">
                    <InputField
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Ad Soyad*"
                    />

                    {errors.name ? (
                      <span style={{ color: 'red', fontSize: '11px', fontWeight: 'bold' }}>
                        {capitalize(errors.name)}
                      </span>
                    ) : (
                      ''
                    )}
                  </div>

                  <div className="mb-20 mb-15_m">
                    <DropdownSelect
                      type="text"
                      isSearchable
                      placeHolder="Ölkə*"
                      options={options}
                      onChange={value => setValues({ ...values, country: value.value })}
                    />
                  </div>

                  <div className="mb-20 mb-15_m">
                    <DropdownSelect
                      isSearchable
                      placeHolder="Şəhər*"
                      options={options}
                      onChange={value => setValues({ ...values, city: value.value })}
                    />
                    {errors.city ? (
                      <span style={{ color: 'red', fontSize: '11px', fontWeight: 'bold' }}>
                        {capitalize(errors.city)}
                      </span>
                    ) : (
                      ''
                    )}
                  </div>

                  <div className="mb-20 mb-15_m">
                    <DropdownPhone placeHolder="Mobil nömrə" values={values} setValues={setValues} />
                    {errors.phone ? (
                      <span style={{ color: 'red', fontSize: '11px', fontWeight: 'bold' }}>
                        {capitalize(errors.phone)}
                      </span>
                    ) : (
                      ''
                    )}
                  </div>

                  <InputField
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    name="email"
                    placeholder="Email*"
                  />

                  {errors.email ? (
                    <span style={{ color: 'red', fontSize: '11px', fontWeight: 'bold' }}>
                      {capitalize(errors.email)}
                    </span>
                  ) : (
                    ''
                  )}
                </div>

                <SuccessBlock style={{ display: `${success ? 'block' : 'none'}`, marginTop: '7.625rem' }}>
                  <div className="wrapper wrapper_mb">
                    <div className="wrapper checkmark__wrapper">
                      <SuccessIcon />
                    </div>
                  </div>

                  <h3>Sorğunuz göndərildi!</h3>
                  <p>Qısa bir müddətdə sizinlə əlaqə saxlanılacaq.</p>
                </SuccessBlock>
                
                <Button
                  type="submit"
                  onClick={() => console.log(errors)}
                  className={`${(isValid && dirty) ? 'success' : ''}`}
                  disabled={(isValid && dirty) ? false : true}
                >
                  {t('submit')}
                </Button>
              </Form>
            )}
          </Formik>
        </section>
      </div>
    </StyledModal>
  );
};

export default Modal;
