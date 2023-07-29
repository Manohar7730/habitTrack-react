import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

function Home() {
  const habits = useSelector((state) => state.habits.allHabits);
  return (
    <Container>
      <h1>Habit Tracker</h1>
      <Card>
        <Card.Body>
          <h2>Today Statuses:</h2>
          <ul>
            {habits.map((habit) => (
              <li key={habit.id}>
                <h3>{habit.title}</h3>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
