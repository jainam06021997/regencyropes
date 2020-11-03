import React from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import BlockTitle from "./BlockTitle";
import PPROPE from "../assets/images/pprope.jpg";
import HDPEROPE from "../assets/images/hdperope.jpg";
import PLASTICSUTLI from "../assets/images/plasticsutli.jpg";

const Pricing = (props) => {
  const [showQuoteModal, setShowQuoteModal] = React.useState(false);
  const [showDetailModal, setShowDetailModal] = React.useState(false);
  const [productToShow, setProductToShow] = React.useState(null);
  const [formFields, setFormfields] = React.useState({
    size: '',
    length: '',
  });
  const [errors, setErrors] = React.useState({
    size: '',
    length: '',
  });
  const [estimatedWeight, setWeight] = React.useState(null);

  const productsList = [
    {
      id: 1,
      name: 'PP Ropes',
      image: PPROPE,
      description: `Sustained researched & development efforts have resulted in growth into a worlds leading manufacturer of syndicate ropes,Our products are produced from blended polymer with a special lay for low weight and high strength, our special blend material ensures excellent abrasion resistance, better value for money as compared to conventional ropes.Weights to strength ratio is less facilitating downsizing vis-à-vis quality brand ropes, unaffected by acids or any alkalis. Quality is a habit we keep, therefore, our pride of workmanship. It is our responsibility to serve and spread services at par at RSPR Are quality brand product enhance performance for successful operations in demanding conditions.Distinctive combination of highest knot breaking strength & excellent abrasion resistance delivers durability and strength ensuring undiminishing performance of the trawl voyage. Ideal twine geometry results in lower operation cost.`,
      applications: [
        {id: 1, label: `Marine`},
        {id: 2, label: `Agriculture`},
        {id: 3, label: `Industrial`},
        {id: 4, label: `Fishing`},
        {id: 5, label: `Commercial`},
      ],
      features: [
        {id: 1, label: 'High Breaking Strengths'},
        {id: 2, label: 'Controlled Elongation'},
        {id: 3, label: 'Negligible water absorption'},
        {id: 4, label: 'Attractive colors'},
        {id: 5, label: 'Light weight'},
        {id: 6, label: `Unaffected by acids & alkaline`},
        {id: 7, label: 'U. V. Stabilized'},
        {id: 8, label: 'Strong and durable'},
        {id: 9, label: 'Smooth fiber surface'},
        {id: 10, label: 'Industries strictest quality standards'},
      ],
      characteristics: [
        {id: 1, label: `Available in various shades like Pearl, Metallic`},
        {id: 2, label: `Customization of size and shape is possible`},
        {id: 3, label: `Around 30 Shade Available`},
      ],
    },
    {
      id: 2,
      name: 'HDPe Ropes',
      image: HDPEROPE,
      description: `This mono rope is manufactured by our adept professionals using high grade HDPE in compliance with set industry norms. By utilizing skills of our experienced professionals, we are able to bring forth a qualitative range of HDPE Rope  for our clients.
      We are well known entity involved in offering supreme quality HDPE Rope. Our experts are backed with next generation manufacturing technique which enables us to present the premium grade HDPE rope. The offered rope is carefully processed with monofilament material that makes it ideal to be used for fishing methods. Further, the offered rope is fabricated as a three strand Z twist rope which is made from premium grade PE and can be ordered from us in varied sizes at a competitive price.`,
      applications: [
        {id: 1, label: `Commercial`},
        {id: 2, label: `Marine & Fishing`},
        {id: 3, label: `Domestics`},
        {id: 4, label: `Trap fishing application`},
        {id: 5, label: `Line haulers`},
        {id: 6, label: `Industrial`},
      ],
      features: [
        {id: 1, label: `Durability`},
        {id: 2, label: `Finely finished`},
        {id: 3, label: `Optimum strength`},
        {id: 4, label: `High strength`},
        {id: 5, label: `Perfect finish`},
        {id: 6, label: `Flexible`},
        {id: 7, label: `High Density Polyethylene Rope`},
      ],
      characteristics: [
        {id: 1, label: `Available in various shades like Pearl, Metallic`},
        {id: 2, label: `Customization of size and shape is possible`},
        {id: 3, label: `Around 30 Shade Available`},
      ],
    },
    {
      id: 3,
      name: 'Plastic Sutli',
      image: PLASTICSUTLI,
      description: `Our range of products include six in one virgin plastic sutli, Regency virgin plastic sutli, Agridon plastic sutli, KisanKraft polypropylene sutli, Black Cobra polypropolyne sutli and Jayshree polypropolyne sutli.
      Available in Various Packing,Colours and Sizes.`,
      applications: [],
      features: [],
      characteristics: [
        {id: 1, label: `Made from 100% PE virgin plastics`},
        {id: 2, label: `Free from hazardous metals`},
      ],
    },
  ];

  const _resetForm = () => {
    setFormfields((prev) => ({
      ...prev,
      size: '',
      length: '',
    }));
    setErrors((prev) => ({
      ...prev,
      size: '',
      length: '',
    }));
  };

  const _handleClose = (modalType) => {
    if (modalType === 'detailModal') {
      setShowDetailModal(false);
    } else if (modalType === 'quoteModal') {
      setShowQuoteModal(false);
      setWeight(null);
      _resetForm();
    }
    setProductToShow(null);
  };

  const _getQuote = (product) => {
    setShowQuoteModal(true);
    setProductToShow(product);
  };

  const _viewDetails = (product) => {
    setShowDetailModal(true);
    setProductToShow(product);
  };

  const isEmpty = (value) => {
    if (value === '' || value === null || value === undefined) {
      return true;
    }
    return value.trim() === '';
  };

  const _validateForm = (field, value) => {
    let hasError = false;
    const isEmptyValue = isEmpty(value);
    if (field === 'size') {
      if (isEmptyValue) {
        hasError = true;
        setErrors((prev) => ({
          ...prev,
          size: isEmptyValue ? 'This field is required' : 'Please enter valid value',
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          size: '',
        }));
      }
    }
    if (field === 'length') {
      if (isEmptyValue) {
        hasError = true;
        setErrors((prev) => ({
          ...prev,
          length: isEmptyValue ? 'This field is required' : 'Please enter valid value',
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          length: '',
        }));
      }
    }
    return hasError;
  };

  const _handleChange = (e) => {
    const {value, name} = e.target;
    setFormfields((prev) => ({
      ...prev,
      [name]: value,
    }));
    _validateForm(name, value);
  };

  const _calculate = (e) => {
    e.preventDefault();
    let errCount = 0;
    Object.keys(formFields).map((field) => {
      errCount = _validateForm(field, formFields[field]) ? errCount + 1 : errCount;
    });
    if (errCount === 0) {
      const {size, length} = formFields;
      const weight = ((parseInt(size) * parseInt(size)) / 2200) * parseInt(length);
      setWeight(weight);
    }
  };

  return (
    <section className="pricing-one" id="products">
      <Container>

      <Modal show={showQuoteModal} onHide={() => _handleClose('quoteModal')}>
        <Modal.Header closeButton>
          <Modal.Title>{productToShow ? productToShow.name : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Row>
            <Col md={12}>
              <h4>Get Estimated Weight</h4>
            </Col>
          </Row>
          <div className="row">
            <div className="col-md-5">
              <label>Enter Rope Size</label>
            </div>
            <div className="col-md-7">
              <div>
                <input type="text" name="size" value={formFields.size} onChange={_handleChange} id="size" />
              </div>
              {errors.size && errors.size !== '' && (
                <em style={{color: '#fd632f'}}>{errors.size}</em>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <label>Enter Rope Length</label>
            </div>
            <div className="col-md-7">
              <div>
                <input type="text" name="length" value={formFields.length} onChange={_handleChange} id="length" />
              </div>
              {errors.length && errors.length !== '' && (
                <em style={{color: '#fd632f'}}>{errors.length}</em>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Button variant="primary" style={{float: 'right'}} onClick={_calculate}>
                Calculate
              </Button>
            </div>
          </div>
          {estimatedWeight && (
            <Row>
              <Col xs={2}></Col>
              <Col xs={8}>
                <p>
                  <b>ESTIMATED WEIGHT: </b>
                  <span>{estimatedWeight}</span>
                </p>
              </Col>
              <Col xs={2}></Col>
            </Row>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => _handleClose('quoteModal')}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={() => {}}>
            Get Quote
          </Button> */}
        </Modal.Footer>
      </Modal>

      <Modal show={showDetailModal} onHide={() => _handleClose('detailModal')} dialogClassName="modal-90w" size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{productToShow !== null ? productToShow.name : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Row>
            <Col md="12">
              <p>{productToShow !== null ? productToShow.description : ''}</p>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <h3>
                <span><b>Features</b></span>
              </h3>
              <ul>
                {productToShow !== null
                  ? (productToShow.features.map((feature) => {
                    return <li key={feature.id}>{feature.label}</li>;
                  }))
                  : null
                }
              </ul>
            </Col>
            <Col md="6">
              <h3>
                <span><b>Application</b></span>
              </h3>
              <ul>
                {productToShow !== null
                  ? (productToShow.applications.map((application) => {
                    return <li key={application.id}>{application.label}</li>;
                  }))
                  : null
                }
              </ul>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => _handleClose('detailModal')}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        <BlockTitle
          textAlign="center"
          paraText=""
          titleText="Our Product Range"
        />
        <div>
          <Row>
            {productsList.map((product) => {
              return (
                <Col lg={4} key={product.id}>
                  <div className="pricing-one__single">
                    <div className="pricing-one__circle"></div>
                    <div className="pricing-one__inner">
                      <img src={product.image} alt="rope" style={{width: 200, height: 220}} />
                      <br />
                      <h3>{product.name}</h3>
                      <br />
                      <button type='button' onClick={() => _getQuote(product)} className="thm-btn pricing-one__btn">
                        <span>GET QUOTE</span>
                      </button>
                      <br />
                      <br />
                      <button type='button' onClick={() => _viewDetails(product)} className="thm-btn pricing-one__btn">
                        <span>VIEW DETAILS</span>
                      </button>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
