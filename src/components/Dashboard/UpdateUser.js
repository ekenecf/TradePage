import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Container, From, Wrapper, TextDiv, InputData } from './UpdateUserStyle'
import Axios from 'axios'
import Swal from 'sweetalert2'

const UpdateUser = ({ Display }) => {
  const { userid } = useParams()
  const [data, setData] = useState()

  /* eslint-disable-next-line no-unused-vars*/
  const [last, setLast] = useState('')

  const url = `https://elitegain.onrender.com/api/alluserdata`

  useEffect(() => {
    Axios.get(url).then((res) => setData(res.data.data))
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [])

  useEffect(() => {
    /* eslint-disable-next-line no-unused-expressions */
    return Display
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [])

  const upddatebtn = async (id, e) => {
    const { value: totalDeposit } = await Swal.fire({
      title: e.target.title,
      input: 'text',
      inputLabel: e.target.title,
      inputValue: last,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        }
      },
    })

    if (totalDeposit) {
      Swal.fire(`Your LastDeposit is ${totalDeposit}`)

      let UpdateValues = e.target.title
      let finalData = { UpdateValues, totalDeposit }
      const sentApi = Object.values(finalData)
      const myObject = {}
      myObject[sentApi[0]] = sentApi[1]

      const lastDepositupdate = `https://elitegain.onrender.com/api/${UpdateValues}/${id}`
      Axios.patch(lastDepositupdate, myObject).then((res) => console.log(res))
    }
  }

  return (
    <Container>
      <NavLink to={`/dashboard/${userid}`}>Back to OVERVIEW</NavLink>

      <h1>Update User Data:</h1>

      <From>
        {data?.map((props) => (
          <Wrapper key={props._id}>
            <TextDiv>
              <label>Name:</label>
              <p>
                {props.firstName} {props.lastName}
              </p>
            </TextDiv>

            <TextDiv>
              <label>Email:</label>
              <p> {props.email}</p>
            </TextDiv>

            <InputData>
              <label>last deposit: </label>
              {/* <input type="text" value={last} onChange ={(e)=>{setLast(e.target.value)}}/> */}
              <button
                onClick={(e) => upddatebtn(props._id, e)}
                title={'lastDeposit'}
              >
                update
              </button>
              <span>${props.lastDeposit}</span>
            </InputData>

            <InputData>
              <label>Total Deposit: </label>
              {/*  <input/> */}
              <button
                onClick={(e) => upddatebtn(props._id, e)}
                title={'totalDeposit'}
              >
                update
              </button>
              <span>${props.totalDeposit}</span>
            </InputData>

            <InputData>
              <label>Account balance: </label>
              {/* <input/> */}
              <button
                onClick={(e) => upddatebtn(props._id, e)}
                title={'accountBalance'}
              >
                Update
              </button>
              <span>${props.accountBalance}</span>
            </InputData>

            <InputData>
              <label>Start up deposit: </label>
              {/* <input /> */}
              <button
                onClick={(e) => upddatebtn(props._id, e)}
                title={'startUpDeposit'}
              >
                Update
              </button>
              <span>${props.startUpDeposit}</span>
            </InputData>

            <InputData>
              <label>Total earned: </label>
              {/* <input /> */}
              <button
                onClick={(e) => upddatebtn(props._id, e)}
                title={'totalEarned'}
              >
                Update
              </button>
              <span>${props.totalEarned}</span>
            </InputData>
          </Wrapper>
        ))}
      </From>
    </Container>
  )
}

export default UpdateUser
