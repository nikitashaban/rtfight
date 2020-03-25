import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../components/button'
import Text from '../../components/text'
import Title from '../../components/title'
import Container from '../../components/container'

import './form.less'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sendForm: false,
      btnStatus: 'default',
      formStatusSend: false
    }
    this.sendEmail = this.sendEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async sendEmail(data) {
    const dataForm = {
      createdAt: new Date(),
      formName: this.props.name,
      pageUrl: window.location.href,
      data: {
        ...data
      }
    }
    const result = dataForm
    if (result) {
      this.setState({
        formStatusSend: true
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    let data = {}
    for (let element of event.target.querySelectorAll('input,textarea')) {
      data[element.name] = element.value
    }
    this.sendEmail(data)
  }

  render() {
    const formContent = this.props.elements
      ? this.props.elements.map((element, index) => {
          return (
            <div className="form__item" key={index}>
              {element}
            </div>
          )
        })
      : ''
    const buttonTextContent = this.props.buttonText || 'Apply'
    const formTermsContent = this.props.formTerms ? (
      <Text color={'white'} size={'small'}>
        By clicking Apply, you agree to our Terms, Privacy Policy, Cookie
        Policy.
      </Text>
    ) : (
      ''
    )
    const formStyleClass = this.props.formStyle
      ? ' form_style_' + this.props.formStyle
      : ''
    const formClassName = 'form' + formStyleClass
    //      onSubmit={this.handleSubmit}
    const formContentInside = (
      <form
        className={formClassName}
        ref="form"
        name={this.props.name}
        action={this.props.formAction}
        target={this.props.formTarget}
        method={this.props.formMethod}
      >
        {formContent}
        {formTermsContent}
        <Button
          type={this.props.buttonType}
          size={this.props.buttonSize}
          color={this.props.buttonColor}
          background={this.props.buttonBackground}
        >
          {buttonTextContent}
        </Button>
      </form>
    )

    const formContentAll = this.props.formContainer ? (
      <Container type={'form'} extraClass={this.props.formContainerExtraClass}>
        <Title
          type={'h2'}
          color={'white'}
          size={'little-less'}
          extraClass={'contest__header'}
        >
          {this.props.formTitle}
        </Title>
        {formContentInside}
      </Container>
    ) : (
      <>{formContentInside}</>
    )

    if (this.state.formStatusSend) {
      return (
        <Container type={'form'}>
          <div className="form__send">
            <Title
              type={'h3'}
              color={'white'}
              size={'middle'}
              weight={'normal'}
            >
              Thank You
            </Title>
            <Text>Please, check the email and follow the instructions.</Text>
          </div>
        </Container>
      )
    } else {
      return formContentAll
    }
  }
}

Form.defaultProps = {
  formContainer: false,
  formContainerExtraClass: '',
  formTitle: ''
}

Form.propTypes = {
  formAction: PropTypes.string,
  formMethod: PropTypes.string,
  formTarget: PropTypes.string,
  elements: PropTypes.array.isRequired,
  buttonType: PropTypes.string,
  buttonSize: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonBackground: PropTypes.string,
  buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  formTerms: PropTypes.bool,
  name: PropTypes.string,
  formContainer: PropTypes.bool,
  formContainerExtraClass: PropTypes.string,
  formTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  formStyle: PropTypes.string
}

export default Form
