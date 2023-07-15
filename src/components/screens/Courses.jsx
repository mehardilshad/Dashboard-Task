import React, { useState } from 'react'
import styled from 'styled-components'
import SectionLoader from '../genaral/Loader/SectionLoader'
import StudentCard from './dashboard/StudentCard'
import CourseCard from './dashboard/CourseCard'

const Courses = () => {
  const [isLoading, setLoading] = useState(false)
  const [students, setStudents] = useState([])

  console.log(students, 'studentsstudentsstudentsstudents')

  const user_data = [
    {
      id: 1,
      name: 'Course 1',
      duration: '4hrs',
      topics: '1',
      enrolled: '2',
    },
    {
      id: 2,
      name: 'Course 2',
      duration: '12hrs',
      topics: '3',
      enrolled: '1',
    },
    {
      id: 3,
      name: 'Course 3',
      duration: '42hrs',
      topics: '10',
      enrolled: '3',
    },
    {
      id: 4,
      name: 'Course 4',
      duration: '10hrs',
      topics: '4',
      enrolled: '5',
    },
    {
      id: 5,
      name: 'Course 5',
      duration: '15hrs',
      topics: '8',
      enrolled: '10',
    },
  ]

  return (
    <>
      <Cover id="main">
        <Container>
          <LeftContainer>
            <Heading>
              <Left>
                <h3>Courses</h3>
              </Left>
            </Heading>
            <Top className="Top">
              <div className="top">
                <List>
                  <ListItem type="slno">Sl no.</ListItem>
                  <ListItem type="name">Name</ListItem>
                  <ListItem type="date">Topics</ListItem>
                  <ListItem type="slno">Duration</ListItem>
                  {/* <ListItem type="slno">Enrolled students</ListItem> */}
                </List>
                {isLoading ? (
                  <SectionLoader />
                ) : (
                  <>
                    {user_data.length > 0 ? (
                      <UserCardCover>
                        {user_data.map((user_data, index) => (
                          <CourseCard student={user_data} />
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

export default Courses

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
