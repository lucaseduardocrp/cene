import { styled } from "styled-components";

const Container = styled.div`
  img{
    width: 35rem;
    height: 35rem;
    border-radius: 2rem;
  }

  .scheduleText{
    margin-top: 1rem;
    
   h4, p{
    color: var(--grey);
    font-weight: 500;
   }
   
    h4{
      font-size: var(--h4-font);
    }
      
    >p{
      font-size: var(--p-font);
      padding: 0;
    }
  }
`;

// eslint-disable-next-line react/prop-types
export default function ScheduleCard({day, hours, src, alt}) {
  return (
    <Container data-aos="zoom-in" data-aos-duration="1000">
      <img src={src} alt={alt} />
      <div className="scheduleText">
        <h4>{day}</h4>
        <p>{hours}</p>
      </div>
    </Container>
  )
}

