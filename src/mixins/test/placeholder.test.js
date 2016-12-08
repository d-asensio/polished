// @flow
import placeholder from '../placeholder'

describe('placeholder', function() {

    const styles = {
      'color': 'blue',
      'font-size': '12px',
    }

  it('should properly pass styles object and parent', function() {
    expect({
      input: {
        ...placeholder(styles,'input')
      }
    }).toMatchSnapshot()
  })

  it('should properly add rules when block has existing rules', function() {
    expect({
      input: {
        'background': 'white',
        ...placeholder(styles,'input')
      }
    }).toMatchSnapshot()
  })

  it('should properly default to & when not passed a parent', function() {
    expect({
      input: {
        ...placeholder(styles)
      }
    }).toMatchSnapshot()
  })

})
