import React, { useState } from 'react'
import styled from 'styled-components'
import SectionLoader from '../genaral/Loader/SectionLoader'
import StudentCard from './dashboard/StudentCard'

const Students = () => {
  const [isLoading, setLoading] = useState(false)
  const [students, setStudents] = useState([])

  console.log(students, 'studentsstudentsstudentsstudents')

  const user_data = [
    {
      id: 1,
      country: '+91',
      name: 'john doe',
      phone: '1111111111',
      student_status: 'Enrolled',
      topics: '1',
    },
    {
      id: 2,
      country: '+91',
      name: 'john doe',
      phone: '222222222',
      student_status: 'Completed',
      topics: '9',
    },
    {
      id: 3,
      country: '+91',
      name: 'john doe',
      phone: '33333333',
      student_status: 'Enrolled',
      topics: '1',
    },
    {
      id: 4,
      country: '+91',
      name: 'john doe',
      phone: '4444444',
      student_status: 'Started',
      topics: '1',
    },
    {
      id: 5,
      country: '+91',
      name: 'john doe',
      phone: '55555555',
      student_status: 'completed',
      topics: '12',
    },
    {
      id: 6,
      country: '+91',
      name: 'john doe',
      phone: '1111111111',
      student_status: 'Started',
      topics: '6',
    },
    {
      id: 7,
      country: '+91',
      name: 'john doe',
      phone: '222222222',
      student_status: 'Enrolled',
      topics: '18',
    },
    {
      id: 8,
      country: '+91',
      name: 'john doe',
      phone: '33333333',
      student_status: 'Started',
      topics: '1',
    },
    {
      id: 9,
      country: '+91',
      name: 'john doe',
      phone: '4444444',
      student_status: 'completed',
      topics: '19',
    },
  ]

  return (
    <>
      <Cover id="main">
        <Container>
          <LeftContainer>
            <Heading>
              <Left>
                <h3>Students</h3>
              </Left>
            </Heading>
            <Top className="Top">
              <div className="top">
                <List>
                  <ListItem type="slno">Sl no.</ListItem>
                  <ListItem type="name">Name</ListItem>
                  <ListItem type="date">Phone Number</ListItem>
                  <ListItem type="slno">Topic</ListItem>
                  <ListItem type="status">Status</ListItem>
                </List>
                {isLoading ? (
                  <SectionLoader />
                ) : (
                  <>
                    {user_data.length > 0 ? (
                      <UserCardCover>
                        {user_data.map((user_data, index) => (
                          <StudentCard student={user_data} />
                        ))}
                      </UserCardCover>
                    ) : (
                      <ImageBox>
                        <CardImage
                          src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/yiaai/01-02-2022/images/not_loaded.svg"
                          alt="Image"
                        />
                      </ImageBox>
                    )}
                  </>
                )}
              </div>
            </Top>
          </LeftContainer>
        </Container>
      </Cover>
    </>
  )
}

export default Students

const Cover = styled.div`
  overflow-x: scroll;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  /* min-width: 1600px; */
  width: 100%;
`
const LeftContainer = styled.div`
  width: ${({ selected }) => (selected ? '60%' : '100%')};
  transition: 1s ease;
  max-height: calc(100vh - 100px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`
const Left = styled.div`
  width: 50%;
  h3 {
    font-size: 20px;
    font-family: 'gordita_medium';
    color: #000;
    @media all and (max-width: 768px) {
      font-size: 18px;
    }
  }
`
const Top = styled.div`
  background: #fff;
  border-radius: 8px;
  border: 2px solid;
  .top {
    overflow-x: scroll;
    ::-webkit-scrollbar {
      display: none;
      /* padding: 20px; */
    }
  }
`
const List = styled.ul`
  display: flex;
  padding: 25px;

  min-width: 980px;
  color: #b1b1b1;
  justify-content: space-between;
`

const ListItem = styled.li`
  color: #000;
  font-family: 'gordita_medium';
  width: ${(props) =>
    props.type === 'slno'
      ? '5%'
      : props.type === 'name'
      ? '10%'
      : props.type === 'status'
      ? '10%'
      : props.type === 'date'
      ? '10%'
      : '25%'};

  text-align: ${(props) => (props.type === 'status' ? 'right' : '')};
  font-size: 14px;
`
const UserCardCover = styled.div`
  min-width: 980px;
`
const ImageBox = styled.div`
  margin: 0 auto;
  width: 20%;
  margin-top: 100px;

  height: 100vh;
  @media all and (max-width: 980px) {
    width: 200px;
  }
`
const CardImage = styled.img`
  width: 100%;
  display: block;
`
