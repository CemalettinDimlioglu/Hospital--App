import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Doctors = ({doctors}) => {
  return (
    <Container className="p-2">
      <h3 className="display-6" style={{color:"rgb(166, 18, 189)"}} >Our Doctors</h3>
      <Row>
      {doctors.map((dr)=> (
         <Col key={dr.id} sm={6} md={} lg={} >
        <img src={dr.img} alt={dr.name} />
        <h4>{dr.name}</h4>
        <h5>{dr.dep}</h5>

         </Col>
      ))}
        
      </Row>
    </Container>
  )
}
export default Doctors

   