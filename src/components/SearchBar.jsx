import styled from 'styled-components'
import { Form } from 'react-router-dom'

const SearchBar = ({ searchTerm }) => {
  return (
    <Wrapper>
      <Form className="form" method="get">
        <div className="input-dev">
          {' '}
          <input
            type="search"
            className="form-input"
            name="search"
            defaultValue={searchTerm}
            // // value={searchTerm === e.target.value}
            // onChange={(e) => {
            //   ;(searchTerm = e.target.value), console.log(searchTerm)
            // }}
          />
          {/* {searchTerm && (
            <button className="delete-btn" onClick={() => setText('')}>
              x
            </button>
          )} */}
        </div>

        <button className="btn" type="click">
          search
        </button>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 6rem;
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input-dev {
    position: relative;
    /* border: solid 3px red; */
  }
  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .delete-btn {
    position: absolute;
    left: 92%;
    top: 10%;

    font-size: 1.25rem;
    font-weight: 700;
    background: transparent;

    border: transparent;
    color: purple;
    cursor: pointer;
    transition: 0.3s ease-in-out all;
  }
`
export default SearchBar
