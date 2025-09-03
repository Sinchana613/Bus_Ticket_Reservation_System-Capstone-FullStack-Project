import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function AdminDashboard(){
  const nav = useNavigate();
  return (
    <Container className="mt-5">
      <h4>Admin</h4>
      <div className="d-flex gap-4 mt-2">
        <Card className="p-3"><h5>Buses</h5><Button onClick={()=>nav("/admin/buses")}>Manage</Button></Card>
        <Card className="p-3"><h5>Routes</h5><Button onClick={()=>nav("/admin/routes")}>Manage</Button></Card>
        <Card className="p-3"><h5>Trips</h5><Button onClick={()=>nav("/admin/trips")}>Manage</Button></Card>
        <Card className="p-3"><h5>Reports</h5><Button onClick={()=>nav("/admin/reports")}>View</Button></Card>
      </div>
    </Container>
  );
}
