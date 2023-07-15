import React from 'react'
import styled from 'styled-components'

function StudentCard({ student }) {
  return (
    <>
      <MainContainer>
        <Cover>
          <Items>
            <ListItem type="slno">{student.id}</ListItem>
            <ListItem type="name">
              <StudentDetails>
                <StudentName>{student.name}</StudentName>
                <StudentId></StudentId>
              </StudentDetails>
            </ListItem>
            <ListItem type="date">
              {student.country} {student.phone}
            </ListItem>

            <ListItem type="topics">
              {student.topics ? student.topics : '-'}
            </ListItem>

            <ListItem type="date">
              <StatusData status={student.student_status}>
                {student.student_status}
              </StatusData>
            </ListItem>
          </Items>
        </Cover>
      </MainContainer>
    </>
  )
}

export default StudentCard

const MainContainer = styled.div`
  color: #fff;
  cursor: pointer;
`
const Cover = styled.div`
  border-top: 2px solid #161619;
`
const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`
const ListItem = styled.li`
  color: #000;
  width: ${(props) =>
    props.type === 'slno'
      ? '5%'
      : props.type === 'name'
      ? '10%'
      : props.type === 'topics'
      ? '5%'
      : props.type === 'status'
      ? '15%'
      : props.type === 'date'
      ? '10%'
      : '25%'};
  display: ${(props) =>
    props.type === 'name' ? 'flex' : props.type === 'name' ? 'flex' : ''};
  align-items: center;
  justify-content: ${(props) => (props.type === 'name' ? 'left' : '')};
  text-align: ${(props) =>
    props.type === 'status'
      ? 'right'
      : props.type === 'topics'
      ? 'center'
      : ''};
  font-size: 14px;
  :last-child {
    text-align: right;
  }
  & b {
    color: ${(props) =>
      props.status === 'download'
        ? '#1DB762'
        : props.status === 'notDownload'
        ? '#b03f5b'
        : '#fff'};
    padding: ${({ status }) =>
      status === 'download' || status === 'notDownload' ? '10px 0px' : ''};
    border-radius: 10px;
  }
`

const StudentDetails = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`
const StudentId = styled.p`
  font-size: 14px;
  color: #1ec569;
  font-family: 'gordita_regular';
`
const StudentName = styled.p`
  color: #000;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'gordita_regular' !important;
  text-transform: capitalize;
`

const StatusData = styled.div`
  font-size: 14px;
  font-family: 'gordita_regular';
  color: ${({ status }) =>
    status === 'Exam completed'
      ? '#1DB762'
      : status === 'Not enrolled'
      ? '#C73838'
      : status === 'Exam Unlocked'
      ? '#6EABFF'
      : null};
`
