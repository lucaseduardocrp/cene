import { styled } from "styled-components";

const Container = styled.div`
  img{
    width: 35rem;
    height: 35rem;
    border-radius: 2rem;
  }

  h4, p{
    color: var(--grey);
    font-weight: 400;
  }

  h4{
    font-size: var(--h4-font);
    margin-top: 1rem;
  }
  
 >p{
    font-size: var(--p-font);
    padding: 0;
  }
`

// eslint-disable-next-line react/prop-types
export default function ScheduleCard({day, hours, src, alt}) {
  return (
    <Container>
      <img src={src} alt={alt} />
      <h4>{day}</h4>
      <p>{hours}</p>
    </Container>
  )
}

