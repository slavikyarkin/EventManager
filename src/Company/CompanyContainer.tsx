import { loadCompany } from './CompanyActions'

let LoadCompany = ({ }) => {
  let input:String

  return (
    <div>
      {/* <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(loadCompany(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Get Company
        </button>
      </form> */}
    </div>
  )
}

// LoadCompany = connect()(LoadCompany)

export default LoadCompany;
